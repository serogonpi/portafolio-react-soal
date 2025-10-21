// src/context/AuthContext.jsx
// Contexto para gestionar autenticación y usuario actual

import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage, STORAGE_KEYS } from '../utils/localStorage';
import { getUserByEmail, createUser } from '../utils/dataManager';

// Crear el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Provider del contexto
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar sesión al cargar la aplicación
  useEffect(() => {
    const savedAuth = loadFromLocalStorage(STORAGE_KEYS.AUTH);
    
    if (savedAuth && savedAuth.user) {
      setCurrentUser(savedAuth.user);
      setIsAuthenticated(true);
    }
    
    setIsLoading(false);
  }, []);

  // =============================================================================
  // FUNCIONES DE AUTENTICACIÓN
  // =============================================================================

  /**
   * Iniciar sesión
   * @param {string} email - Email del usuario
   * @param {string} password - Contraseña
   * @returns {Object} { success, message, user }
   */
  const login = (email, password) => {
    try {
      // Buscar usuario por email
      const user = getUserByEmail(email);

      // Verificar si existe
      if (!user) {
        return {
          success: false,
          message: 'Usuario no encontrado'
        };
      }

      // Verificar contraseña (en producción sería con hash)
      if (user.password !== password) {
        return {
          success: false,
          message: 'Contraseña incorrecta'
        };
      }

      // Login exitoso
      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;

      setCurrentUser(userWithoutPassword);
      setIsAuthenticated(true);
      
      // Guardar sesión en localStorage
      saveToLocalStorage(STORAGE_KEYS.AUTH, {
        user: userWithoutPassword,
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        message: 'Inicio de sesión exitoso',
        user: userWithoutPassword
      };

    } catch (error) {
      console.error('Error en login:', error);
      return {
        success: false,
        message: 'Error al iniciar sesión'
      };
    }
  };

  /**
   * Registrar nuevo usuario
   * @param {Object} userData - Datos del nuevo usuario
   * @returns {Object} { success, message, user }
   */
  const register = (userData) => {
    try {
      // Verificar si el email ya existe
      const existingUser = getUserByEmail(userData.email);
      
      if (existingUser) {
        return {
          success: false,
          message: 'El email ya está registrado'
        };
      }

      // Crear nuevo usuario
      const newUser = createUser({
        ...userData,
        role: 'client' // Por defecto, los registros son clientes
      });

      // Login automático después del registro
      const userWithoutPassword = { ...newUser };
      delete userWithoutPassword.password;

      setCurrentUser(userWithoutPassword);
      setIsAuthenticated(true);
      
      saveToLocalStorage(STORAGE_KEYS.AUTH, {
        user: userWithoutPassword,
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        message: 'Registro exitoso',
        user: userWithoutPassword
      };

    } catch (error) {
      console.error('Error en registro:', error);
      return {
        success: false,
        message: error.message || 'Error al registrar usuario'
      };
    }
  };

  /**
   * Cerrar sesión
   */
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    removeFromLocalStorage(STORAGE_KEYS.AUTH);
  };

  /**
   * Actualizar datos del usuario actual
   * @param {Object} updates - Datos a actualizar
   */
  const updateCurrentUser = (updates) => {
    const updatedUser = {
      ...currentUser,
      ...updates
    };
    
    setCurrentUser(updatedUser);
    
    saveToLocalStorage(STORAGE_KEYS.AUTH, {
      user: updatedUser,
      timestamp: new Date().toISOString()
    });
  };

  // =============================================================================
  // VERIFICACIONES
  // =============================================================================

  /**
   * Verificar si el usuario actual es administrador
   * @returns {boolean}
   */
  const isAdmin = () => {
    return currentUser?.role === 'admin';
  };

  /**
   * Verificar si el usuario actual es cliente
   * @returns {boolean}
   */
  const isClient = () => {
    return currentUser?.role === 'client';
  };

  // =============================================================================
  // VALOR DEL CONTEXTO
  // =============================================================================

  const value = {
    // Estado
    currentUser,
    isAuthenticated,
    isLoading,
    
    // Funciones
    login,
    register,
    logout,
    updateCurrentUser,
    
    // Verificaciones
    isAdmin,
    isClient
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;