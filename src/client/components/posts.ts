import { join } from "@/client/functions/join";
import type { Post } from "@/client/types/post";
import { $err } from "@/client/views/client/err";
import { $post_item } from "@/client/views/client/post-item";
import { $post_list } from "@/client/views/client/post-list";

export async function posts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);

  if (!res.ok) {
    return $err("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();
  const content = join(...posts.map($post_item));

  return $post_list(content);
}