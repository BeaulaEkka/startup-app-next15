import React from "react";
import SearchForm from "./components/SearchForm";
import StartupCard from "./components/StartupCard";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      description: "This is description",
      image:
        "https://images.pexels.com/photos/7944040/pexels-photo-7944040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Robots",
      title: "We Robots",
    },
    {
      _id: 2,
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      description: "This is description",
      image:
        "https://images.pexels.com/photos/7944040/pexels-photo-7944040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Robots",
      title: "We Robots",
    },
    {
      _id: 3,
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      description: "This is description",
      image:
        "https://images.pexels.com/photos/7944040/pexels-photo-7944040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Robots",
      title: "We Robots",
    },
  ];
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
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-[80%] mx-auto">
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
