use actix_web::{get, HttpRequest, HttpResponse};
use mime::TEXT_HTML;

use crate::{components, functions::create_etag_response, views};

#[get("/")]
pub async fn handle(req: HttpRequest) -> HttpResponse {
    let items = vec![
        components::menu(components::MenuProps { path: "/".into() }),
        views::heading(views::HeadingProps {
            content: "List Posts".into(),
        }),
        views::suspense(views::SuspenseProps {
            path: "/@posts".into(),
        }),
    ];

    let html = views::doc(views::DocProps {
        content: items.join(""),
        title: "Posts".into(),
    });

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
