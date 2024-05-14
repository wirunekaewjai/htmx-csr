import { HtmxRouter } from "@/classes/htmx-router";
import { registerRoutes } from "@/routes";

const router = new HtmxRouter();

registerRoutes(router);

router.intercept();

// start routing (similar to ReactDOM.createRoot(...).render(...))
document.body.innerHTML = (
  <div
    hx-get={window.location.pathname + window.location.search}
    hx-replace-url="true"
    hx-trigger="load"
    hx-swap="outerHTML"
  />
);