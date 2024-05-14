import { html } from "@/components/html";
import { navBar } from "@/components/nav-bar";

export async function pagePost(id: number) {
  return html({
    head: (
      <title>Page Post: {id}</title>
    ),

    body: (
      <>
        {navBar(`/posts/${id}`)}
        <div
          class="p-2"
          hx-get={`/@posts/${id}`}
          hx-trigger="load"
          hx-swap="outerHTML"
        >
          Loading...
        </div>
      </>
    ),
  });
}
