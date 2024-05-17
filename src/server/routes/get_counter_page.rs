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
        components::menu(components::MenuProps {
            path: "/counter".into(),
        }),
        views::heading(views::HeadingProps {
            content: "Counter".into(),
        }),
        views::counter(views::CounterProps {
            count,
            decrement: count - 1,
            increment: count + 1,
        }),
    ];

    let html = views::doc(views::DocProps {
        content: items.join(""),
        title: "Counter".into(),
    });

    return create_etag_response(&req, TEXT_HTML, html.into_bytes());
}
