// AUTO GENERATED
use html_to_string_macro::html;

pub struct PostItemPost {
    id: i32,
    title: String,
}

pub fn post_item(post: PostItemPost) -> String {
    return html!(
      <a
        class="block p-2 hover:text-blue-400"
        href={format!("/posts/{}", post.id)}
      >
        {post.title}
      </a>
    );
}
