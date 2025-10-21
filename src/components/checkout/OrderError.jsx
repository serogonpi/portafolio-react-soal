// src/components/checkout/OrderError.jsx
// Página de error en el proceso de pago

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OrderError.css';

const OrderError = () => {
  const navigate = useNavigate();

  return (
    <div className="order-error-container">
      <div className="error-animation">
        <div className="error-icon">✗</div>
      </div>

      <h1 className="error-title">No se pudo procesar el pago</h1>
      <p className="error-subtitle">
        Lo sentimos, ha ocurrido un error al procesar tu pedido. No te preocupes, no se realizó ningún cargo.
      </p>

      <div className="error-details-card">
        <h3>¿Qué pudo haber pasado?</h3>
        <ul className="error-reasons">
          <li>
            <span className="reason-icon">💳</span>
            <div>
              <strong>Problemas con el método de pago</strong>
              <p>Puede que tu tarjeta no tenga fondos suficientes o esté bloqueada</p>
            </div>
          </li>
          <li>
            <span className="reason-icon">🌐</span>
            <div>
              <strong>Conexión interrumpida</strong>
              <p>La conexión a internet pudo haberse interrumpido durante el proceso</p>
            </div>
          </li>
          <li>
            <span className="reason-icon">⏱️</span>
            <div>
              <strong>Sesión expirada</strong>
              <p>El tiempo de la sesión de pago pudo haber expirado</p>
            </div>
          </li>
          <li>
            <span className="reason-icon">🔧</span>
            <div>
              <strong>Error técnico</strong>
              <p>Puede haber ocurrido un error temporal en nuestro sistema</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="next-actions">
        <h3>¿Qué puedes hacer?</h3>
        <div className="actions-grid">
          <div className="action-card">
            <div className="action-icon">🔄</div>
            <h4>Intentar nuevamente</h4>
            <p>Vuelve a intentar el proceso de pago. Tu carrito sigue guardado.</p>
            <button 
              onClick={() => navigate('/carrito')}
              className="btn btn-primary"
            >
              Volver al carrito
            </button>
          </div>

          <div className="action-card">
            <div className="action-icon">💬</div>
            <h4>Contactar soporte</h4>
            <p>Nuestro equipo está disponible para ayudarte con el proceso.</p>
            <a href="mailto:soporte@sorl.com" className="btn btn-secondary">
              Enviar email
            </a>
          </div>

          <div className="action-card">
            <div className="action-icon">📞</div>
            <h4>Llamar por teléfono</h4>
            <p>Completa tu pedido por teléfono con uno de nuestros asesores.</p>
            <a href="tel:+56912345678" className="btn btn-secondary">
              +56 9 1234 5678
            </a>
          </div>
        </div>
      </div>

      <div className="alternative-actions">
        <p>O puedes:</p>
        <div className="alt-buttons">
          <Link to="/servicios" className="btn btn-outline">
            Seguir explorando servicios
          </Link>
          <Link to="/" className="btn btn-outline">
            Volver al inicio
          </Link>
        </div>
      </div>

      <div className="support-box">
        <h4>¿Necesitas ayuda?</h4>
        <p>Estamos disponibles 24/7 para ayudarte</p>
        <div className="support-contacts">
          <a href="mailto:soporte@sorl.com">📧 soporte@sorl.com</a>
          <a href="tel:+56912345678">📞 +56 9 1234 5678</a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderError;