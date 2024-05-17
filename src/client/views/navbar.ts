// AUTO GENERATED @ 2024-05-17T16:46:47.978Z
export interface NavbarProps {
  content: string;
}

export function navbar(props: NavbarProps) {
  return `<nav class="flex flex-row items-center bg-black text-white p-2 space-x-4" hx-boost="true" ><img src="/favicon.ico" width="32" />${props.content}</nav>`;
}