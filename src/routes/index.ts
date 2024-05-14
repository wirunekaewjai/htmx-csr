import { albums } from "@/routes/albums";
import { registerFragments } from "@/routes/fragments";
import { post } from "@/routes/post";
import { posts } from "@/routes/posts";
import type { HtmxRouter } from "@/types/htmx-router";

export function registerRoutes(router: HtmxRouter) {
  registerFragments(router);

  router.get("/posts/:id", (req) => {
    return post(Number(req.params.id));
  });

  router.get("/", () => {
    return posts();
  });

  router.get("/albums", () => {
    return albums();
  });
}