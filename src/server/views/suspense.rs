// AUTO GENERATED @ 2024-05-17T15:32:35.865Z
pub fn suspense(path: &str) -> String {
    return format!(r#"<div class="p-2" hx-get="{path}" hx-trigger="load" hx-swap="outerHTML" >Loading . . .</div>"#);
}