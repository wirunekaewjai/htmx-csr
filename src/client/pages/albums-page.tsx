import { navbar } from "@/client/components/navbar";

export function albumsPage() {
  return (
    <>
      {/* head */}
      <title>Albums (client)</title>

      {/* body */}
      {navbar("/albums")}

      <h1 class="p-2 font-bold text-xl">
        List Albums
      </h1>

      {/* suspense */}
      <div
        class="p-2"
        hx-get="/@albums"
        hx-trigger="load"
        hx-swap="outerHTML"
      >
        Loading . . .
      </div>
    </>
  );
}