import { Router } from '../../functions/router.mjs';
import { albums } from './albums.mjs';
import { post } from './post.mjs';
import { posts } from './posts.mjs';

/**
 * 
 * @param {Router} router 
 */
export function registerFragments(router) {
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