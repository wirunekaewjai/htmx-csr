// AUTO GENERATED
import { tsx_map } from "@wirunekaewjai/tiny-tsx/macro";

export interface PostListPost {
  id: number;
  title: string;
}

export const $post_list = (posts: PostListPost[]) => `<div class="space-y-2 divide-y" hx-boost="true">${tsx_map(posts, (post) => `<a class="block p-2 hover:text-blue-400" href="/posts/${post.id}">${post.title}</a>`)}</div>`;

/*
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
*/
