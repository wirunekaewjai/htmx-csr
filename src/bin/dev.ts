import { $ } from "bun";

await $`tailwindcss -i ./tailwind.css -o ./assets/style.css`;
await Bun.build({
  entrypoints: [
    "src/client/app.tsx",
  ],
  outdir: "assets",
  minify: false,
});

await $`cargo run`;