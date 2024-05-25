// AUTO GENERATED
pub struct AlbumItemAlbum {
    pub title: String,
}

pub fn album_item(album: AlbumItemAlbum) -> String {
    return format!(r#"<div class="p-2">{}</div>"#, album.title);
}

/*
interface Album {
  title: string;
}

(album: Album) => (
  <div class="p-2">
    {album.title}
  </div>
);
*/
