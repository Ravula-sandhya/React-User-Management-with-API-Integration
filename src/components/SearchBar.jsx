import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, setSortOrder }) => {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="company">Company</option>
      </select>
    </div>
  );
};

export default SearchBar;