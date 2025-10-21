// src/components/services/ServiceCard.jsx
// Tarjeta individual de servicio

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { addToCart, isInCart, formatPrice } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevenir navegación del Link
    addToCart(service.id);
  };

  return (
    <div className="service-card">
      <Link to={`/servicios/${service.slug}`} className="service-card-link">
        <div className="service-card-image">
          <img 
            src={require(`../../assets/images/${service.image}`)} 
            alt={service.name}
          />
          {service.featured && (
            <span className="badge-featured">Destacado</span>
          )}
          {!service.inStock && (
            <span className="badge-out-of-stock">No disponible</span>
          )}
        </div>
        
        <div className="service-card-body">
          <div className="service-card-category">
            {service.category.replace('-', ' ')}
          </div>
          
          <h3 className="service-card-title">{service.name}</h3>
          
          <p className="service-card-description">
            {service.shortDescription}
          </p>
          
          <div className="service-card-meta">
            <span className="service-duration">
              ⏱️ {service.duration}
            </span>
          </div>
          
          <div className="service-card-footer">
            <div className="service-price">
              <span className="price-label">Desde</span>
              <span className="price-amount">{formatPrice(service.price)}</span>
            </div>
            
            <button 
              className={`btn-add-to-cart ${isInCart(service.id) ? 'in-cart' : ''}`}
              onClick={handleAddToCart}
              disabled={!service.inStock}
            >
              {isInCart(service.id) ? '✓ En carrito' : '+ Agregar'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;