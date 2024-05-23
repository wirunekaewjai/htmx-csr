// AUTO GENERATED
export interface PostContentPost {
  title: string;
  body: string;
}

export const $post_content = (post: PostContentPost) => `<div class="p-2 space-y-2"><h1 class="text-xl">${post.title}</h1><p>${post.body}</p></div>`;

/*
interface Post {
  title: string;
  body: string;
}

(post: Post) => (
  <div class="p-2 space-y-2">
    <h1 class="text-xl">{post.title}</h1>
    <p>
      {post.body}
    </p>
  </div>
);
*/
