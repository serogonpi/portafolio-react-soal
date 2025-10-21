// src/components/cart/CartItem.jsx
// Item individual del carrito

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart, formatPrice } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      handleRemove();
      return;
    }
    updateQuantity(item.serviceId, newQuantity);
  };

  const handleRemove = () => {
    if (window.confirm(`¿Eliminar "${item.serviceName}" del carrito?`)) {
      removeFromCart(item.serviceId);
    }
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <Link to={`/servicios/${item.slug}`}>
          <img 
            src={require(`../../assets/images/${item.image}`)} 
            alt={item.serviceName}
          />
        </Link>
      </div>

      <div className="cart-item-details">
        <Link to={`/servicios/${item.slug}`} className="cart-item-name">
          {item.serviceName}
        </Link>
        
        <div className="cart-item-price">
          {formatPrice(item.price)} <span className="price-unit">c/u</span>
        </div>
      </div>

      <div className="cart-item-quantity">
        <label>Cantidad</label>
        <div className="quantity-controls">
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <input 
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            min="1"
          />
          <button 
            onClick={() => handleQuantityChange(item.quantity + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-subtotal">
        <label>Subtotal</label>
        <div className="subtotal-amount">{formatPrice(subtotal)}</div>
      </div>

      <div className="cart-item-remove">
        <button 
          onClick={handleRemove}
          className="btn-remove"
          aria-label="Eliminar del carrito"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;