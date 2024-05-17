use crate::views;

pub fn navbar(pathname: &str) -> String {
    let items: Vec<String> = vec![
        views::navbar_item("/", pathname == "/", "Posts"),
        views::navbar_item("/albums", pathname == "/albums", "Albums"),
        views::navbar_item("/counter", pathname == "/counter", "Counter"),
    ];

    views::navbar(&items.join(""))
}
