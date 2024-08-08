import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="categories">
      {categories.map((category) => (
        <button key={category} onClick={() => navigate(`/search/${category}`)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
