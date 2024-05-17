// AUTO GENERATED @ 2024-05-17T15:32:35.865Z
pub fn navbar(content: &str) -> String {
    return format!(r#"<nav class="flex flex-row items-center bg-black text-white p-2 space-x-4" hx-boost="true" ><img src="/favicon.ico" width="32" />{content}</nav>"#);
}