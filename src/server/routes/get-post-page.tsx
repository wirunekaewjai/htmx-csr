import { navbar } from "@/client/components/navbar";
import { responseHtml } from "@/server/functions/response-html";
import { doc } from "@/server/views/doc";
import type { IRequest } from "itty-router";

export async function getPostPage(req: IRequest) {
  const id = Number(req.params.id);
  const data = doc(`Post: ${id}`, (
    <>
      {navbar(`/posts/${id}`)}

      {/* suspense */}
      <div
        class="p-2"
        hx-get={`/@post?id=${id}`}
        hx-trigger="load"
        hx-swap="outerHTML"
      >
        Loading . . .
      </div>
    </>
  ));

  return responseHtml(req, data);
}