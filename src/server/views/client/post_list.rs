// AUTO GENERATED
use tiny_tsx::tsx_map;

pub struct PostListPost {
    pub id: i32,
    pub title: String,
}

pub fn post_list(posts: Vec<PostListPost>) -> String {
    return format!(
        r#"<div class="space-y-2 divide-y" hx-boost="true">{}</div>"#,
        tsx_map(&posts, &|post| format!(
            r#"<a class="block p-2 hover:text-blue-400" href="/posts/{}">{}</a>"#,
            post.id, post.title
        ))
    );
}

/*
interface Post {
  id: i32;
  title: string;
}

(posts: Post[]) => (
  <div
    class="space-y-2 divide-y"
    hx-boost="true"
  >
    {map(posts, (post) => (
      <a
        class="block p-2 hover:text-blue-400"
        href={`/posts/${post.id}`}
      >
        {post.title}
      </a>
    ))}
  </div>
);
*/
