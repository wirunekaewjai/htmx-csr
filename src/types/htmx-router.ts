import type { IRequest } from "itty-router";

export interface HtmxRouter {
  get: (path: string, handler: (req: IRequest) => Promise<string> | string) => void;
}