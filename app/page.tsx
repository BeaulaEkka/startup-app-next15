import React from "react";
import SearchForm from "./components/SearchForm";
import StartupCard, { StartupCardType } from "./components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERYResult } from "@/sanity.types";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts: StartupCardType[] = await client
    .fetch(STARTUPS_QUERY)
    .then((data) =>
      data.map((post: STARTUPS_QUERYResult[number]) => ({
        ...post,
        // Transform or assign additional fields if necessary
      }))
    );
  // console.log(JSON.stringify(posts, null, 2));

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
      <section>
        <p className="capitalize font-bold text-xl mt-12 mx-auto w-[80%]">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 grid-rows-5 gap-4 w-[80%] mx-auto">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No Startups found</p>
          )}
        </div>
      </section>
    </div>
  );
}
