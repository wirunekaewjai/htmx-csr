import { TinyTsxParser } from "@wirunekaewjai/tiny-tsx/parser";
import { $ } from "bun";
import { styleText } from "node:util";

async function buildViews() {
  const parser = new TinyTsxParser("views/templates");

  console.log(styleText("blue", "===== parse views for client ====="));
  await parser.typescript("src/client/views");
  console.log();

  console.log(styleText("blue", "===== parse views for server ====="));
  await parser.rust("src/server/views");
  console.log();
}

async function buildCss() {
  console.log(styleText("blue", "===== build css ====="));
  await $`tailwindcss -i ./tailwind.css -o ./assets/style.css --minify`;
  console.log();
}

async function buildScript() {
  console.log(styleText("blue", "===== build client script ====="));
  console.time("usage");

  await Bun.build({
    entrypoints: [
      "src/client/app.tsx",
    ],
    outdir: "assets",
    minify: true,
  });

  console.timeEnd("usage");
  console.log();
}

await buildViews();
await buildCss();
await buildScript();