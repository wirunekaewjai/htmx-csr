import { join } from "@/client/functions/join";
import type { Album } from "@/client/types/album";
import { $album_item } from "@/client/views/client/album-item";
import { $album_list } from "@/client/views/client/album-list";
import { $err } from "@/client/views/client/err";

export async function albums() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  const res = await fetch(url);

  if (!res.ok) {
    return $err("Failed to fetch albums");
  }

  const albums: Album[] = await res.json();
  const content = join(...albums.map($album_item));

  return $album_list(content);
}