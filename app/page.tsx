import React from "react";

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("unable to recieve response");
  const albums = await response.json();

  return (
    <div className="flex flex-col w-[80%] mx-auto mt-20">
      <h1 className="font-bold text-2xl mb-2 underline-offset-2">Movies</h1>
      {albums &&
        albums.map((album: { id: string; title: string }) => (
          <div key={album.id}>
            <ul className="capitalize flex  mt-2 ">
              <li className="capitalize">
                {album.id}. {album.title}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}
