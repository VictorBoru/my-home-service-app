import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query.trim().toLowerCase()}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyDown={handleKeyDown} 
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default SearchBar;