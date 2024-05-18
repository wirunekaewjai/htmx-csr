use actix_web::{get, web, HttpRequest, HttpResponse};
use mime::TEXT_HTML;

use crate::{components, functions::create_etag_response, views};

#[get("/posts/{id}")]
pub async fn handle(req: HttpRequest, path: web::Path<u32>) -> HttpResponse {
    let id = path.into_inner();
    let path: String = format!("/@post?id={id}");
    let items = vec![components::menu("/post"), views::suspense(&path)];

    let title = format!("Post: {id}");
    let html = views::doc(&title, &items.join(""));

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
