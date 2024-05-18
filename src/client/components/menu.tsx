import { join } from "@/client/functions/join";
import { navbar } from "@/client/views/navbar";
import { navbar_item } from "@/client/views/navbar-item";

export function menu(path: string) {
  const content = join(
    navbar_item("/", path === "/", "Posts"),
    navbar_item("/albums", path === "/albums", "Albums"),
    navbar_item("/counter", path === "/counter", "Counter"),
  );

  return navbar(content);
}