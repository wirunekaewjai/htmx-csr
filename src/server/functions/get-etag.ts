import { sha256 } from "@/server/functions/sha256";

export async function getEtag(input: string | BufferSource) {
  if (typeof input === "string") {
    const encoder = new TextEncoder();
    const buffer = encoder.encode(input);

    return `"${await sha256(buffer)}"`;
  }

  return `"${await sha256(input)}"`;
}