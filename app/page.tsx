import React from "react";
import SearchForm from "./components/SearchForm";

export default async function page() {
  return (
    <section className="pink_container">
      <h1 className="heading">
        pitch your startups, connect with entrepreneurs
      </h1>
      <p className="text-center text-xl capitalize mt-8 mb-8">
        Submit Ideas,Vote on pitches and get Noticed in Virtual Competitons
      </p>
      <SearchForm />
    </section>
  );
}
