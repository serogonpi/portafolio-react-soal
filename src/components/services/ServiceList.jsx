// src/components/services/ServiceList.jsx
// Lista de servicios con filtros y búsqueda

import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import CategoryFilter from './CategoryFilter';
import { getServices, searchServices, filterServices } from '../../utils/dataManager';
import './ServiceList.css';

const ServiceList = ({ initialCategory = null, showFilters = true }) => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Cargar servicios al montar
  useEffect(() => {
    const allServices = getServices();
    setServices(allServices);
    setFilteredServices(allServices);
  }, []);

  // Aplicar filtros cuando cambien
  useEffect(() => {
    let result = [...services];

    // Filtrar por categoría
    if (selectedCategory) {
      result = result.filter(s => s.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(s =>
        s.name.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        s.shortDescription.toLowerCase().includes(term)
      );
    }

    // Ordenar
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Mantener orden por defecto (destacados primero)
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    setFilteredServices(result);
  }, [services, selectedCategory, searchTerm, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchTerm('');
    setSortBy('default');
  };

  return (
    <div className="service-list-container">
      {showFilters && (
        <div className="service-list-filters">
          {/* Búsqueda */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {/* Filtro por categoría */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Ordenar */}
          <div className="sort-box">
            <label htmlFor="sort">Ordenar por:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="sort-select"
            >
              <option value="default">Destacados</option>
              <option value="name">Nombre A-Z</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
          </div>

          {/* Botón limpiar filtros */}
          {(selectedCategory || searchTerm || sortBy !== 'default') && (
            <button onClick={clearFilters} className="btn-clear-filters">
              Limpiar filtros
            </button>
          )}
        </div>
      )}

      {/* Resultados */}
      <div className="service-list-results">
        <div className="results-header">
          <h2>
            {selectedCategory
              ? `Servicios de ${selectedCategory.replace('-', ' ')}`
              : 'Todos los Servicios'}
          </h2>
          <span className="results-count">
            {filteredServices.length} servicio{filteredServices.length !== 1 ? 's' : ''}
          </span>
        </div>

        {filteredServices.length > 0 ? (
          <div className="services-grid">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No se encontraron servicios con los filtros aplicados.</p>
            <button onClick={clearFilters} className="btn-clear-filters">
              Ver todos los servicios
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceList;