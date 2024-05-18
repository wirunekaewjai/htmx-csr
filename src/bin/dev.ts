import { watch } from "@/bin/functions/watch";
import { $, type Subprocess } from "bun";
import { styleText } from "node:util";

async function buildViews() {
  console.log(styleText("blue", "===== build views for client ====="));
  await $`bun src/tsx/builder/build-for-typescript.ts`;
  console.log();

  console.log(styleText("blue", "===== build views for server ====="));
  await $`bun src/tsx/builder/build-for-rust.ts`;
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
    dirs: ["src/client", "src/server"],
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
