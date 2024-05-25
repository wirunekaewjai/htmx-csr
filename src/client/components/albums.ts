import type { Album } from "@/client/types/album";
import { $album_list } from "@/client/views/client/album-list";
import { $err } from "@/client/views/client/err";

export async function albums() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  const res = await fetch(url);

  if (!res.ok) {
    return $err("Failed to fetch albums");
  }

  const albums: Album[] = await res.json();
  return $album_list(albums);
}