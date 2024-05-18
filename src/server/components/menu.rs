use crate::views;

pub fn menu(path: &str) -> String {
    let items: Vec<String> = vec![
        views::navbar_item("/", path == "/", "Posts"),
        views::navbar_item("/albums", path == "/albums", "Albums"),
        views::navbar_item("/counter", path == "/counter", "Counter"),
    ];

    views::navbar(&items.join(""))
}
