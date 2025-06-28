import { useState } from "react";

const SearchBar = ({ onSearch = () => {} }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar-container ml-5 mt-4 flex flex-wrap">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="searchbox block w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Search for restaurants....."
      />
      <button
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded ml-3 cursor-pointer"
        onClick={() => onSearch(searchText)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
