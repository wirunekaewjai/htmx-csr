// AUTO GENERATED
export interface PostItemPost {
  id: number;
  title: string;
}

export const $post_item = (post: PostItemPost) => `<a class="block p-2 hover:text-blue-400" href="/posts/${post.id}">${post.title}</a>`;

/*
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
*/
