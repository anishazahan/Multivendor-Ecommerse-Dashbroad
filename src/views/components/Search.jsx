import React from "react";

const Search = ({ setParPage, setSearchValue, searchValue }) => {
  return (
    <div className="flex justify-between items-center">
      <select
        onChange={(e) => setParPage(parseInt(e.target.value))}
        className="px-4 py-2 focus:border-gray3500 outline-none bg-gray-100 border border-slate-200 rounded text-gray-500"
      >
        <option value="5">5</option>
        <option value="15">15</option>
        <option value="25">25</option>
      </select>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="px-4 py-2 focus:border-gray-300 outline-none bg-gray-100 border border-slate-200 rounded text-gray-500"
        type="text"
        placeholder="search"
      />
    </div>
  );
};

export default Search;
