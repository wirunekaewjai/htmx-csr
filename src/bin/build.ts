import { OutputType, TinyTsxParser } from "@wirunekaewjai/ts/tiny-tsx/parser";
import { $ } from "bun";
import { styleText } from "node:util";

const parser = new TinyTsxParser(
  "views/templates",
  [
    {
      dir: "src/client/views",
      namespace: "$",
      // type: OutputType.TS_JSX,
      type: OutputType.TS_HTML,
    },
    {
      dir: "src/server/views",
      // type: OutputType.RS_MACRO,
      type: OutputType.RS_HTML,
    },
  ],
);

async function buildJsx() {
  console.log(styleText("blue", "===== build jsx ====="));
  await parser.parse();
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
      "src/client/app.ts",
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

await buildJsx();
await buildCss();
await buildScript();