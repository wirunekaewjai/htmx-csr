import { html } from "@/components/html";
import { navBar } from "@/components/nav-bar";

export async function pageAlbums() {
  return html({
    head: (
      <title>Page Albums</title>
    ),

    body: (
      <>
        {navBar("/albums")}
        <div
          class="p-2"
          hx-get="/@albums"
          hx-trigger="load delay:1s"
          hx-swap="outerHTML"
        >
          Loading...
        </div>
      </>
    ),
  });
}