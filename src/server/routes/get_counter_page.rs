use actix_web::{get, web, HttpRequest, HttpResponse};
use html_to_string_macro::html;
use mime::TEXT_HTML;
use serde::Deserialize;

use crate::{
    functions::create_etag_response,
    views::{counter, doc, navbar},
};

#[derive(Deserialize)]
struct CounterQuery {
    count: Option<i32>,
}

#[get("/counter")]
pub async fn handle(req: HttpRequest, query: web::Query<CounterQuery>) -> HttpResponse {
    let count = query.count.unwrap_or(0);
    let content = html!(
        {navbar("/counter")}

        <h1 class="p-2 font-bold text-xl">
            {"Counter"}
        </h1>

        {counter(count)}
    );

    let html = doc("Albums (server)", &content);

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
