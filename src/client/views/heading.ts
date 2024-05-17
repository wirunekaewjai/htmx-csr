// AUTO GENERATED @ 2024-05-17T16:46:47.978Z
export interface HeadingProps {
  content: string;
}

export function heading(props: HeadingProps) {
  return `<h1 class="p-2 font-bold text-xl">${props.content}</h1>`;
}