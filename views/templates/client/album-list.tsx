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