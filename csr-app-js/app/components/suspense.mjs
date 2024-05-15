import { html } from '../functions/html.mjs';

/**
 * 
 * @param {string} fragment 
 * @param {string} loading 
 * @returns {string}
 */
export function suspense(fragment, loading) {
  return html`
    <div
      hx-get="${fragment}"
      hx-trigger="load"
      hx-swap="outerHTML"
    >
      ${loading}
    </div>
  `;
}