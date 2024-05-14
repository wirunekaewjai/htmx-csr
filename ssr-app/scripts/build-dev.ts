import { $ } from "bun";
import { mkdir, rm } from "node:fs/promises";

await rm("public/assets", {
  force: true,
  recursive: true,
});

await mkdir("public/assets");

await $`tailwindcss -i ./tailwind.css -o ./public/assets/style.css`;
await Bun.build({
  entrypoints: [
    "src/client/app.tsx",
  ],
  outdir: "public/assets",
  minify: false,
});