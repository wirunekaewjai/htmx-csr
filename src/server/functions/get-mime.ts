import mime from "mime";

export function getMime(filepath: string): string | null {
  return mime.getType(filepath);
}