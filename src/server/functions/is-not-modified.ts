import { Header } from "@/server/enums/header";

export function isNotModified(req: Request, etag: string) {
  const previous = req.headers.get(Header.IfNoneMatch);

  if (!previous) {
    return false;
  }

  return previous === etag;
}