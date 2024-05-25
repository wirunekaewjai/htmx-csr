// AUTO GENERATED
pub struct PostContentPost {
    pub title: String,
    pub body: String,
}

pub fn post_content(post: PostContentPost) -> String {
    return format!(
        r#"<div class="p-2 space-y-2"><h1 class="text-xl">{}</h1><p>{}</p></div>"#,
        post.title, post.body
    );
}

/*
interface Post {
  title: string;
  body: string;
}

(post: Post) => (
  <div class="p-2 space-y-2">
    <h1 class="text-xl">{post.title}</h1>
    <p>
      {post.body}
    </p>
  </div>
);
*/
