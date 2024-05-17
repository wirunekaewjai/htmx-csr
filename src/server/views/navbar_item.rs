// AUTO GENERATED @ 2024-05-17T15:32:35.865Z
pub fn navbar_item(href: &str, active: bool, content: &str) -> String {
    return format!(r#"<a class="p-2 hover:bg-white/10 rounded-full data-[active=true]:bg-white/20 data-[active=true]:pointer-events-none" href="{href}" data-active="{active}" >{content}</a>"#);
}