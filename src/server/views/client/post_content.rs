// AUTO GENERATED
pub struct PostContentPost {
    title: String,
    body: String,
}

pub fn post_content(post: PostContentPost) -> String {
    let v_0 = post.title;
    let v_1 = post.body;

    return format!(r#"<div class="p-2 space-y-2"><h1 class="text-xl">{}</h1><p>{}</p></div>"#, v_0, v_1);
}

/*
(
  <div class="p-2 space-y-2">
    <h1 class="text-xl">{post.title}</h1>
    <p>
      {post.body}
    </p>
  </div>
);
*/
