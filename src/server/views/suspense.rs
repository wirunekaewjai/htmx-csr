// AUTO GENERATED @ 2024-05-17T16:46:47.982Z
pub struct SuspenseProps {
    pub path: String,
}

pub fn suspense(props: SuspenseProps) -> String {
    let path = props.path;

    return format!(r#"<div class="p-2" hx-get="{path}" hx-trigger="load" hx-swap="outerHTML" >Loading . . .</div>"#);
}