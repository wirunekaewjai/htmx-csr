import { navBar } from '../components/nav-bar.mjs';
import { suspense } from '../components/suspense.mjs';
import { html } from '../functions/html.mjs';

export function albums() {
  return html`
    <title>Page Albums</title>

    ${navBar("/albums")}
    ${suspense("/@albums", html`
      <div class="p-2">
        Loading . . .
      </div>
    `)}
  `;
}