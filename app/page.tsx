import React from "react";

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("unable to recieve response");
  const albums = await response.json();

  return (
    <div>
      {albums &&
        albums.map((album: { id: string; title: string }) => (
          <div key={album.id}>
            <ol>
              <li>{album.title}</li>
            </ol>
          </div>
        ))}
    </div>
  );
}
