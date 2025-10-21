// src/utils/dataManager.js
// Funciones CRUD para gestionar todos los datos de la aplicación

import servicesData from '../data/services';
import categoriesData from '../data/categories';
import ordersData from '../data/orders';
import usersData from '../data/users';
import { saveToLocalStorage, loadFromLocalStorage, STORAGE_KEYS } from './localStorage';

// =============================================================================
// INICIALIZACIÓN
// =============================================================================

/**
 * Inicializar datos en localStorage si no existen
 */
export const initializeData = () => {
  // Inicializar servicios si no existen
  if (!loadFromLocalStorage(STORAGE_KEYS.SERVICES)) {
    saveToLocalStorage(STORAGE_KEYS.SERVICES, servicesData);
  }
  
  // Inicializar órdenes si no existen
  if (!loadFromLocalStorage(STORAGE_KEYS.ORDERS)) {
    saveToLocalStorage(STORAGE_KEYS.ORDERS, ordersData);
  }
  
  // Inicializar usuarios si no existen
  if (!loadFromLocalStorage(STORAGE_KEYS.USERS)) {
    saveToLocalStorage(STORAGE_KEYS.USERS, usersData);
  }
  
  // Inicializar carrito vacío si no existe
  if (!loadFromLocalStorage(STORAGE_KEYS.CART)) {
    saveToLocalStorage(STORAGE_KEYS.CART, []);
  }
};

// =============================================================================
// CRUD - SERVICIOS
// =============================================================================

/**
 * Obtener todos los servicios
 * @returns {Array} Lista de servicios
 */
export const getServices = () => {
  return loadFromLocalStorage(STORAGE_KEYS.SERVICES, servicesData);
};

/**
 * Obtener un servicio por ID
 * @param {number} id - ID del servicio
 * @returns {Object|null} Servicio encontrado o null
 */
export const getServiceById = (id) => {
  const services = getServices();
  return services.find(service => service.id === parseInt(id)) || null;
};

/**
 * Obtener servicios por categoría
 * @param {string} categorySlug - Slug de la categoría
 * @returns {Array} Servicios de la categoría
 */
export const getServicesByCategory = (categorySlug) => {
  const services = getServices();
  return services.filter(service => service.category === categorySlug);
};

/**
 * Obtener servicios destacados
 * @returns {Array} Servicios destacados
 */
export const getFeaturedServices = () => {
  const services = getServices();
  return services.filter(service => service.featured === true);
};

/**
 * Crear un nuevo servicio
 * @param {Object} serviceData - Datos del nuevo servicio
 * @returns {Object} Servicio creado
 */
export const createService = (serviceData) => {
  const services = getServices();
  
  // Generar nuevo ID
  const newId = services.length > 0 
    ? Math.max(...services.map(s => s.id)) + 1 
    : 1;
  
  const newService = {
    id: newId,
    ...serviceData,
    createdAt: new Date().toISOString()
  };
  
  services.push(newService);
  saveToLocalStorage(STORAGE_KEYS.SERVICES, services);
  
  return newService;
};

/**
 * Actualizar un servicio existente
 * @param {number} id - ID del servicio a actualizar
 * @param {Object} updates - Datos a actualizar
 * @returns {Object|null} Servicio actualizado o null
 */
