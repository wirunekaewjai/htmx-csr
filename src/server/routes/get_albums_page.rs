use actix_web::{get, HttpRequest, HttpResponse};
use mime::TEXT_HTML;

use crate::{components, functions::create_etag_response, views};

#[get("/albums")]
pub async fn handle(req: HttpRequest) -> HttpResponse {
    let items = vec![
        components::menu("/albums"),
        views::heading("List Albums (server-side rendering)"),
        views::suspense("/@albums"),
    ];

    let html = views::doc("Albums (server)", &items.join(""));

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
