import "@/client/prelude";

import { albums } from "@/client/components/albums";
import { counter } from "@/client/components/counter";
import { post } from "@/client/components/post";
import { posts } from "@/client/components/posts";
import { albumsPage } from "@/client/pages/albums-page";

// client-side page
interceptor.get("/albums", albumsPage);

// fetch 3rd party api on client-side
interceptor.get("/@albums", albums);
interceptor.get("/@posts", posts);
interceptor.get("/@post", ({ query }) => {
  return post(Number(query.id));
});

// +/- on client-side
interceptor.get("/@counter", ({ query }) => {
  return counter(Number(query.count));
});