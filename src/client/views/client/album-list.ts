// AUTO GENERATED
import { tsx_map } from "@wirunekaewjai/tiny-tsx/macro";

export interface AlbumListAlbum {
  title: string;
}

export const $album_list = (albums: AlbumListAlbum[]) => `<div class="space-y-2 divide-y">${tsx_map(albums, (album) => `<div class="p-2">${album.title}</div>`)}</div>`;

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
