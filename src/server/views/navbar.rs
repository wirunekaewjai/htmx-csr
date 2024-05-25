// AUTO GENERATED
use tiny_tsx::tsx_join;

pub fn navbar(menu: Vec<String>) -> String {
    return format!(
        r#"<nav class="flex flex-row items-center bg-black text-white p-2 space-x-4" hx-boost="true"><img src="/favicon.ico" width="32">{}</nav>"#,
        tsx_join(&menu)
    );
}

/*
(menu: string[]) => (
  <nav
    class="flex flex-row items-center bg-black text-white p-2 space-x-4"
    hx-boost="true"
  >
    <img
      src="/favicon.ico"
      width="32"
    />
    {join(menu)}
  </nav>
);
*/
