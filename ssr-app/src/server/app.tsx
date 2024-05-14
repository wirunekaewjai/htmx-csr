import { registerRoutes } from "@/server/routes";
import { Router } from "itty-router";

const router = Router();

registerRoutes(router);

Bun.serve({
  development: false,
  hostname: "0.0.0.0",
  port: 8080,

  fetch: (req) => {
    return router.fetch(req);
  },
});