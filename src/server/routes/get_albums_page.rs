use actix_web::{get, HttpRequest, HttpResponse};
use html_to_string_macro::html;
use mime::TEXT_HTML;

use crate::{
    functions::create_etag_response,
    views::{doc, navbar},
};

#[get("/albums")]
pub async fn handle(req: HttpRequest) -> HttpResponse {
    let content = html!(
        {navbar("/albums")}

        <h1 class="p-2 font-bold text-xl">
            {"List Albums (sever-side rendering)"}
        </h1>

        <div
            class="p-2"
            hx-get="/@albums"
            hx-trigger="load"
            hx-swap="outerHTML"
        >
            {"Loading . . ."}
        </div>
    );

    let html = doc("Albums (server)", &content);

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
