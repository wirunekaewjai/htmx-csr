import { html } from '../functions/html.mjs';

/**
 * 
 * @param {string} pathname 
 * @returns {string}
 */
export function navBar(pathname) {
  const baseClass = "p-2 hover:bg-white/10 rounded-full [&.active]:bg-white/20 [&.active]:pointer-events-none";
  const postsClass = pathname === "/" ? "active" : "";
  const albumsClass = pathname === "/albums" ? "active" : "";

  return html`
    <nav
      class="flex flex-row items-center bg-black text-white p-2 space-x-4"
      hx-boost="true"
    >
      <img
        src="/favicon.ico"
        width="32"
      />
      <a
        class="${`${postsClass} ${baseClass}`.trim()}"
        href="/"
      >
        Posts
      </a>
      <a
        class="${`${albumsClass} ${baseClass}`.trim()}"
        href="/albums"
      >
        Albums
      </a>
    </nav>
  `;
}