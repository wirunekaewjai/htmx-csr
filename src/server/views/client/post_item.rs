// AUTO GENERATED
pub struct PostItemPost {
    pub id: i32,
    pub title: String,
}

pub fn post_item(post: PostItemPost) -> String {
    return format!(
        r#"<a class="block p-2 hover:text-blue-400" href="/posts/{}">{}</a>"#,
        post.id, post.title
    );
}

/*
interface Post {
  id: i32;
  title: string;
}

(post: Post) => (
  <a
    class="block p-2 hover:text-blue-400"
    href={`/posts/${post.id}`}
  >
    {post.title}
  </a>
);
*/
