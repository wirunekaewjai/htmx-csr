import { lstat, readdir, readFile, rm } from "node:fs/promises";
import { posix } from "node:path";

export async function cleanup(parent: string, key: string) {
  const files = await readdir(parent);

  for (const file of files) {
    const path = posix.join(parent, file);

    if ((await lstat(path)).isDirectory()) {
      await cleanup(path, key);
    }

    else {
      const text = await readFile(path, "utf8");

      if (text.startsWith(key)) {
        continue;
      }

      await rm(path, {
        force: true,
        recursive: true,
      });

      console.log("delete:", path);
    }
  }

  const current = await readdir(parent);

  if (current.length > 0) {
    return;
  }

  await rm(parent, {
    force: true,
    recursive: true,
  });

  console.log("delete:", parent);
}