import type { Post } from "@/client/types/post";

export async function post(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return (
      <div>Failed to fetch post: {id}</div>
    );
  }

  const post: Post = await res.json();

  return (
    <div class="p-2 space-y-2">
      <h1 class="text-xl">{post.title}</h1>
      <p>
        {post.body}
      </p>
    </div>
  );
}