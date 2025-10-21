// src/components/checkout/Checkout.jsx
// Vista principal del proceso de checkout

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { createOrder } from '../../utils/dataManager';
import CheckoutForm from './CheckoutForm';
import CartSummary from '../cart/CartSummary';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, getTotal } = useCart();
  const { currentUser } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  // Si no hay items en el carrito, redirigir
  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <div className="empty-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega servicios para continuar con el checkout</p>
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/servicios')}
        >
          Ver servicios
        </button>
      </div>
    );
  }

  const handleCheckoutSubmit = async (formData) => {
    setIsProcessing(true);

    try {
      // Simular procesamiento (en producción sería una llamada a API)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Crear la orden
      const orderData = {
        userId: currentUser?.id || null,
        items: cartItems.map(item => ({
          serviceId: item.serviceId,
          serviceName: item.serviceName,
          price: item.price,
          quantity: item.quantity
        })),
        subtotal: getTotal(),
        total: getTotal(),
        customerInfo: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone
        },
        shippingAddress: {
          street: formData.street,
          city: formData.city,
          region: formData.region,
          commune: formData.commune,
          zipCode: formData.zipCode,
          notes: formData.notes
        }
      };

      const newOrder = createOrder(orderData);

      // Limpiar carrito
      clearCart();

      // Redirigir a página de éxito con el ID de la orden
      navigate(`/checkout/exito/${newOrder.id}`);

    } catch (error) {
      console.error('Error al procesar el pedido:', error);
      // Redirigir a página de error
      navigate('/checkout/error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Finalizar Pedido</h1>
        <div className="checkout-steps">
          <div className="step active">
            <span className="step-number">1</span>
            <span className="step-label">Información</span>
          </div>
          <div className="step-divider"></div>
          <div className="step">
            <span className="step-number">2</span>
            <span className="step-label">Confirmación</span>
          </div>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-form-section">
          <CheckoutForm 
            onSubmit={handleCheckoutSubmit}
            isProcessing={isProcessing}
          />
        </div>

        <div className="checkout-summary-section">
          <CartSummary />
          
          <div className="order-items-preview">
            <h3>Resumen de servicios ({cartItems.length})</h3>
            <div className="items-list">
              {cartItems.map(item => (
                <div key={item.serviceId} className="item-preview">
                  <div className="item-preview-image">
                    <img 
                      src={require(`../../assets/images/${item.image}`)} 
                      alt={item.serviceName}
                    />
                  </div>
                  <div className="item-preview-info">
                    <div className="item-preview-name">{item.serviceName}</div>
                    <div className="item-preview-quantity">Cantidad: {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="security-badges">
            <div className="badge">🔒 Pago Seguro</div>
            <div className="badge">✓ Garantizado</div>
            <div className="badge">📞 Soporte 24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;