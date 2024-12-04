import React from "react";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  
  return (
    <div className="text-center rounded-full">
      <form
        action="/"
        // scroll={false}
        className="relative md:w-[50%] lg:w-[40%] w-[90%]  mx-auto"
      >
        {" "}
        <input
          type="text"
          placeholder="Search Startups"
          defaultValue=" "
          name="query"
          className="text-black rounded-full px-2 py-2 border-2 border-black w-full "
        />
        <div className="flex gap-2 ">
          {query && <SearchFormReset />}
          <button type="submit" className="search-btn">
            <Search className="size-5"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
