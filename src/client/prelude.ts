import { HxInterceptor } from "@/client/htmx/interceptor";
import type HTMX from "htmx.org";

declare global {
  var htmx: typeof HTMX;
  var interceptor: HxInterceptor;
}

window.interceptor = new HxInterceptor();