export const updateService = (id, updates) => {
  const services = getServices();
  const index = services.findIndex(service => service.id === parseInt(id));
  
  if (index === -1) return null;
  
  services[index] = {
    ...services[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  saveToLocalStorage(STORAGE_KEYS.SERVICES, services);
  return services[index];
};

/**
 * Eliminar un servicio
 * @param {number} id - ID del servicio a eliminar
 * @returns {boolean} True si se eliminó correctamente
 */
export const deleteService = (id) => {
  const services = getServices();
  const filteredServices = services.filter(service => service.id !== parseInt(id));
  
  if (filteredServices.length === services.length) return false;
  
  saveToLocalStorage(STORAGE_KEYS.SERVICES, filteredServices);
  return true;
};

// =============================================================================
// CRUD - ÓRDENES
// =============================================================================

/**
 * Obtener todas las órdenes
 * @returns {Array} Lista de órdenes
 */
export const getOrders = () => {
  return loadFromLocalStorage(STORAGE_KEYS.ORDERS, ordersData);
};

/**
 * Obtener una orden por ID
 * @param {string} orderId - ID de la orden
 * @returns {Object|null} Orden encontrada o null
 */
export const getOrderById = (orderId) => {
  const orders = getOrders();
  return orders.find(order => order.id === orderId) || null;
};

/**
 * Obtener órdenes por usuario
 * @param {number} userId - ID del usuario
 * @returns {Array} Órdenes del usuario
 */
export const getOrdersByUser = (userId) => {
  const orders = getOrders();
  return orders.filter(order => order.userId === parseInt(userId));
};

/**
 * Crear una nueva orden
 * @param {Object} orderData - Datos de la orden
 * @returns {Object} Orden creada
 */
export const createOrder = (orderData) => {
  const orders = getOrders();
  
  // Generar ID único para la orden
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
  const orderNumber = orders.length + 1;
  const orderId = `ORD-${dateStr}-${String(orderNumber).padStart(3, '0')}`;
  
  const newOrder = {
    id: orderId,
    ...orderData,
    status: 'pendiente',
    createdAt: date.toISOString(),
    updatedAt: date.toISOString()
  };
  
  orders.push(newOrder);
  saveToLocalStorage(STORAGE_KEYS.ORDERS, orders);
  
  return newOrder;
};

/**
 * Actualizar una orden
 * @param {string} orderId - ID de la orden
 * @param {Object} updates - Datos a actualizar
 * @returns {Object|null} Orden actualizada o null
 */
export const updateOrder = (orderId, updates) => {
  const orders = getOrders();
  const index = orders.findIndex(order => order.id === orderId);
  
  if (index === -1) return null;
  
  orders[index] = {
    ...orders[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  saveToLocalStorage(STORAGE_KEYS.ORDERS, orders);
  return orders[index];
};

/**
 * Eliminar una orden
 * @param {string} orderId - ID de la orden a eliminar
 * @returns {boolean} True si se eliminó correctamente
 */
export const deleteOrder = (orderId) => {
  const orders = getOrders();
  const filteredOrders = orders.filter(order => order.id !== orderId);
  
  if (filteredOrders.length === orders.length) return false;
  
  saveToLocalStorage(STORAGE_KEYS.ORDERS, filteredOrders);
  return true;
};

// =============================================================================
// CRUD - USUARIOS
// =============================================================================

/**
 * Obtener todos los usuarios
 * @returns {Array} Lista de usuarios
 */
export const getUsers = () => {
  return loadFromLocalStorage(STORAGE_KEYS.USERS, usersData);
};

/**
 * Obtener un usuario por ID
 * @param {number} id - ID del usuario
 * @returns {Object|null} Usuario encontrado o null
 */
export const getUserById = (id) => {
  const users = getUsers();
  return users.find(user => user.id === parseInt(id)) || null;
};

/**
 * Obtener un usuario por email
 * @param {string} email - Email del usuario
 * @returns {Object|null} Usuario encontrado o null
 */
export const getUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email) || null;
};

/**
 * Crear un nuevo usuario
 * @param {Object} userData - Datos del usuario
 * @returns {Object} Usuario creado
 */
export const createUser = (userData) => {
  const users = getUsers();
  
  // Verificar si el email ya existe
  if (getUserByEmail(userData.email)) {
    throw new Error('El email ya está registrado');
  }
  
  // Generar nuevo ID
  const newId = users.length > 0 
    ? Math.max(...users.map(u => u.id)) + 1 
    : 1;
  
  const newUser = {
    id: newId,
    ...userData,
    role: userData.role || 'client',
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveToLocalStorage(STORAGE_KEYS.USERS, users);
  
  return newUser;
};

/**
 * Actualizar un usuario
 * @param {number} id - ID del usuario
 * @param {Object} updates - Datos a actualizar
 * @returns {Object|null} Usuario actualizado o null
 */
export const updateUser = (id, updates) => {
  const users = getUsers();
  const index = users.findIndex(user => user.id === parseInt(id));
  
  if (index === -1) return null;
  
  users[index] = {
    ...users[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  saveToLocalStorage(STORAGE_KEYS.USERS, users);
  return users[index];
};

/**
 * Eliminar un usuario
 * @param {number} id - ID del usuario a eliminar
 * @returns {boolean} True si se eliminó correctamente
 */
export const deleteUser = (id) => {
  const users = getUsers();
  const filteredUsers = users.filter(user => user.id !== parseInt(id));
  
  if (filteredUsers.length === users.length) return false;
  
  saveToLocalStorage(STORAGE_KEYS.USERS, filteredUsers);
  return true;
};

// =============================================================================
// CATEGORÍAS (Solo lectura, no se modifican)
// =============================================================================

/**
 * Obtener todas las categorías
 * @returns {Array} Lista de categorías
 */
export const getCategories = () => {
  return categoriesData;
};

/**
 * Obtener una categoría por slug
 * @param {string} slug - Slug de la categoría
 * @returns {Object|null} Categoría encontrada o null
 */
export const getCategoryBySlug = (slug) => {
  return categoriesData.find(cat => cat.slug === slug) || null;
};

// =============================================================================
// BÚSQUEDA Y FILTROS
// =============================================================================

/**
 * Buscar servicios por término
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} Servicios encontrados
 */
export const searchServices = (searchTerm) => {
  const services = getServices();
  const term = searchTerm.toLowerCase();
  
  return services.filter(service => 
    service.name.toLowerCase().includes(term) ||
    service.description.toLowerCase().includes(term) ||
    service.shortDescription.toLowerCase().includes(term)
  );
};

/**
 * Filtrar servicios por múltiples criterios
 * @param {Object} filters - Objeto con filtros
 * @returns {Array} Servicios filtrados
 */
export const filterServices = (filters = {}) => {
  let services = getServices();
  
  // Filtrar por categoría
  if (filters.category) {
    services = services.filter(s => s.category === filters.category);
  }
  
  // Filtrar por rango de precio
  if (filters.minPrice !== undefined) {
    services = services.filter(s => s.price >= filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    services = services.filter(s => s.price <= filters.maxPrice);
  }
  
  // Filtrar por disponibilidad
  if (filters.inStock !== undefined) {
    services = services.filter(s => s.inStock === filters.inStock);
  }
  
  // Filtrar destacados
  if (filters.featured !== undefined) {
    services = services.filter(s => s.featured === filters.featured);
  }
  
  return services;
};