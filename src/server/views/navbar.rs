// AUTO GENERATED @ 2024-05-17T16:46:47.982Z
pub struct NavbarProps {
    pub content: String,
}

pub fn navbar(props: NavbarProps) -> String {
    let content = props.content;

    return format!(r#"<nav class="flex flex-row items-center bg-black text-white p-2 space-x-4" hx-boost="true" ><img src="/favicon.ico" width="32" />{content}</nav>"#);
}