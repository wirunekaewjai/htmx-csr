// AUTO GENERATED @ 2024-05-17T16:46:47.978Z
export interface CounterProps {
  count: number;
  decrement: number;
  increment: number;
}

export function counter(props: CounterProps) {
  return `<div class="p-2 flex flex-row items-center" hx-target="this" hx-swap="outerHTML" ><button class="w-8 h-8 bg-red-600 text-white rounded-md shadow-md" hx-get="/@counter?count=${props.decrement}" hx-trigger="click" hx-replace-url="/counter?count=${props.decrement}" >-</button><div class="flex items-center px-4 h-8 mx-2 border rounded-md">${props.count}</div><button class="w-8 h-8 bg-blue-600 text-white rounded-md shadow-md" hx-get="/@counter?count=${props.increment}" hx-trigger="click" hx-replace-url="/counter?count=${props.increment}" >+</button></div>`;
}