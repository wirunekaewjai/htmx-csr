// AUTO GENERATED
import { tsx_join } from "@wirunekaewjai/tiny-tsx/macro";

export const $navbar = (menu: string[]) => `<nav class="flex flex-row items-center bg-black text-white p-2 space-x-4" hx-boost="true"><img src="/favicon.ico" width="32">${tsx_join(menu)}</nav>`;

/*
(menu: string[]) => (
  <nav
    class="flex flex-row items-center bg-black text-white p-2 space-x-4"
    hx-boost="true"
  >
    <img
      src="/favicon.ico"
      width="32"
    />
    {join(menu)}
  </nav>
);
*/
