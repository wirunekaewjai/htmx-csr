import { registerRoutes } from "@/routes";
import { createHtmxApp } from "@wirunekaewjai/htmx-router";

createHtmxApp(document.body, registerRoutes);