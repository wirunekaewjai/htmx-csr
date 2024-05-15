import { html } from '../../functions/html.mjs';

/**
 * 
 * @param {number} id 
 */
export async function post(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return html`<div>Failed to fetch post: ${id}</div>`;
  }

  /** @type {import('../../types/post').Post} */
  const post = await res.json();

  return html`
    <div class="p-2 space-y-2">
      <h1 class="text-xl">${post.title}</h1>
      <p>
        ${post.body}
      </p>
    </div>
  `;
}