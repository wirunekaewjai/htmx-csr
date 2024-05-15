import { navBar } from '../components/nav-bar.mjs';
import { suspense } from '../components/suspense.mjs';
import { html } from '../functions/html.mjs';

export function posts() {
  return html`
    <title>Page Posts</title>

    ${navBar("/")}

    <h1 class="p-2 font-bold text-xl">
      List Posts
    </h1>

    ${suspense("/@posts", html`
      <div class="p-2">
        Loading . . .
      </div>
    `)}
  `;
}