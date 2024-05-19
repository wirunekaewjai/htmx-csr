import { sequentialWatch } from "@wirunekaewjai/sequential-watch";
import { TinyTsxParser } from "@wirunekaewjai/tiny-tsx/parser";
import { $, type Subprocess } from "bun";
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
  await $`tailwindcss -i ./tailwind.css -o ./assets/style.css`;
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
    minify: false,
  });

  console.timeEnd("usage");
  console.log();
}

let server: Subprocess | null = null;

await sequentialWatch([
  {
    dirs: ["views"],
    callback: buildViews,
  },
  {
    dirs: [
      "src/client/components",
      "src/client/pages",
      "src/client/views",
      "src/server/views",
    ],
    callback: buildCss,
  },
  {
    dirs: ["src/client"],
    callback: buildScript,
  },
  {
    dirs: ["src/server"],
    callback: () => {
      console.log(styleText("blue", "===== start server ====="));

      server?.kill();
      server = Bun.spawn({
        cmd: ["cargo", "run"],
        stdout: "inherit",
        stderr: "inherit",
      });
    },
  },
]);
