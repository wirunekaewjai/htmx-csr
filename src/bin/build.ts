import { $ } from "bun";

await $`tailwindcss -i ./tailwind.css -o ./assets/style.css --minify`;
await Bun.build({
  entrypoints: [
    "src/client/app.tsx",
  ],
  outdir: "assets",
  minify: true,
});