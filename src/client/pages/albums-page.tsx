import { navbar } from "@/client/components/navbar";
import { join } from "@/client/functions/join";
import { heading } from "@/client/views/heading";
import { suspense } from "@/client/views/suspense";

export function albumsPage() {
  return join(
    // head
    <title>Albums (client)</title>,

    // body
    navbar("/albums"),
    heading("List Albums (client-side rendering)"),
    suspense("/@albums"),
  );
}