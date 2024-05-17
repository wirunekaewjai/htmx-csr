use actix_web::{get, web, HttpRequest, HttpResponse};
use mime::TEXT_HTML;

use crate::{components, functions::create_etag_response, views};

#[get("/posts/{id}")]
pub async fn handle(req: HttpRequest, path: web::Path<u32>) -> HttpResponse {
    let id = path.into_inner();
    let path: String = format!("/@post?id={id}");
    let items = vec![
        components::menu(components::MenuProps {
            path: "/post".into(),
        }),
        views::suspense(views::SuspenseProps { path }),
    ];

    let title = format!("Post: {id}");
    let html = views::doc(views::DocProps {
        content: items.join(""),
        title,
    });

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
