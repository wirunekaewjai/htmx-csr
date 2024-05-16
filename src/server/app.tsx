import { getAlbumsPage } from "@/server/routes/get-albums-page";
import { getAsset } from "@/server/routes/get-asset";
import { getCounterPage } from "@/server/routes/get-counter-page";
import { getPostPage } from "@/server/routes/get-post-page";
import { getPostsPage } from "@/server/routes/get-posts-page";
import { getPublic } from "@/server/routes/get-public";
import { Router } from "itty-router";

const router = Router();

router.get("/assets/:filename+", getAsset);
router.get("/albums", getAlbumsPage);
router.get("/counter", getCounterPage);
router.get("/posts/:id", getPostPage);
router.get("/", getPostsPage);
router.get("*", getPublic);

Bun.serve({
  development: false,
  hostname: "0.0.0.0",
  port: 8080,

  fetch: router.fetch,
});

console.log("server is running...");
console.log();