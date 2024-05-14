import { html } from "@/components/html";
import { $ } from "bun";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await $`tailwindcss -i ./tailwind.css -o ./assets/style.css`;
await Bun.build({
  entrypoints: [
    "src/app.tsx",
  ],
  outdir: "assets",
  minify: false,
});

await rm("dist", {
  force: true,
  recursive: true,
});

await mkdir("dist");
await cp("assets", "dist/assets", {
  force: true,
  recursive: true,
});

await writeFile("dist/index.html", html());