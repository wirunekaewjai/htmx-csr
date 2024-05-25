// AUTO GENERATED
use tiny_tsx::tsx_map;

pub struct AlbumListAlbum {
    pub title: String,
}

pub fn album_list(albums: Vec<AlbumListAlbum>) -> String {
    return format!(
        r#"<div class="space-y-2 divide-y">{}</div>"#,
        tsx_map(&albums, &|album| format!(
            r#"<div class="p-2">{}</div>"#,
            album.title
        ))
    );
}

/*
interface Album {
  title: string;
}

(albums: Album[]) => (
  <div class="space-y-2 divide-y">
    {map(albums, (album) => (
      <div class="p-2">
        {album.title}
      </div>
    ))}
  </div>
);
*/
