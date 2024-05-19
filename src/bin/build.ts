import { TinyTsxParser } from "@wirunekaewjai/ts/tiny-tsx/parser";
import { $ } from "bun";
import { styleText } from "node:util";

const parser = new TinyTsxParser("views/templates");

async function buildViews() {
  console.log(styleText("blue", "===== parse views for client ====="));
  await parser.parse("typescript_jsx", "src/client/views");
  console.log();

  console.log(styleText("blue", "===== parse views for server ====="));
  await parser.parse("rust_html_macro", "src/server/views");
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

  const build = await Bun.build({
    entrypoints: [
      "src/client/app.tsx",
    ],
    outdir: "assets",
    minify: true,
  });

  if (!build.success) {
    console.log(build.logs);
  }

  console.timeEnd("usage");
  console.log();
}

await buildViews();
await buildCss();
await buildScript();