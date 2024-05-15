interface Post {
  id: number;
  title: string;
}

export async function posts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);

  if (!res.ok) {
    return (
      <div>Failed to fetch posts</div>
    );
  }

  const posts: Post[] = await res.json();
  const children = posts.map((post) => {
    return (
      <a
        class="block p-2 hover:text-blue-400"
        href={`/posts/${post.id}`}
      >
        {post.title}
      </a>
    );
  });

  return (
    <div
      class="space-y-2 divide-y"
      hx-boost="true"
    >
      {children}
    </div>
  );
}