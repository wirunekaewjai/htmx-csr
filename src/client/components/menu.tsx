import { join } from "@/client/functions/join";
import { navbar } from "@/client/views/navbar";
import { navbar_item } from "@/client/views/navbar_item";

export function menu(props: {
  path: string;
}) {
  const content = join(
    navbar_item({
      active: props.path === "/",
      content: "Posts",
      href: "/",
    }),

    navbar_item({
      active: props.path === "/albums",
      content: "Albums",
      href: "/albums",
    }),

    navbar_item({
      active: props.path === "/counter",
      content: "Counter",
      href: "/counter",
    }),
  );

  return navbar({ content });
}