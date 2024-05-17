use actix_web::{get, HttpRequest, HttpResponse};
use mime::TEXT_HTML;

use crate::{components, functions::create_etag_response, views};

#[get("/albums")]
pub async fn handle(req: HttpRequest) -> HttpResponse {
    let items = vec![
        components::menu(components::MenuProps {
            path: "/albums".into(),
        }),
        views::heading(views::HeadingProps {
            content: "List Albums (server-side rendering)".into(),
        }),
        views::suspense(views::SuspenseProps {
            path: "/@albums".into(),
        }),
    ];

    let html = views::doc(views::DocProps {
        content: items.join(""),
        title: "Albums (server)".into(),
    });

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
