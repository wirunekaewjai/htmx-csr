import { html } from "./functions/html.mjs";
import { Router } from './functions/router.mjs';
import { registerRoutes } from './routes/index.mjs';

const router = new Router();

registerRoutes(router);
router.intercept();

document.body.innerHTML = html`
  <div
    hx-get="${window.location.pathname + window.location.search}"
    hx-replace-url="true"
    hx-trigger="load"
    hx-swap="outerHTML"
  >
  </div>
`;