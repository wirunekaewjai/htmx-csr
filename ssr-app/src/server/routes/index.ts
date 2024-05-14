import { CacheDirective } from "@/server/enums/cache-directive";
import { Header } from "@/server/enums/header";
import { getEtag } from "@/server/functions/get-etag";
import { getMime } from "@/server/functions/get-mime";
import { isNotModified } from "@/server/functions/is-not-modified";
import { response404 } from "@/server/functions/response-404";
import { responseHtml } from "@/server/functions/response-html";
import { albums } from "@/server/routes/albums";
import { post } from "@/server/routes/post";
import { posts } from "@/server/routes/posts";
import type { ServerRouter } from "@/server/types/server-router";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

export function registerRoutes(router: ServerRouter) {
  router.get("/posts/:id", (req) => {
    return responseHtml(req, post(Number(req.params.id)));
  });

  router.get("/albums", (req) => {
    return responseHtml(req, albums());
  });

  router.get("/", (req) => {
    return responseHtml(req, posts());
  });

  router.get("*", async (req) => {
    const url = new URL(req.url);
    const filePath = "public/" + url.pathname;

    if (!existsSync(filePath)) {
      return response404();
    }

    const buffer = await readFile(filePath);

    const mime = getMime(filePath) ?? "text/plain";
    const etag = await getEtag(buffer);
    const status = isNotModified(req, etag) ? 304 : 200;

    return new Response(buffer, {
      status,
      headers: {
        [Header.CacheControl]: CacheDirective.PublicMustRevalidate,
        [Header.ContentType]: mime,
        [Header.Etag]: etag,
      },
    });
  });
}