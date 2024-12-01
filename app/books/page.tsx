import React from "react";

type Book = {
  id: string;
  name: string;
};
async function Page() {
  const response = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  const books = await response.json();

  return (
    <div className="flex flex-col w-[80%] mx-auto mt-20">
      <h1 className="font-bold text-2xl mb-5">Books</h1>
      {books && books.map((book: Book) => <div key={book.id}>{book.name}</div>)}
      {/* <pre>{JSON.stringify(books, null, 2)}</pre> */}
    </div>
  );
}

export default Page;
