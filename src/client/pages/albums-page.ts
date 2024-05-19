import { menu } from "@/client/components/menu";
import { join } from "@/client/functions/join";
import { $title } from "@/client/views/client/title";
import { $heading } from "@/client/views/heading";
import { $suspense } from "@/client/views/suspense";

export function albumsPage() {
  return join(
    // head
    $title("Albums (client)"),

    // body
    menu("/albums"),

    $heading("List Albums (client-side rendering)"),
    $suspense("/@albums"),
  );
}