use actix_web::{get, web, HttpRequest, HttpResponse};
use mime::TEXT_HTML;
use serde::Deserialize;

use crate::{components, functions::create_etag_response, views};

#[derive(Deserialize)]
struct CounterQuery {
    count: Option<i32>,
}

#[get("/counter")]
pub async fn handle(req: HttpRequest, query: web::Query<CounterQuery>) -> HttpResponse {
    let count = query.count.unwrap_or(0);
    let items = vec![
        components::navbar("/counter"),
        views::heading("Counter"),
        views::counter(count - 1, count, count + 1),
    ];

    let html = views::doc("Counter", &items.join(""));

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
