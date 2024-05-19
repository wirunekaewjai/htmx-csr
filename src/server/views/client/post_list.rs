// AUTO GENERATED
use html_to_string_macro::html;

pub fn post_list(content: &str) -> String {
    return html!(
      <div
        class="space-y-2 divide-y"
        hx-boost="true"
      >
        {content}
      </div>
    );
}
