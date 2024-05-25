import type { Post } from "@/client/types/post";
import { $err } from "@/client/views/client/err";
import { $post_list } from "@/client/views/client/post-list";

export async function posts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);

  if (!res.ok) {
    return $err("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();
  return $post_list(posts);
}