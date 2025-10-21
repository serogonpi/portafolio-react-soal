// src/components/cart/Cart.jsx
// Vista principal del carrito de compras

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart, getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/servicios');
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clearCart();
    }
  };

  // Si el carrito está vacío
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-cart-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>¡Explora nuestros servicios y encuentra lo que necesitas!</p>
        <Link to="/servicios" className="btn btn-primary">
          Ver servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Carrito de Compras</h1>
        <span className="cart-count">
          {getTotalItems()} {getTotalItems() === 1 ? 'servicio' : 'servicios'}
        </span>
      </div>

      <div className="cart-content">
        {/* Lista de items */}
        <div className="cart-items-section">
          <div className="cart-items-header">
            <button 
              className="btn-clear-cart"
              onClick={handleClearCart}
            >
              🗑️ Vaciar carrito
            </button>
          </div>

          <div className="cart-items-list">
            {cartItems.map(item => (
              <CartItem key={item.serviceId} item={item} />
            ))}
          </div>

          <div className="cart-actions-mobile">
            <button 
              className="btn btn-secondary"
              onClick={handleContinueShopping}
            >
              ← Continuar comprando
            </button>
          </div>
        </div>

        {/* Resumen */}
        <div className="cart-summary-section">
          <CartSummary />
          
          <div className="checkout-actions">
            <button 
              className="btn btn-primary btn-checkout"
              onClick={handleProceedToCheckout}
            >
              Proceder al pago →
            </button>
            
            <button 
              className="btn btn-secondary btn-continue"
              onClick={handleContinueShopping}
            >
              ← Continuar comprando
            </button>
          </div>

          {/* Información de seguridad */}
          <div className="security-info">
            <div className="security-item">
              <span className="security-icon">🔒</span>
              <span>Pago seguro</span>
            </div>
            <div className="security-item">
              <span className="security-icon">✓</span>
              <span>Garantía de calidad</span>
            </div>
            <div className="security-item">
              <span className="security-icon">💬</span>
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;