// AUTO GENERATED
use tiny_tsx::esc_quot;

pub fn counter(count: i32) -> String {
    return format!(
        r#"<div class="p-2 flex flex-row items-center" hx-target="this" hx-swap="outerHTML"><button class="w-8 h-8 bg-red-600 text-white rounded-md shadow-md" hx-get="/@counter" hx-vals="{}" hx-trigger="click" hx-replace-url="/counter?count={}">-</button><div class="flex items-center px-4 h-8 mx-2 border rounded-md">{}</div><button class="w-8 h-8 bg-blue-600 text-white rounded-md shadow-md" hx-get="/@counter?count={}" hx-trigger="click" hx-replace-url="/counter?count={}">+</button></div>"#,
        esc_quot(&format!(r#"{{"count":{}}}"#, count - 1)),
        count - 1,
        count,
        count + 1,
        count + 1
    );
}

/*
(count: i32) => (
  <div
    class="p-2 flex flex-row items-center"
    hx-target="this"
    hx-swap="outerHTML"
  >
    <button
      class="w-8 h-8 bg-red-600 text-white rounded-md shadow-md"
      // hx-get={`/@counter?count=${count - 1}`}
      hx-get="/@counter"
      hx-vals={{ "count": count - 1 }}
      hx-trigger="click"
      hx-replace-url={`/counter?count=${count - 1}`}
    >
      {"-"}
    </button>
    <div class="flex items-center px-4 h-8 mx-2 border rounded-md">
      {count}
    </div>
    <button
      class="w-8 h-8 bg-blue-600 text-white rounded-md shadow-md"
      hx-get={`/@counter?count=${count + 1}`}
      hx-trigger="click"
      hx-replace-url={`/counter?count=${count + 1}`}
    >
      {"+"}
    </button>
  </div>
);
*/
