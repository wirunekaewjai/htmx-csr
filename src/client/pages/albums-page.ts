import { menu } from "@/client/components/menu";
import { $title } from "@/client/views/client/title";
import { $heading } from "@/client/views/heading";
import { $suspense } from "@/client/views/suspense";
import { tsx_join } from "@wirunekaewjai/tiny-tsx/macro";

export function albumsPage() {
  return tsx_join([
    // head
    $title("Albums (client)"),

    // body
    menu("/albums"),

    $heading("List Albums (client-side rendering)"),
    $suspense("/@albums"),
  ]);
}