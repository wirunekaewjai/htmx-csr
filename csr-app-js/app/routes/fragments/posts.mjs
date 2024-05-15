import { html } from '../../functions/html.mjs';

export async function posts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);

  if (!res.ok) {
    return html`<div>Failed to fetch posts</div>`;
  }

  /** @type {import('../../types/post').Post[]} */
  const posts = await res.json();
  const children = posts.map((post) => {
    return html`
      <a
        class="block p-2 hover:text-blue-400"
        href="/posts/${post.id}"
      >
        ${post.title}
      </a>
    `;
  });

  return html`
    <div
      class="space-y-2 divide-y"
      hx-boost="true"
    >
      ${children}
    </div>
  `;
}