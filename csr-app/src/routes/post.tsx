import { navBar } from "@/components/nav-bar";
import { suspense } from "@/components/suspense";

export function post(id: number) {
  return (
    <>
      {/* head */}
      <title>Page Post: {id}</title>

      {/* body */}
      {navBar(`/posts/${id}`)}
      {suspense(`/@posts/${id}`, (
        <div class="p-2">
          Loading . . .
        </div>
      ))}
    </>
  );
}
