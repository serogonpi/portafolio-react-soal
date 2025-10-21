// src/components/checkout/OrderSuccess.jsx
// Página de confirmación de pedido exitoso

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOrderById } from '../../utils/dataManager';
import { useCart } from '../../context/CartContext';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { formatPrice } = useCart();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga
    setTimeout(() => {
      const foundOrder = getOrderById(orderId);
      setOrder(foundOrder);
      setLoading(false);
    }, 500);
  }, [orderId]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando información del pedido...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-not-found">
        <h2>❌ Pedido no encontrado</h2>
        <p>No pudimos encontrar el pedido que buscas.</p>
        <Link to="/servicios" className="btn btn-primary">
          Ver servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="order-success-container">
      <div className="success-animation">
        <div className="success-checkmark">✓</div>
      </div>

      <h1 className="success-title">¡Pedido realizado con éxito!</h1>
      <p className="success-subtitle">
        Gracias por confiar en nosotros. Tu pedido ha sido recibido y lo procesaremos pronto.
      </p>

      <div className="order-details-card">
        <div className="order-header">
          <div className="order-number">
            <span className="label">Número de pedido</span>
            <span className="value">{order.id}</span>
          </div>
          <div className="order-status">
            <span className={`status-badge ${order.status}`}>
              {order.status === 'pendiente' ? '⏳ Pendiente' : order.status}
            </span>
          </div>
        </div>

        <div className="order-info-grid">
          <div className="info-section">
            <h3>📧 Información de contacto</h3>
            <p><strong>Nombre:</strong> {order.customerInfo.name}</p>
            <p><strong>Email:</strong> {order.customerInfo.email}</p>
            <p><strong>Teléfono:</strong> {order.customerInfo.phone}</p>
          </div>

          <div className="info-section">
            <h3>📍 Dirección de entrega</h3>
            <p>{order.shippingAddress.street}</p>
            <p>{order.shippingAddress.commune}, {order.shippingAddress.city}</p>
            <p>{order.shippingAddress.region}</p>
            {order.shippingAddress.zipCode && (
              <p>CP: {order.shippingAddress.zipCode}</p>
            )}
            {order.shippingAddress.notes && (
              <p className="notes"><strong>Notas:</strong> {order.shippingAddress.notes}</p>
            )}
          </div>
        </div>

        <div className="order-items">
          <h3>📦 Servicios contratados</h3>
          <div className="items-table">
            <div className="table-header">
              <span>Servicio</span>
              <span>Cantidad</span>
              <span>Precio</span>
              <span>Subtotal</span>
            </div>
            {order.items.map((item, index) => (
              <div key={index} className="table-row">
                <span className="item-name">{item.serviceName}</span>
                <span className="item-quantity">{item.quantity}</span>
                <span className="item-price">{formatPrice(item.price)}</span>
                <span className="item-subtotal">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-total">
          <div className="total-row">
            <span>Total pagado</span>
            <span className="total-amount">{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="next-steps">
        <h3>📋 Próximos pasos</h3>
        <ol>
          <li>Recibirás un correo de confirmación con los detalles de tu pedido</li>
          <li>Nos pondremos en contacto contigo en las próximas 24 horas</li>
          <li>Comenzaremos a trabajar en tu proyecto según el tiempo estimado</li>
          <li>Te mantendremos informado del progreso</li>
        </ol>
      </div>

      <div className="action-buttons">
        <button 
          onClick={() => window.print()} 
          className="btn btn-secondary"
        >
          🖨️ Imprimir resumen
        </button>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(order.id);
            alert('Número de pedido copiado al portapapeles');
          }}
          className="btn btn-secondary"
        >
          📋 Copiar número de pedido
        </button>
        <Link to="/servicios" className="btn btn-primary">
          Seguir explorando servicios
        </Link>
      </div>

      <div className="support-info">
        <p>¿Tienes alguna pregunta? Contáctanos:</p>
        <p>📧 <a href="mailto:contacto@sorl.com">contacto@sorl.com</a></p>
        <p>📞 <a href="tel:+56912345678">+56 9 1234 5678</a></p>
      </div>
    </div>
  );
};

export default OrderSuccess;