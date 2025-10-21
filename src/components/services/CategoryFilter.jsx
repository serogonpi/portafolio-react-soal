// src/components/services/CategoryFilter.jsx
// Filtro de categorías para servicios

import React from 'react';
import { getCategories } from '../../utils/dataManager';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = getCategories();

  return (
    <div className="category-filter">
      <button
        className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
        onClick={() => onCategoryChange(null)}
      >
        <span className="category-icon">📦</span>
        Todos
      </button>

      {categories.map(category => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.slug ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.slug)}
          style={{ '--category-color': category.color }}
        >
          <span className="category-icon">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;