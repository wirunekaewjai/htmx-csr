use actix_web::{get, HttpRequest, HttpResponse};
use mime::TEXT_HTML;

use crate::{components, functions::create_etag_response, views};

#[get("/")]
pub async fn handle(req: HttpRequest) -> HttpResponse {
    let items = vec![
        components::navbar("/"),
        views::heading("List Posts"),
        views::suspense("/@posts"),
    ];

    let html = views::doc("Posts", &items.join(""));

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
