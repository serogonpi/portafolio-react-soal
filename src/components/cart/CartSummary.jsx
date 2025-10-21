// src/components/cart/CartSummary.jsx
// Resumen del carrito con totales

import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartSummary.css';

const CartSummary = () => {
  const { cartItems, getSubtotal, getTotal, getTotalItems, formatPrice } = useCart();

  const subtotal = getSubtotal();
  const shipping = 0; // Por ahora el envío es gratis
  const discount = 0; // Aquí se pueden aplicar descuentos
  const total = getTotal();

  return (
    <div className="cart-summary">
      <h3 className="summary-title">Resumen del pedido</h3>

      <div className="summary-items-count">
        {getTotalItems()} {getTotalItems() === 1 ? 'servicio' : 'servicios'}
      </div>

      <div className="summary-divider"></div>

      <div className="summary-row">
        <span className="summary-label">Subtotal</span>
        <span className="summary-value">{formatPrice(subtotal)}</span>
      </div>

      <div className="summary-row">
        <span className="summary-label">Envío</span>
        <span className="summary-value shipping-free">
          {shipping === 0 ? 'GRATIS' : formatPrice(shipping)}
        </span>
      </div>

      {discount > 0 && (
        <div className="summary-row discount-row">
          <span className="summary-label">Descuento</span>
          <span className="summary-value discount-value">
            -{formatPrice(discount)}
          </span>
        </div>
      )}

      <div className="summary-divider"></div>

      <div className="summary-row summary-total">
        <span className="summary-label">Total</span>
        <span className="summary-value">{formatPrice(total)}</span>
      </div>

      {/* Código de descuento (opcional para futuro) */}
      <div className="coupon-section">
        <input 
          type="text" 
          placeholder="Código de descuento"
          className="coupon-input"
          disabled
        />
        <button className="btn-apply-coupon" disabled>
          Aplicar
        </button>
      </div>

      <div className="summary-info">
        <p>💳 Aceptamos todos los medios de pago</p>
        <p>📦 Entrega según tiempo estimado del servicio</p>
      </div>
    </div>
  );
};

export default CartSummary;