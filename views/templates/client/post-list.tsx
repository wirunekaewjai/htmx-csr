interface Post {
  id: i32;
  title: string;
}

(posts: Post[]) => (
  <div
    class="space-y-2 divide-y"
    hx-boost="true"
  >
    {map(posts, (post) => (
      <a
        class="block p-2 hover:text-blue-400"
        href={`/posts/${post.id}`}
      >
        {post.title}
      </a>
    ))}
  </div>
);