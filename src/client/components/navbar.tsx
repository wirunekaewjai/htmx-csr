import { join } from "@/client/functions/join";
import { navbar as nav } from "@/client/views/navbar";
import { navbar_item } from "@/client/views/navbar_item";

export function navbar(pathname: string) {
  const content = join(
    navbar_item("/", pathname == "/", "Posts"),
    navbar_item("/albums", pathname == "/albums", "Albums"),
    navbar_item("/counter", pathname == "/counter", "Counter"),
  );

  return nav(content);
}