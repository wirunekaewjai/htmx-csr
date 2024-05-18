import { buildForRust } from "@wirunekaewjai/tiny-tsx/builder/build-for-rust";
import { buildForTypescript } from "@wirunekaewjai/tiny-tsx/builder/build-for-typescript";
import { $ } from "bun";
import { styleText } from "node:util";

async function buildViews() {
  console.log(styleText("blue", "===== build views for client ====="));
  await buildForTypescript("views/templates", "src/client/views");
  console.log();

  console.log(styleText("blue", "===== build views for server ====="));
  await buildForRust("views/templates", "src/server/views");
  console.log();
}

async function buildCss() {
  console.log(styleText("blue", "===== build css ====="));
  await $`tailwindcss -i ./tailwind.css -o ./assets/style.css --minify`;
  console.log();
}

async function buildScript() {
  console.log(styleText("blue", "===== build client script ====="));
  console.time("usage");

  await Bun.build({
    entrypoints: [
      "src/client/app.tsx",
    ],
    outdir: "assets",
    minify: true,
  });

  console.timeEnd("usage");
  console.log();
}

await buildViews();
await buildCss();
await buildScript();