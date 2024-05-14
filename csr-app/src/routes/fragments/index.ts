import { albums } from "@/routes/fragments/albums";
import { post } from "@/routes/fragments/post";
import { posts } from "@/routes/fragments/posts";
import type { HtmxRouter } from "@wirunekaewjai/htmx-router";

export function registerFragments(router: HtmxRouter) {
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