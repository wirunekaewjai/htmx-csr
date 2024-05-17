import { RsGen } from "@/bin/classes/rs-gen";
import { TsGen } from "@/bin/classes/ts-gen";
import { $ } from "bun";

await new TsGen("views", "src/client/views").generate();
await new RsGen("views", "src/server/views").generate();

await $`tailwindcss -i ./tailwind.css -o ./assets/style.css`;
await Bun.build({
  entrypoints: [
    "src/client/app.tsx",
  ],
  outdir: "assets",
  minify: false,
});

await $`cargo run`;