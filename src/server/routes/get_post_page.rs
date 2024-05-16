use actix_web::{get, web, HttpRequest, HttpResponse};
use html_to_string_macro::html;
use mime::TEXT_HTML;

use crate::{
    functions::create_etag_response,
    views::{doc, navbar},
};

#[get("/posts/{id}")]
pub async fn handle(req: HttpRequest, path: web::Path<u32>) -> HttpResponse {
    let id = path.into_inner();
    let content = html!(
        {navbar("/post")}

        <div
            class="p-2"
            hx-get={format!("/@post?id={}", id)}
            hx-trigger="load"
            hx-swap="outerHTML"
        >
            {"Loading . . ."}
        </div>
    );

    let title = format!("Post: {}", id);
    let html = doc(&title, &content);

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
