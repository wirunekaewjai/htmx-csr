import { interceptHtmxRequest } from "@/functions/intercept-htmx-request";
import type { HtmxRouter } from "@/types/htmx-router";
import { Router, type IRequest } from "itty-router";

export function createHtmxRouter(): HtmxRouter {
  const router = Router();

  const get = (path: string, handler: (req: IRequest) => Promise<string> | string) => {
    router.get(path, async (req) => {
      const html = await handler(req);

      return new Response(html, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    });
  };

  interceptHtmxRequest((url): Promise<Response> => {
    return router.fetch(new Request(url));
  });

  return {
    get,
  };
}