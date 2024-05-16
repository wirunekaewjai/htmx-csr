import { counter } from "@/client/components/counter";
import { navbar } from "@/client/components/navbar";
import { responseHtml } from "@/server/functions/response-html";
import { doc } from "@/server/views/doc";
import type { IRequest } from "itty-router";

export async function getCounterPage(req: IRequest) {
  const count = Number(req.query.count) || 0;

  const data = doc("Counter", (
    <>
      {navbar("/counter")}

      <h1 class="p-2 font-bold text-xl">
        Counter
      </h1>

      {counter(count)}
    </>
  ));

  return responseHtml(req, data);
}