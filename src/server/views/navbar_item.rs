// AUTO GENERATED @ 2024-05-17T16:46:47.982Z
pub struct NavbarItemProps {
    pub active: bool,
    pub content: String,
    pub href: String,
}

pub fn navbar_item(props: NavbarItemProps) -> String {
    let active = props.active;
    let content = props.content;
    let href = props.href;

    return format!(r#"<a class="p-2 hover:bg-white/10 rounded-full data-[active=true]:bg-white/20 data-[active=true]:pointer-events-none" href="{href}" data-active="{active}" >{content}</a>"#);
}