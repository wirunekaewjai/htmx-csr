import { CacheDirective } from "@/server/enums/cache-directive";
import { ContentType } from "@/server/enums/content-type";
import { Header } from "@/server/enums/header";
import { isNotModified } from "@/server/functions/is-not-modified";
import { getEtag } from "./get-etag";

export async function responseHtml(req: Request, html: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(html);

  const etag = await getEtag(data);
  const status = isNotModified(req, etag) ? 304 : 200;

  return new Response(html, {
    status,
    headers: {
      [Header.CacheControl]: CacheDirective.PublicMustRevalidate,
      [Header.ContentType]: ContentType.Html,
      [Header.Etag]: etag,
    },
  });
}