use crate::views;

pub struct MenuProps {
    pub path: String,
}

pub fn menu(props: MenuProps) -> String {
    let items: Vec<String> = vec![
        views::navbar_item(views::NavbarItemProps {
            active: props.path == "/",
            content: "Posts".into(),
            href: "/".into(),
        }),
        views::navbar_item(views::NavbarItemProps {
            active: props.path == "/albums",
            content: "Albums".into(),
            href: "/albums".into(),
        }),
        views::navbar_item(views::NavbarItemProps {
            active: props.path == "/counter",
            content: "Counter".into(),
            href: "/counter".into(),
        }),
    ];

    views::navbar(views::NavbarProps {
        content: items.join(""),
    })
}
