// src/components/checkout/CheckoutForm.jsx
// Formulario de checkout con información del cliente

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './CheckoutForm.css';

const CheckoutForm = ({ onSubmit, isProcessing }) => {
  const { currentUser, isAuthenticated } = useAuth();

  // Estado del formulario
  const [formData, setFormData] = useState({
    // Información personal
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Dirección de entrega
    street: '',
    city: '',
    region: 'Región Metropolitana',
    commune: '',
    zipCode: '',
    notes: '',
    
    // Aceptar términos
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});

  // Si el usuario está autenticado, pre-llenar datos
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      setFormData(prev => ({
        ...prev,
        firstName: currentUser.name?.split(' ')[0] || '',
        lastName: currentUser.name?.split(' ').slice(1).join(' ') || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        street: currentUser.address?.street || '',
        city: currentUser.address?.city || '',
        region: currentUser.address?.region || 'Región Metropolitana',
        commune: currentUser.address?.commune || '',
        zipCode: currentUser.address?.zipCode || ''
      }));
    }
  }, [isAuthenticated, currentUser]);

  // Regiones de Chile
  const regiones = [
    'Región de Arica y Parinacota',
    'Región de Tarapacá',
    'Región de Antofagasta',
    'Región de Atacama',
    'Región de Coquimbo',
    'Región de Valparaíso',
    'Región Metropolitana',
    'Región del Libertador General Bernardo O\'Higgins',
    'Región del Maule',
    'Región de Ñuble',
    'Región del Biobío',
    'Región de La Araucanía',
    'Región de Los Ríos',
    'Región de Los Lagos',
    'Región de Aysén',
    'Región de Magallanes'
  ];

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es requerido';
    }

    // Validar apellido
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validar teléfono
    const phoneRegex = /^(\+?56)?[0-9]{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Teléfono inválido (9 dígitos)';
    }

    // Validar dirección
    if (!formData.street.trim()) {
      newErrors.street = 'La calle es requerida';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'La ciudad es requerida';
    }

    if (!formData.commune.trim()) {
      newErrors.commune = 'La comuna es requerida';
    }

    // Validar términos
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    } else {
      // Scroll al primer error
      const firstErrorField = document.querySelector('.form-field.error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Información de Contacto</h2>
      
      <div className="form-row">
        <div className={`form-field ${errors.firstName ? 'error' : ''}`}>
          <label htmlFor="firstName">
            Nombre <span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Tu nombre"
            disabled={isProcessing}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>

        <div className={`form-field ${errors.lastName ? 'error' : ''}`}>
          <label htmlFor="lastName">
            Apellido <span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Tu apellido"
            disabled={isProcessing}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className={`form-field ${errors.email ? 'error' : ''}`}>
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            disabled={isProcessing}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className={`form-field ${errors.phone ? 'error' : ''}`}>
          <label htmlFor="phone">
            Teléfono <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
            disabled={isProcessing}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>
      </div>

      <h2>Dirección de Entrega</h2>

      <div className={`form-field ${errors.street ? 'error' : ''}`}>
        <label htmlFor="street">
          Calle y número <span className="required">*</span>
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Ej: Av. Providencia 123, Depto 45"
          disabled={isProcessing}
        />
        {errors.street && (
          <span className="error-message">{errors.street}</span>
        )}
      </div>

      <div className="form-row">
        <div className={`form-field ${errors.region ? 'error' : ''}`}>
          <label htmlFor="region">
            Región <span className="required">*</span>
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            disabled={isProcessing}
          >
            {regiones.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div className={`form-field ${errors.commune ? 'error' : ''}`}>
          <label htmlFor="commune">
            Comuna <span className="required">*</span>
          </label>
          <input
            type="text"
            id="commune"
            name="commune"
            value={formData.commune}
            onChange={handleChange}
            placeholder="Ej: Santiago"
            disabled={isProcessing}
          />
          {errors.commune && (
            <span className="error-message">{errors.commune}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className={`form-field ${errors.city ? 'error' : ''}`}>
          <label htmlFor="city">
            Ciudad <span className="required">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Ej: Santiago"
            disabled={isProcessing}
          />
          {errors.city && (
            <span className="error-message">{errors.city}</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="zipCode">Código Postal (opcional)</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Ej: 7500000"
            disabled={isProcessing}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="notes">Notas adicionales (opcional)</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Instrucciones especiales de entrega, timbre, etc."
          rows="3"
          disabled={isProcessing}
        />
      </div>

      <div className={`form-field checkbox-field ${errors.acceptTerms ? 'error' : ''}`}>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            disabled={isProcessing}
          />
          <span>
            Acepto los <a href="/terminos" target="_blank">términos y condiciones</a> y la{' '}
            <a href="/privacidad" target="_blank">política de privacidad</a>
            <span className="required"> *</span>
          </span>
        </label>
        {errors.acceptTerms && (
          <span className="error-message">{errors.acceptTerms}</span>
        )}
      </div>

      <button 
        type="submit" 
        className="btn-submit-order"
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <span className="spinner-small"></span>
            Procesando...
          </>
        ) : (
          'Realizar Pedido'
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;