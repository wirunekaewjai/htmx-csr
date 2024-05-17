// AUTO GENERATED @ 2024-05-17T16:46:47.982Z
pub struct CounterProps {
    pub count: i32,
    pub decrement: i32,
    pub increment: i32,
}

pub fn counter(props: CounterProps) -> String {
    let count = props.count;
    let decrement = props.decrement;
    let increment = props.increment;

    return format!(r#"<div class="p-2 flex flex-row items-center" hx-target="this" hx-swap="outerHTML" ><button class="w-8 h-8 bg-red-600 text-white rounded-md shadow-md" hx-get="/@counter?count={decrement}" hx-trigger="click" hx-replace-url="/counter?count={decrement}" >-</button><div class="flex items-center px-4 h-8 mx-2 border rounded-md">{count}</div><button class="w-8 h-8 bg-blue-600 text-white rounded-md shadow-md" hx-get="/@counter?count={increment}" hx-trigger="click" hx-replace-url="/counter?count={increment}" >+</button></div>"#);
}