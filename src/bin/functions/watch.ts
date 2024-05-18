import { sha256 } from "@/bin/functions/sha256";
import { readFile } from "node:fs/promises";
import path from "node:path";

export interface Watch {
  dirs: string[];
  callback: () => Promise<void> | void;
}

export async function watch(watches: Watch[]) {
  const previousHashMaps: Array<Map<string, string>> = [];

  for (let i = 0; i < watches.length; i++) {
    previousHashMaps.push(new Map());
  }

  while (true) {
    for (let i = 0; i < watches.length; i++) {
      const previousHashMap = previousHashMaps[i];
      const { callback, dirs } = watches[i];

      let isDirty = false;

      const currentFilePaths: string[] = [];
      const glob = new Bun.Glob("**/*");

      for (const cwd of dirs) {
        const iter = glob.scan({
          cwd,
          onlyFiles: true,
        });

        for await (const file of iter) {
          const filePath = path.join(cwd, file);
          const fileData = await readFile(filePath);
          const fileHash = await sha256(fileData);

          const previousHash = previousHashMap.get(filePath);

          if (previousHash !== fileHash) {
            isDirty = true;
            previousHashMap.set(filePath, fileHash);
          }

          currentFilePaths.push(filePath);
        }
      }

      const previousFilePaths = Array.from(previousHashMap.keys());

      for (const filePath of previousFilePaths) {
        if (currentFilePaths.includes(filePath)) {
          continue;
        }

        isDirty = true;
        previousHashMap.delete(filePath);
      }

      if (isDirty) {
        await callback();
      }
    }

    await Bun.sleep(1000);
  }
}