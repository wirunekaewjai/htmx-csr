import { albums } from "@/client/routes/albums";
import { post } from "@/client/routes/post";
import { posts } from "@/client/routes/posts";
import type { HtmxRouter } from "@wirunekaewjai/htmx-router";

export function registerRoutes(router: HtmxRouter) {
  router.get("/@posts/:id", ({ params }) => {
    return post(Number(params.id));
  });

  router.get("/@posts", () => {
    return posts();
  });

  router.get("/@albums", () => {
    return albums();
  });
}