import "@wirunekaewjai/ts/htmx-interceptor/prelude";

import { albums } from "@/client/components/albums";
import { post } from "@/client/components/post";
import { posts } from "@/client/components/posts";
import { albumsPage } from "@/client/pages/albums-page";
import { counter } from "@/client/views/counter";

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
  const count = Number(query.count);
  return counter(count);
});