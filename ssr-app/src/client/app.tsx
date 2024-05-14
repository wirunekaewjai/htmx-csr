import { registerRoutes } from "@/client/routes";
import { HtmxRouter } from "@wirunekaewjai/htmx-router";

const router = new HtmxRouter();

registerRoutes(router);

router.intercept();