import { TinyTsxParser } from "@wirunekaewjai/ts/tiny-tsx/parser";
import { $ } from "bun";
import { styleText } from "node:util";

const parserTsx = new TinyTsxParser("views/templates", "src/client/views", ".tsx");
const parserRs = new TinyTsxParser("views/templates", "src/server/views", ".rs");

async function buildViews() {
  console.log(styleText("blue", "===== parse views for client ====="));
  await parserTsx.parse();
  console.log();

  console.log(styleText("blue", "===== parse views for server ====="));
  await parserRs.parse();
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