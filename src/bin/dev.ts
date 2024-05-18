import { $ } from "bun";

await $`bun src/tsx/builder/build-for-typescript.ts`;
await $`bun src/tsx/builder/build-for-rust.ts`;

await $`tailwindcss -i ./tailwind.css -o ./assets/style.css`;
await Bun.build({
  entrypoints: [
    "src/client/app.tsx",
  ],
  outdir: "assets",
  minify: false,
});

await $`cargo run`;