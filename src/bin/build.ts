import { $ } from "bun";

async function buildViews() {
  await $`bun src/tsx/builder/build-for-typescript.ts`;
  await $`bun src/tsx/builder/build-for-rust.ts`;
}

async function buildCss() {
  await $`tailwindcss -i ./tailwind.css -o ./assets/style.css --minify`;
}

async function buildScript() {
  await Bun.build({
    entrypoints: [
      "src/client/app.tsx",
    ],
    outdir: "assets",
    minify: true,
  });
}

await buildViews();
await buildCss();
await buildScript();