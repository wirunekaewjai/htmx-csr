// AUTO GENERATED
pub fn post_list(content: &str) -> String {
    return format!(
        r#"<div class="space-y-2 divide-y" hx-boost="true">{}</div>"#,
        content
    );
}

/*
(
  <div
    class="space-y-2 divide-y"
    hx-boost="true"
  >
    {content}
  </div>
);
*/
