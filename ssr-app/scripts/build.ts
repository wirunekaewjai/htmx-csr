import { $ } from "bun";
import { cp, rm } from "node:fs/promises";

await rm("dist", {
  force: true,
  recursive: true,
});

await Bun.build({
  entrypoints: [
    "src/server/app.tsx",
  ],
  outdir: "dist",
  target: "node",
  minify: true,
});

await cp("public", "dist/public", {
  force: true,
  recursive: true,
});

await $`tailwindcss -i ./tailwind.css -o ./dist/public/assets/style.css --minify`;
await Bun.build({
  entrypoints: [
    "src/client/app.tsx",
  ],
  outdir: "dist/public/assets",
  minify: true,
});
