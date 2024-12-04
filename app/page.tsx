import React from "react";
import SearchForm from "./components/SearchForm";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startups, connect with entrepreneurs
        </h1>
        <p className="text-center text-xl capitalize mt-8 mb-8">
          Submit Ideas,Vote on pitches and get Noticed in Virtual Competitons
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="capitalize font-bold text-xl ">{query? `search results for "${query}"` : "All startups"}</p>
      </section>
    </div>
  );
}
