import { navBar } from '../components/nav-bar.mjs';
import { suspense } from '../components/suspense.mjs';
import { html } from '../functions/html.mjs';

/**
 * 
 * @param {number} id 
 */
export function post(id) {
  return html`
    <title>Page Post: ${id}</title>

    ${navBar(`/posts/${id}`)}
    ${suspense(`/@posts/${id}`, html`
      <div class="p-2">
        Loading . . .
      </div>
    `)}
  `;
}
