// src/components/auth/Register.jsx
// Componente de registro de nuevos usuarios

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Limpiar errores
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (registerError) {
      setRegisterError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
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

    // Validar password
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    // Validar confirmación de password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Debes confirmar tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    // Validar términos
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = register({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    });

    setIsLoading(false);

    if (result.success) {
      // Registro exitoso - redirigir al home
      navigate('/', { replace: true });
    } else {
      // Error en registro
      setRegisterError(result.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Crear Cuenta</h1>
          <p>Únete a SORL Servicios y comienza hoy</p>
        </div>

        {registerError && (
          <div className="alert alert-error">
            <span className="alert-icon">⚠️</span>
            {registerError}
          </div>
        )}

        <form className="register-form" onSubmit={handleSubmit}>
          <div className={`form-field ${errors.name ? 'error' : ''}`}>
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Pérez"
              disabled={isLoading}
              autoComplete="name"
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className={`form-field ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              disabled={isLoading}
              autoComplete="email"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className={`form-field ${errors.phone ? 'error' : ''}`}>
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+56 9 1234 5678"
              disabled={isLoading}
              autoComplete="tel"
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className={`form-field ${errors.password ? 'error' : ''}`}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mínimo 6 caracteres"
              disabled={isLoading}
              autoComplete="new-password"
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className={`form-field ${errors.confirmPassword ? 'error' : ''}`}>
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repite tu contraseña"
              disabled={isLoading}
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <div className={`form-field checkbox-field ${errors.acceptTerms ? 'error' : ''}`}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                disabled={isLoading}
              />
              <span>
                Acepto los{' '}
                <a href="/terminos" target="_blank" rel="noopener noreferrer">
                  términos y condiciones
                </a>
                {' '}y la{' '}
                <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                  política de privacidad
                </a>
              </span>
            </label>
            {errors.acceptTerms && (
              <span className="error-message">{errors.acceptTerms}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="btn-register"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-small"></span>
                Creando cuenta...
              </>
            ) : (
              'Crear Cuenta'
            )}
          </button>
        </form>

        <div className="register-footer">
          <p>
            ¿Ya tienes cuenta?{' '}
            <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>

      <div className="register-benefits">
        <h2>Beneficios de crear una cuenta</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h3>Proceso de compra más rápido</h3>
              <p>Guarda tu información para futuras compras</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h3>Seguimiento de pedidos</h3>
              <p>Revisa el estado de tus proyectos en tiempo real</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h3>Historial de servicios</h3>
              <p>Accede a todos tus proyectos anteriores</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h3>Ofertas exclusivas</h3>
              <p>Recibe descuentos y promociones especiales</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h3>Soporte prioritario</h3>
              <p>Atención preferencial para clientes registrados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;