// src/context/CartContext.jsx
// Contexto para gestionar el carrito de compras

import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage, STORAGE_KEYS } from '../utils/localStorage';
import { getServiceById } from '../utils/dataManager';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

// Provider del contexto
export const CartProvider = ({ children }) => {
  // Estado del carrito
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = loadFromLocalStorage(STORAGE_KEYS.CART, []);
    setCartItems(savedCart);
    setIsLoading(false);
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    if (!isLoading) {
      saveToLocalStorage(STORAGE_KEYS.CART, cartItems);
    }
  }, [cartItems, isLoading]);

  // =============================================================================
  // FUNCIONES DEL CARRITO
  // =============================================================================

  /**
   * Agregar servicio al carrito
   * @param {number} serviceId - ID del servicio
   * @param {number} quantity - Cantidad (siempre 1 para servicios)
   */
  const addToCart = (serviceId, quantity = 1) => {
    const service = getServiceById(serviceId);
    
    if (!service) {
      console.error('Servicio no encontrado');
      return;
    }

    // Verificar si el servicio ya está en el carrito
    const existingItem = cartItems.find(item => item.serviceId === serviceId);

    if (existingItem) {
      // Si ya existe, incrementar cantidad
      setCartItems(cartItems.map(item =>
        item.serviceId === serviceId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      // Si no existe, agregarlo
      const newItem = {
        serviceId: service.id,
        serviceName: service.name,
        price: service.price,
        image: service.image,
        slug: service.slug,
        quantity: quantity
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  /**
   * Eliminar servicio del carrito
   * @param {number} serviceId - ID del servicio a eliminar
   */
  const removeFromCart = (serviceId) => {
    setCartItems(cartItems.filter(item => item.serviceId !== serviceId));
  };

  /**
   * Actualizar cantidad de un servicio
   * @param {number} serviceId - ID del servicio
   * @param {number} newQuantity - Nueva cantidad
   */
  const updateQuantity = (serviceId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(serviceId);
      return;
    }

    setCartItems(cartItems.map(item =>
      item.serviceId === serviceId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  /**
   * Vaciar el carrito completamente
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Verificar si un servicio está en el carrito
   * @param {number} serviceId - ID del servicio
   * @returns {boolean}
   */
  const isInCart = (serviceId) => {
    return cartItems.some(item => item.serviceId === serviceId);
  };

  /**
   * Obtener cantidad de un servicio en el carrito
   * @param {number} serviceId - ID del servicio
   * @returns {number}
   */
  const getItemQuantity = (serviceId) => {
    const item = cartItems.find(item => item.serviceId === serviceId);
    return item ? item.quantity : 0;
  };

  // =============================================================================
  // CÁLCULOS
  // =============================================================================

  /**
   * Calcular subtotal del carrito
   * @returns {number}
   */
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  /**
   * Calcular cantidad total de items
   * @returns {number}
   */
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Calcular total (por ahora igual al subtotal, se puede agregar descuentos/envío)
   * @returns {number}
   */
  const getTotal = () => {
    return getSubtotal();
  };

  // =============================================================================
  // FORMATEO
  // =============================================================================

  /**
   * Formatear precio en CLP
   * @param {number} amount - Monto a formatear
   * @returns {string}
   */
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(amount);
  };

  // =============================================================================
  // VALOR DEL CONTEXTO
  // =============================================================================

  const value = {
    // Estado
    cartItems,
    isLoading,
    
    // Funciones
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
    
    // Cálculos
    getSubtotal,
    getTotalItems,
    getTotal,
    
    // Utilidades
    formatPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;