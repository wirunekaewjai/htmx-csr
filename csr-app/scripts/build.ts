import { html } from "@/components/html";
import { $ } from "bun";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", {
  force: true,
  recursive: true,
});

await mkdir("dist");

await $`tailwindcss -i ./tailwind.css -o ./dist/assets/style.css --minify`;
await Bun.build({
  entrypoints: [
    "src/app.tsx",
  ],
  outdir: "dist/assets",
  minify: true,
});

await cp("public", "dist", {
  force: true,
  recursive: true,
});

await writeFile("dist/index.html", html());