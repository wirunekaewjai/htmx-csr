import { html } from "../../functions/html.mjs";

export async function albums() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  const res = await fetch(url);

  if (!res.ok) {
    return html`<div>Failed to fetch albums</div>`;
  }

  /** @type {import('../../types/album').Album[]} */
  const albums = await res.json();
  const children = albums.map((album) => {
    return html`
      <div class="p-2">
        ${album.title}
      </div>
    `;
  });

  return html`
    <div class="space-y-2 divide-y">
      ${children}
    </div>
  `;
}