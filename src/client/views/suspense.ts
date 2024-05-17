// AUTO GENERATED @ 2024-05-17T16:46:47.978Z
export interface SuspenseProps {
  path: string;
}

export function suspense(props: SuspenseProps) {
  return `<div class="p-2" hx-get="${props.path}" hx-trigger="load" hx-swap="outerHTML" >Loading . . .</div>`;
}