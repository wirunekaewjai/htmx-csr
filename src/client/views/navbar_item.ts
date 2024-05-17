// AUTO GENERATED @ 2024-05-17T16:46:47.978Z
export interface NavbarItemProps {
  active: boolean;
  content: string;
  href: string;
}

export function navbar_item(props: NavbarItemProps) {
  return `<a class="p-2 hover:bg-white/10 rounded-full data-[active=true]:bg-white/20 data-[active=true]:pointer-events-none" href="${props.href}" data-active="${props.active}" >${props.content}</a>`;
}