import type { Post } from "@/client/types/post";
import { $err } from "@/client/views/client/err";
import { $post_content } from "@/client/views/client/post-content";

export async function post(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return $err(`Failed to fetch post: ${id}`);
  }

  const post: Post = await res.json();
  return $post_content(post);
}