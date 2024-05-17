import { menu } from "@/client/components/menu";
import { join } from "@/client/functions/join";
import { heading } from "@/client/views/heading";
import { suspense } from "@/client/views/suspense";

export function albumsPage() {
  return join(
    // head
    <title>Albums (client)</title>,

    // body
    menu({ path: "/albums" }),
    heading({ content: "List Albums (client-side rendering)" }),
    suspense({ path: "/@albums" }),
  );
}