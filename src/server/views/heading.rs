// AUTO GENERATED @ 2024-05-17T16:46:47.982Z
pub struct HeadingProps {
    pub content: String,
}

pub fn heading(props: HeadingProps) -> String {
    let content = props.content;

    return format!(r#"<h1 class="p-2 font-bold text-xl">{content}</h1>"#);
}