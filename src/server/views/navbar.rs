use html_to_string_macro::html;

pub fn navbar(pathname: &str) -> String {
    let base_class =
        "p-2 hover:bg-white/10 rounded-full [&.active]:bg-white/20 [&.active]:pointer-events-none";

    let active_class = &format!("active {}", base_class);

    let posts_class = match pathname == "/" {
        true => active_class,
        false => base_class,
    };

    let albums_class = match pathname == "/albums" {
        true => active_class,
        false => base_class,
    };

    let counter_class = match pathname == "/counter" {
        true => active_class,
        false => base_class,
    };

    html!(
        <nav
            class="flex flex-row items-center bg-black text-white p-2 space-x-4"
            hx-boost="true"
        >
            <img
                src="/favicon.ico"
                width="32"
            />
            <a
                class={posts_class}
                href="/"
            >
                {"Posts"}
            </a>
            <a
                class={albums_class}
                href="/albums"
            >
                {"Albums"}
            </a>
            <a
                class={counter_class}
                href="/counter"
            >
                {"Counter"}
            </a>
        </nav>
    )
}
