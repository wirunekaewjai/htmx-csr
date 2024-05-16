import { CacheDirective } from "@/server/enums/cache-directive";
import { ContentType } from "@/server/enums/content-type";
import { Header } from "@/server/enums/header";
import { getEtag } from "@/server/functions/get-etag";
import { getMime } from "@/server/functions/get-mime";
import { isNotModified } from "@/server/functions/is-not-modified";
import { response404 } from "@/server/functions/response-404";
import type { IRequest } from "itty-router";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

export async function getPublic(req: IRequest) {
  const url = new URL(req.url);
  const filePath = "public/" + url.pathname;

  if (!existsSync(filePath)) {
    return response404();
  }

  const buffer = await readFile(filePath);
  const etag = await getEtag(buffer);

  const status = isNotModified(req, etag) ? 304 : 200;
  const mime = getMime(filePath) ?? ContentType.Plain;

  return new Response(buffer, {
    status,
    headers: {
      [Header.CacheControl]: CacheDirective.PublicMustRevalidate,
      [Header.ContentType]: mime,
      [Header.Etag]: etag,
    },
  });
}