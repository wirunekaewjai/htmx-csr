import { watch } from "@/bin/functions/watch";
import { $, type Subprocess } from "bun";

async function buildViews() {
  await $`bun src/tsx/builder/build-for-typescript.ts`;
  await $`bun src/tsx/builder/build-for-rust.ts`;
}

async function buildCss() {
  await $`tailwindcss -i ./tailwind.css -o ./assets/style.css`;
}

async function buildScript() {
  await Bun.build({
    entrypoints: [
      "src/client/app.tsx",
    ],
    outdir: "assets",
    minify: false,
  });
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
      server?.kill();
      server = Bun.spawn({
        cmd: ["cargo", "run"],
        stdout: "inherit",
        stderr: "inherit",
      });
    },
  },
]);
