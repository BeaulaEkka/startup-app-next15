import React from "react";

async function Page() {
  const response = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  }); // Use http://, not https:// for localhost.
  const books = await response.json();

  return (
    <div>
      <h1>This is books</h1>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </div>
  );
}

export default Page;
