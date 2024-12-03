import React from "react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
  const query = "Test";

  return (
    <div className="text-center rounded-full">
      <form action="/" scroll={false} className="">
        {" "}
        <input
          type="text"
          placeholder="Search Startups"
          defaultValue=""
          name="query"
          className="text-black rounded-full px-2 py-2 border-2 border-black w-[50%] "
        />
        <div className="flex gap-2">{query && <SearchFormReset />}</div>
      </form>
    </div>
  );
};

export default SearchForm;
