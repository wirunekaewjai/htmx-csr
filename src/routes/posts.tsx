import { html } from "@/components/html";
import { navBar } from "@/components/nav-bar";

export function posts() {
  return html({
    head: (
      <title>Page Posts</title>
    ),

    body: (
      <>
        {navBar("/")}
        <h1 class="p-2 font-bold text-xl">
          List Posts
        </h1>
        <div
          class="p-2"
          hx-get="/@posts"
          hx-trigger="load"
          hx-swap="outerHTML"
        >
          Loading...
        </div>
      </>
    ),
  });
}