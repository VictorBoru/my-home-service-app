import React from 'react';
import '../styles/SearchBar.scss';

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search" />
    <button>🔍</button>
  </div>
);

export default SearchBar;