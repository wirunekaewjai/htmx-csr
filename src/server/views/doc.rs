// AUTO GENERATED @ 2024-05-17T15:32:35.865Z
pub fn doc(title: &str, content: &str) -> String {
    return format!(r#"<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="icon" sizes="any" type="image/x-icon" href="/favicon.ico" /><link rel="stylesheet" href="/assets/style.css" /><title>{title}</title><script defer src="https://unpkg.com/htmx.org@1.9.12/dist/htmx.min.js"></script><script defer type="module" src="/assets/app.js"></script></head><body>{content}</body></html>"#);
}