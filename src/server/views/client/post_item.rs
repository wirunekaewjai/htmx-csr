// AUTO GENERATED
pub struct PostItemPost {
    id: i32,
    title: String,
}

pub fn post_item(post: PostItemPost) -> String {
    return format!(
        r#"<a class="block p-2 hover:text-blue-400" href="/posts/{}">{}</a>"#,
        post.id, post.title
    );
}

/*
(
  <a
    class="block p-2 hover:text-blue-400"
    href={`/posts/${post.id}`}
  >
    {post.title}
  </a>
);
*/
