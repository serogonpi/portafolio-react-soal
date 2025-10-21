// src/utils/localStorage.js
// Funciones para gestionar persistencia en localStorage

/**
 * Guardar datos en localStorage
 * @param {string} key - Clave para almacenar
 * @param {*} data - Datos a guardar (se convertirán a JSON)
 */
export const saveToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error(`Error al guardar en localStorage (${key}):`, error);
    return false;
  }
};

/**
 * Cargar datos desde localStorage
 * @param {string} key - Clave a buscar
 * @param {*} defaultValue - Valor por defecto si no existe
 * @returns {*} Datos parseados o valor por defecto
 */
export const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return defaultValue;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error(`Error al cargar desde localStorage (${key}):`, error);
    return defaultValue;
  }
};

/**
 * Eliminar datos de localStorage
 * @param {string} key - Clave a eliminar
 */
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error al eliminar de localStorage (${key}):`, error);
    return false;
  }
};

/**
 * Limpiar todo el localStorage
 */
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error al limpiar localStorage:', error);
    return false;
  }
};

/**
 * Verificar si existe una clave en localStorage
 * @param {string} key - Clave a verificar
 * @returns {boolean}
 */
export const existsInLocalStorage = (key) => {
  return localStorage.getItem(key) !== null;
};

// Claves constantes para usar en toda la app
export const STORAGE_KEYS = {
  SERVICES: 'sorl_services',
  ORDERS: 'sorl_orders',
  USERS: 'sorl_users',
  CART: 'sorl_cart',
  AUTH: 'sorl_auth'
};