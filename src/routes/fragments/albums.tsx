interface Album {
  id: number;
  title: string;
}

export async function albums() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  const res = await fetch(url);

  if (!res.ok) {
    return (
      <div>Failed to fetch albums</div>
    );
  }

  const albums: Album[] = await res.json();
  const children = albums.map((album) => {
    return (
      <div
        class="p-1"
      >
        {album.title}
      </div>
    );
  });

  return (
    <div class="p-1">
      {children}
    </div>
  );
}