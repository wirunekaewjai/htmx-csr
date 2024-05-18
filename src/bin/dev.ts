import { watch } from "@/bin/functions/watch";
import { buildForRust } from "@wirunekaewjai/tiny-tsx/builder/build-for-rust";
import { buildForTypescript } from "@wirunekaewjai/tiny-tsx/builder/build-for-typescript";
import { $, type Subprocess } from "bun";
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
  await $`tailwindcss -i ./tailwind.css -o ./assets/style.css`;
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
    minify: false,
  });

  console.timeEnd("usage");
  console.log();
}

let server: Subprocess | null = null;

await watch([
  {
    dirs: ["views"],
    callback: buildViews,
  },
  {
    dirs: [
      "src/client/components",
      "src/client/pages",
      "src/client/views",
      "src/server/views",
    ],
    callback: buildCss,
  },
  {
    dirs: ["src/client"],
    callback: buildScript,
  },
  {
    dirs: ["src/server"],
    callback: () => {
      console.log(styleText("blue", "===== start server ====="));

      server?.kill();
      server = Bun.spawn({
        cmd: ["cargo", "run"],
        stdout: "inherit",
        stderr: "inherit",
      });
    },
  },
]);
