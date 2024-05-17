import { cleanup } from "@/bin/functions/cleanup";
import { glob } from "@/bin/functions/glob";
import { parseHtml } from "@/bin/functions/parse-html";
import { lstat, readdir, mkdir, readFile, writeFile } from "node:fs/promises";
import { posix } from "node:path";

export class TsGen {
  public constructor(
    private readonly srcDir: string,
    private readonly dstDir: string,
  ) { }

  public async generate() {
    const key = "// AUTO GENERATED @ " + new Date().toISOString() + "\n";
    const srcFiles = glob(this.srcDir, ".html");

    for (const srcFile of srcFiles) {
      const srcPath = posix.join(this.srcDir, srcFile);
      const data = await readFile(srcPath, "utf8");
      const html = parseHtml(data);

      const srcName = this.toLowerSnakeCase(posix.parse(srcFile).name);
      const srcDir = posix.parse(srcFile).dir;

      const dstPath = posix.join(this.dstDir, srcDir, srcName + ".ts");
      const dstDir = posix.parse(dstPath).dir;
      const dstData = key + this.parseFunction(srcName, html);

      await mkdir(dstDir, {
        recursive: true,
      });

      await writeFile(dstPath, dstData, "utf8");
    }

    // await this.generateModules(this.dstDir, key);
    await cleanup(this.dstDir, key);
  }

  // private async generateModules(parent: string, key: string) {
  //   const files = await readdir(parent);

  //   const imports: string[] = [];
  //   const exports: string[] = [];

  //   const dir = posix.parse(parent).name;

  //   for (const file of files) {
  //     const path = posix.join(parent, file);
  //     const name = posix.parse(path).name;

  //     if ((await lstat(path)).isDirectory()) {
  //       await this.generateModules(path, key);

  //       const text = await readFile(posix.join(path, "index.ts"), "utf8");

  //       if (!text.startsWith(key)) {
  //         continue;
  //       }

  //       imports.push(`import { ${name} } from "./${name}";`);
  //       exports.push(`  ${name},`);
  //     }

  //     else {
  //       const text = await readFile(path, "utf8");

  //       if (!text.startsWith(key)) {
  //         continue;
  //       }

  //       imports.push(`import { ${name} } from "./${name}";`);
  //       exports.push(`  ${name},`);
  //     }
  //   }

  //   const a = imports.join("\n");
  //   const b = exports.join("\n");

  //   if (!(a + b)) {
  //     return;
  //   }

  //   const lines: string[] = [];

  //   if (a) {
  //     lines.push(a);
  //   }

  //   if (b) {
  //     const line = [
  //       `export const ${dir} = {`,
  //       b,
  //       `};`,
  //     ].join("\n");

  //     lines.push(line);
  //   }

  //   const text = key + lines.join("\n\n");
  //   const path = posix.join(parent, "index.ts");

  //   await writeFile(path, text, "utf8");
  //   console.log(path);
  // }

  private parseFunction(fnName: string, input: string) {
    const fnArgsMap: Map<string, string> = new Map();
    const fnArgsOrder: string[] = [];

    const fnOutput = input.replace(/{{[^}]+}}/g, (substr) => {
      const text = substr.slice(2, -2).trim();
      const arr = text.split(":");
      const name = arr[0];
      const type = this.parseType((arr[1] || "string").trim());

      if (!name) {
        return "";
      }

      const argType = fnArgsMap.get(name);

      if (argType) {
        if (argType !== type) {
          throw `type conflicted between "${type}" and "${fnArgsMap.get(name)}" on "${name}"`;
        }
      } else {
        fnArgsMap.set(name, type);
        fnArgsOrder.push(name);
      }

      return "${props." + name + "}";
    });

    const fnProps = fnArgsOrder.sort().map((name) => `  ${name}: ${fnArgsMap.get(name)};`).join("\n");
    const fnPropType = this.toPascalCase(fnName);
    const fnCode = [
      `export interface ${fnPropType}Props {`,
      fnProps,
      `}`,
      ``,
      `export function ${fnName}(props: ${fnPropType}Props) {`,
      `  return \`${fnOutput}\`;`,
      `}`,
    ];

    return fnCode.join("\n");
  }

  private parseType(input: string) {
    switch (input) {
      case "i8":
      case "i16":
      case "i32":
      case "i64":
      case "u8":
      case "u16":
      case "u32":
      case "u64":
        return "number";

      case "boolean":
      case "string":
        return input;

      default:
        throw `invalid type: ${input}`;
    }
  }

  // private toKebabCase(input: string) {
  //   return input.toLowerCase().replace(/[-]/g, "_");
  // }

  private toLowerSnakeCase(input: string) {
    return input.toLowerCase().replace(/[-]/g, "_");
  }

  private toPascalCase(input: string) {
    return input
      .split("_")
      .map((x) => x[0].toUpperCase() + x.slice(1))
      .join("");
  }
}