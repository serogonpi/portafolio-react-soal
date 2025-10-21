// src/components/services/ServiceDetail.jsx
// Vista detallada de un servicio individual

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getServiceById, getServicesByCategory } from '../../utils/dataManager';
import { useCart } from '../../context/CartContext';
import ServiceCard from './ServiceCard';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart, getItemQuantity, formatPrice } = useCart();
  
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar el servicio por slug
    const allServices = require('../../data/services').default;
    const foundService = allServices.find(s => s.slug === slug);
    
    if (foundService) {
      setService(foundService);
      
      // Cargar servicios relacionados (misma categoría)
      const related = getServicesByCategory(foundService.category)
        .filter(s => s.id !== foundService.id)
        .slice(0, 3);
      setRelatedServices(related);
    }
    
    setLoading(false);
    
    // Scroll al inicio
    window.scrollTo(0, 0);
  }, [slug]);

  const handleAddToCart = () => {
    addToCart(service.id, quantity);
  };

  const handleBuyNow = () => {
    addToCart(service.id, quantity);
    navigate('/carrito');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando servicio...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="not-found-container">
        <h2>Servicio no encontrado</h2>
        <p>El servicio que buscas no existe o ha sido eliminado.</p>
        <Link to="/servicios" className="btn btn-primary">
          Ver todos los servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="separator">/</span>
        <Link to="/servicios">Servicios</Link>
        <span className="separator">/</span>
        <span className="current">{service.name}</span>
      </nav>

      {/* Contenido principal */}
      <div className="service-detail-content">
        {/* Columna izquierda - Imagen */}
        <div className="service-detail-image">
          <img 
            src={require(`../../assets/images/${service.image}`)} 
            alt={service.name}
          />
          {service.featured && (
            <span className="badge-featured">⭐ Destacado</span>
          )}
        </div>

        {/* Columna derecha - Información */}
        <div className="service-detail-info">
          <div className="service-category">
            {service.category.replace('-', ' ')}
          </div>
          
          <h1 className="service-title">{service.name}</h1>
          
          <p className="service-description">{service.description}</p>

          {/* Precio y duración */}
          <div className="service-meta">
            <div className="price-box">
              <span className="price-label">Precio</span>
              <span className="price-amount">{formatPrice(service.price)}</span>
            </div>
            <div className="duration-box">
              <span className="duration-label">Duración</span>
              <span className="duration-amount">⏱️ {service.duration}</span>
            </div>
          </div>

          {/* Estado */}
          <div className="service-status">
            {service.inStock ? (
              <span className="status-available">✓ Disponible</span>
            ) : (
              <span className="status-unavailable">✗ No disponible</span>
            )}
          </div>

          {/* Acciones */}
          <div className="service-actions">
            <div className="quantity-selector">
              <label htmlFor="quantity">Cantidad:</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!service.inStock}
                >
                  -
                </button>
                <input 
                  type="number" 
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  disabled={!service.inStock}
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!service.inStock}
                >
                  +
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button 
                className={`btn-add-to-cart ${isInCart(service.id) ? 'in-cart' : ''}`}
                onClick={handleAddToCart}
                disabled={!service.inStock}
              >
                {isInCart(service.id) 
                  ? `✓ En carrito (${getItemQuantity(service.id)})` 
                  : '🛒 Agregar al carrito'}
              </button>
              
              <button 
                className="btn-buy-now"
                onClick={handleBuyNow}
                disabled={!service.inStock}
              >
                Comprar ahora
              </button>
            </div>
          </div>

          {/* Características */}
          <div className="service-features">
            <h3>¿Qué incluye este servicio?</h3>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnologías */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="service-technologies">
              <h3>Tecnologías utilizadas</h3>
              <div className="tech-tags">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Entregables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div className="service-deliverables">
              <h3>Entregables</h3>
              <ul>
                {service.deliverables.map((deliverable, index) => (
                  <li key={index}>
                    <span className="deliverable-icon">📦</span>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Servicios relacionados */}
      {relatedServices.length > 0 && (
        <div className="related-services">
          <h2>Servicios relacionados</h2>
          <div className="related-services-grid">
            {relatedServices.map(relatedService => (
              <ServiceCard key={relatedService.id} service={relatedService} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;