import { interceptHtmxRequest } from "@/functions/intercept-htmx-request";
import { responseHtml } from "@/functions/response-html";
import { itemPost } from "@/routes/item-post";
import { listAlbums } from "@/routes/list-albums";
import { listPosts } from "@/routes/list-posts";
import { pageAlbums } from "@/routes/page-albums";
import { pagePost } from "@/routes/page-post";
import { pagePosts } from "@/routes/page-posts";
import { Router } from "itty-router";

const router = Router();

// render components
router.get("/@posts/:id", async ({ params }) => {
  const html = await itemPost(Number(params.id));
  return responseHtml(html);
});

router.get("/@posts", async () => {
  const html = await listPosts();
  return responseHtml(html);
});

router.get("/@albums", async () => {
  const html = await listAlbums();
  return responseHtml(html);
});

// render pages
router.get("/posts/:id", async ({ params }) => {
  const html = await pagePost(Number(params.id));
  return responseHtml(html);
});

router.get("/albums", async () => {
  const html = await pageAlbums();
  return responseHtml(html);
});

router.get("/", async () => {
  const html = await pagePosts();
  return responseHtml(html);
});

interceptHtmxRequest((url): Promise<Response> => {
  return router.fetch(new Request(url));
});

document.body.innerHTML = (
  <div
    hx-get={window.location.pathname + window.location.search}
    hx-replace-url="true"
    hx-trigger="load"
    hx-swap="outerHTML"
  />
);