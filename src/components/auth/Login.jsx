// src/components/auth/Login.jsx
// Componente de inicio de sesión

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Obtener la ruta desde donde vino el usuario
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar errores
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (loginError) {
      setLoginError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validar password
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 800));

    const result = login(formData.email, formData.password);

    setIsLoading(false);

    if (result.success) {
      // Login exitoso - redirigir
      navigate(from, { replace: true });
    } else {
      // Error en login
      setLoginError(result.message);
    }
  };

  // Función para login rápido (demo)
  const quickLogin = (type) => {
    if (type === 'admin') {
      setFormData({
        email: 'admin@sorl.com',
        password: 'admin123'
      });
    } else {
      setFormData({
        email: 'cliente@ejemplo.com',
        password: 'cliente123'
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Iniciar Sesión</h1>
          <p>Bienvenido de vuelta a SORL Servicios</p>
        </div>

        {loginError && (
          <div className="alert alert-error">
            <span className="alert-icon">⚠️</span>
            {loginError}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
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

          <div className={`form-field ${errors.password ? 'error' : ''}`}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              disabled={isLoading}
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Recordarme</span>
            </label>
            <Link to="/recuperar-password" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button 
            type="submit" 
            className="btn-login"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-small"></span>
                Iniciando sesión...
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        <div className="login-divider">
          <span>o</span>
        </div>

        <div className="demo-logins">
          <p className="demo-title">🎮 Acceso rápido (Demo)</p>
          <div className="demo-buttons">
            <button 
              onClick={() => quickLogin('admin')}
              className="btn-demo admin"
              disabled={isLoading}
            >
              👤 Admin
            </button>
            <button 
              onClick={() => quickLogin('client')}
              className="btn-demo client"
              disabled={isLoading}
            >
              👤 Cliente
            </button>
          </div>
        </div>

        <div className="login-footer">
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/registro">Regístrate aquí</Link>
          </p>
        </div>
      </div>

      <div className="login-info">
        <div className="info-card">
          <span className="info-icon">🔒</span>
          <div>
            <h3>Seguro y Protegido</h3>
            <p>Tus datos están completamente seguros</p>
          </div>
        </div>
        <div className="info-card">
          <span className="info-icon">⚡</span>
          <div>
            <h3>Acceso Rápido</h3>
            <p>Gestiona tus pedidos fácilmente</p>
          </div>
        </div>
        <div className="info-card">
          <span className="info-icon">💼</span>
          <div>
            <h3>Panel Personalizado</h3>
            <p>Accede a tu historial y más</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;