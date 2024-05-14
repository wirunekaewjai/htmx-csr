export function interceptHtmxRequest(onIntercept: (url: URL) => Promise<Response> | null) {
  const OriginalXMLHttpRequest = window.XMLHttpRequest;

  class CustomXMLHttpRequest extends OriginalXMLHttpRequest {
    private routeUrl: URL | null = null;
    private routeHandler: Promise<Response> | null = null;

    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    open(...args: [string, string | URL]): void {
      const method = args[0];
      const url = new URL(args[1], window.location.origin);

      if (method === "GET") {
        this.routeUrl = url;
        this.routeHandler = onIntercept(url);

        if (this.routeHandler) {
          console.debug("intercept:", url.pathname, url.search);
        }

        args[1] = url;
      }

      super.open(...args);
    }

    send(body?: Document | XMLHttpRequestBodyInit | null): void {
      if (!this.routeHandler || !this.routeUrl) {
        super.send(body);
        return;
      }

      const url = this.routeUrl;
      const callback = async (response: Response) => {
        Object.defineProperty(this, "response", { writable: true });
        Object.defineProperty(this, "responseText", { writable: true });
        Object.defineProperty(this, "responseURL", { writable: true });
        Object.defineProperty(this, "readyState", { writable: true });
        Object.defineProperty(this, "status", { writable: true });
        Object.defineProperty(this, "statusText", { writable: true });

        (this.response as string) = (this.responseText as string) = await response.text();
        (this.responseURL as string) = url.toString();
        (this.readyState as number) = XMLHttpRequest.DONE;
        (this.status as number) = 200;
        (this.statusText as string) = "OK";

        this.onload?.(new ProgressEvent(""));
      };

      this.routeHandler.then(callback);
    }
  };

  window.XMLHttpRequest = CustomXMLHttpRequest;
}