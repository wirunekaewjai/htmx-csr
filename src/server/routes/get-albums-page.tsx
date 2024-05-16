import { navbar } from "@/client/components/navbar";
import { responseHtml } from "@/server/functions/response-html";
import { doc } from "@/server/views/doc";
import type { IRequest } from "itty-router";

export async function getAlbumsPage(req: IRequest) {
  const data = doc("Albums (server)", (
    <>
      {navbar("/albums")}

      <h1 class="p-2 font-bold text-xl">
        List Albums
      </h1>

      {/* suspense */}
      <div
        class="p-2"
        hx-get="/@albums"
        hx-trigger="load"
        hx-swap="outerHTML"
      >
        Loading . . .
      </div>
    </>
  ));

  return responseHtml(req, data);
}