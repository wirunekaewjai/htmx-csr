// AUTO GENERATED
pub struct PostItemPost {
    id: i32,
    title: String,
}

pub fn post_item(post: PostItemPost) -> String {
    let v_0 = post.id;
    let v_1 = post.title;

    return format!(r#"<a class="block p-2 hover:text-blue-400" href="/posts/{}">{}</a>"#, v_0, v_1);
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
