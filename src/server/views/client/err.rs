// AUTO GENERATED
use html_to_string_macro::html;

pub fn err(content: &str) -> String {
    return html!(
      <div>{content}</div>
    );
}
