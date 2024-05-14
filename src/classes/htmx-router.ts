import { Router, type IRequest } from "itty-router";

type Async<T> = Promise<T> | T;
type Handler = (request: HtmxRequest) => Async<string>;

export type HtmxRequest = IRequest;

export class HtmxRouter {
  private router = Router();

  public get(path: string, handler: Handler) {
    this.router.get(path, async (request) => {
      return await handler(request);
    });
  }

  public intercept() {
    const router = this.router;
    const OriginalXMLHttpRequest = window.XMLHttpRequest;

    class InterceptedXMLHttpRequst extends OriginalXMLHttpRequest {
      private method: string | null = null;
      private url: string | null = null;

      open(method: string, url: string | URL): void;
      open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
      open(...args: [string, string | URL]): void {
        const method = args[0];
        const url = args[1];

        if (typeof url === "string") {
          for (const entry of router.routes) {
            if (method !== entry[0]) {
              continue;
            }

            const regex = entry[1];

            if (!regex.exec(url)) {
              continue;
            }

            this.method = method;
            this.url = url;

            console.debug(method, url);
          }
        }

        super.open(...args);
      }

      send(body?: Document | XMLHttpRequestBodyInit | null) {
        if (!this.method || !this.url) {
          // default behavior
          super.send(body);
          return;
        }

        const url = this.url;
        const request = new Request(url, {
          method: this.method,
        });

        router
          .fetch(request)
          .then((html: string | null) => {
            Object.defineProperty(this, "response", { writable: true });
            Object.defineProperty(this, "responseText", { writable: true });
            Object.defineProperty(this, "responseURL", { writable: true });
            Object.defineProperty(this, "readyState", { writable: true });
            Object.defineProperty(this, "status", { writable: true });
            Object.defineProperty(this, "statusText", { writable: true });

            (this.response as string) = (this.responseText as string) = html ?? "";
            (this.responseURL as string) = new URL(url, window.location.origin).href;
            (this.readyState as number) = XMLHttpRequest.DONE;
            (this.status as number) = 200;
            (this.statusText as string) = "OK";

            this.onload?.(new ProgressEvent(""));
          });
      }
    };

    window.XMLHttpRequest = InterceptedXMLHttpRequst;
  }
}