// import React from 'react'

// function page() {
//   return (
//     <div>
//       this is books
//     </div>
//   )
// }

// export default page

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ut`); // Replace with your API URL.
  const books = await res.json();

  return {
    props: {
      books,
    },
  };
};

export default function BooksPage({ books }: { books: any[] }) {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li> // Customize based on your book object structure.
        ))}
      </ul>
    </div>
  );
}
