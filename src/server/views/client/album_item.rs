// AUTO GENERATED
pub struct AlbumItemAlbum {
    title: String,
}

pub fn album_item(album: AlbumItemAlbum) -> String {
    let v_0 = album.title;

    return format!(r#"<div class="p-2">{}</div>"#, v_0);
}

/*
(
  <div class="p-2">
    {album.title}
  </div>
);
*/
