import { albums } from "@/routes/albums";
import { registerFragments } from "@/routes/fragments";
import { post } from "@/routes/post";
import { posts } from "@/routes/posts";
import type { HtmxRouter } from "@wirunekaewjai/htmx-router";

export function registerRoutes(router: HtmxRouter) {
  registerFragments(router);

  router.get("/posts/:id", ({ params }) => {
    return post(Number(params.id));
  });

  router.get("/", () => {
    return posts();
  });

  router.get("/albums", () => {
    return albums();
  });
}