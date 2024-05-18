import { cleanup } from "@/tsx/builder/functions/cleanup";
import { glob } from "@/tsx/builder/functions/glob";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { styleText } from "node:util";

function toPascalCase(input: string) {
  return input
    .toLowerCase()
    .split(/[-_]/)
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join("");
}

function toLowerSnakeCase(input: string) {
  return input.toLowerCase().replace(/[-]/g, "_");
}

function parseType(input: string) {
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

function collectInterfaces(fileName: string, input: string) {
  const pattern = /interface\s[^{]+{[^}]+}/g;
  const name = toPascalCase(fileName);

  // console.log("#", fileName, "->", name);

  const interfaceMap: Map<string, string> = new Map();
  const interfaceFields: Map<string, string[][]> = new Map();

  const output = input.replace(pattern, (substr) => {
    substr = substr.replace(/\s+/g, " ");

    const arr = substr.split(" ");
    const interfaceName = name + arr[1];

    interfaceMap.set(arr[1], interfaceName);

    // console.log(interfaceName);

    const fields: string[][] = [];

    for (let i = 3; i < arr.length - 1; i += 2) {
      const fieldName = arr[i].slice(0, -1).trim();
      let fieldType = arr[i + 1].slice(0, -1).trim();

      if (interfaceMap.get(fieldType)) {
        fieldType = interfaceMap.get(fieldType)!;
      } else {
        fieldType = parseType(fieldType);
      }

      fields.push([fieldName, fieldType]);

      // console.log(fieldName, fieldType);
    }

    interfaceFields.set(interfaceName, fields);
    return "";
  });

  return {
    interfaces: {
      fields: interfaceFields,
      map: interfaceMap,
    },

    output: output.trim(),
  };
}

function collectArgs(input: string, map: Map<string, string>) {
  const arr = input.trim().slice(1, -1).split(",");
  const fields: string[][] = [];

  for (const text of arr) {
    const parts = text.split(":");
    const name = parts[0].trim();

    let type = parts[1].trim();

    if (map.get(type)) {
      type = map.get(type)!;
    } else {
      type = parseType(type);
    }

    fields.push([name, type]);
  }

  return fields;
}

function generateInterfaces(interfaces: Map<string, string[][]>) {
  const items: string[] = [];

  interfaces.forEach((fields, interfaceName) => {
    items.push(`export interface ${interfaceName} {`);

    fields.forEach(([fieldName, fieldType]) => {
      items.push(`  ${fieldName}: ${fieldType};`);
    });

    items.push("}");
    items.push("");
  });

  return items.join("\n");
}

function parseComponent(fileName: string, input: string) {
  const { interfaces, output } = collectInterfaces(fileName, input);

  const arr = output.split("=>");
  const args = collectArgs(arr[0], interfaces.map);

  const fnName = toLowerSnakeCase(fileName);
  const fnArgs = args.map((arg) => `${arg[0]}: ${arg[1]}`).join(", ");
  const fnContent = arr[1].trim();

  const fnInterfaces = generateInterfaces(interfaces.fields);
  const fnExport = `export const ${fnName} = (${fnArgs}) => ${fnContent}`;
  const fnOutput = `${fnInterfaces}\n${fnExport}`;

  return fnOutput.trim();
}

const srcDir = "views";
const srcFilePaths = glob(srcDir, ".tsx");

const dstDir = "src/client/views";
const startAt = Date.now();

for (const srcFilePath of srcFilePaths) {

  const dstPath = path.join(dstDir, srcFilePath);
  const dstParentPath = path.dirname(dstPath);

  try {
    const srcPathObj = path.parse(srcFilePath);

    const data = await readFile(path.join(srcDir, srcFilePath), "utf8");
    const code = parseComponent(srcPathObj.name, data);

    await mkdir(dstParentPath, {
      recursive: true,
    });

    const exists = existsSync(dstPath);
    const dstText = "// AUTO GENERATED\n" + code;

    await writeFile(dstPath, dstText, "utf8");

    if (exists) {
      console.log("*", dstPath);
    } else {
      console.log(styleText("green", `+ ${dstPath}`));
    }
  } catch {
    console.log(styleText("yellow", `! ${dstPath}`));
  }

  // console.log("-----");
  // console.log("#", dstPath);
  // console.log(code);
  // console.log("-----");
  // console.log();
}

await cleanup(dstDir, startAt);