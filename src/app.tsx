import { createHtmxRouter } from "@/functions/create-htmx-router";
import { registerRoutes } from "@/routes";

const router = createHtmxRouter();

registerRoutes(router);

// start routing (similar to ReactDOM.createRoot(...).render(...))
document.body.innerHTML = (
  <div
    hx-get={window.location.pathname + window.location.search}
    hx-replace-url="true"
    hx-trigger="load"
    hx-swap="outerHTML"
  />
);