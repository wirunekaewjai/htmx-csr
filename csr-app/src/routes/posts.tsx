import { navBar } from "@/components/nav-bar";
import { suspense } from "@/components/suspense";

export function posts() {
  return (
    <>
      {/* head */}
      <title>Page Posts</title>

      {/* body */}
      {navBar("/")}

      <h1 class="p-2 font-bold text-xl">
        List Posts
      </h1>

      {suspense("/@posts", (
        <div class="p-2">
          Loading . . .
        </div>
      ))}
    </>
  );
}