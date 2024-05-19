interface Post {
  id: i32;
  title: string;
}

(post: Post) => (
  <a
    class="block p-2 hover:text-blue-400"
    href={`/posts/${post.id}`}
  >
    {post.title}
  </a>
);