import { html } from "@/components/html";
import { navBar } from "@/components/nav-bar";
import { suspense } from "@/components/suspense";

export function albums() {
  return html({
    head: (
      <title>Page Albums</title>
    ),

    body: (
      <>
        {navBar("/albums")}
        {suspense("/@albums", (
          <div class="p-2">
            Loading . . .
          </div>
        ))}
      </>
    ),
  });
}