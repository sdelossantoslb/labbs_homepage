import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <form className="search-form search-top">
      <label>
        <span className="screen-reader-text">Search for:</span>
        <input type="search" className="search-field" placeholder="Search..." />
      </label>
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
