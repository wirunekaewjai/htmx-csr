export class Router {
  /** @type {import('../types/route').Route[]} */
  routes = [];

  /**
   * 
   * @param {string} path 
   * @param {import('../types/route').RouteHandler} handler 
   */
  get(path, handler) {
    this.routes.push({
      method: "GET",
      path,
      handler,
    });
  }

  intercept() {
    const routes = this.routes;
    const OriginalXMLHttpRequest = window.XMLHttpRequest;

    class InterceptedXMLHttpRequst extends OriginalXMLHttpRequest {
      /** @type {string | null} */
      url = null;

      /** @type {import('../types/route').Request | null} */
      request = null;

      /** @type {import('../types/route').Route | null} */
      route = null;

      /**
       * @param {[string, string | URL]} args
       */
      open(...args) {
        const method = args[0];
        const url = args[1];

        if (typeof url === "string") {
          const { pathname, searchParams } = new URL(url, window.location.origin);

          for (const route of routes) {
            if (route.method !== method) {
              continue;
            }

            const pattern = new RegExp(
              "^" + route.path.replace(/:[^\/]+/g, "([^\\/]+)") + "$"
            );

            const match = pathname.match(pattern);

            if (match) {
              const keys = route.path.match(/:[^\/]+/g)?.map(param => param.slice(1)) || [];
              const vals = match.slice(1);

              /** @type {Record<string, string>} */
              const params = {};

              for (let i = 0; i < keys.length; i++) {
                params[keys[i]] = vals[i];
              }

              /** @type {Record<string, string>} */
              const query = {};

              searchParams.forEach((value, key) => {
                query[key] = value;
              });

              this.url = url;
              this.route = route;
              this.request = {
                params,
                path: pathname,
                query,
              };

              console.debug(method, url);
              break;
            }
          }
        }

        super.open(...args);
      }

      /**
       * @param {Document | XMLHttpRequestBodyInit | null | undefined} body
       */
      send(body) {
        if (!this.url || !this.request || !this.route) {
          // default behavior
          super.send(body);
          return;
        }

        const url = this.url;
        const handler = this.route.handler(this.request);

        /**
         * 
         * @param {string} html 
         */
        const callback = (html) => {
          Object.defineProperty(this, "response", { writable: true });
          Object.defineProperty(this, "responseText", { writable: true });
          Object.defineProperty(this, "responseURL", { writable: true });
          Object.defineProperty(this, "readyState", { writable: true });
          Object.defineProperty(this, "status", { writable: true });
          Object.defineProperty(this, "statusText", { writable: true });

          // @ts-ignore
          this.response = this.responseText = html;

          // @ts-ignore
          this.responseURL = new URL(url, window.location.origin).href;

          // @ts-ignore
          this.readyState = XMLHttpRequest.DONE;

          // @ts-ignore
          this.status = 200;

          // @ts-ignore
          this.statusText = "OK";

          this.onload?.(new ProgressEvent(""));
        };

        if (handler instanceof Promise) {
          handler.then(callback);
        } else {
          callback(handler);
        }
      }
    };

    window.XMLHttpRequest = InterceptedXMLHttpRequst;
  }
}