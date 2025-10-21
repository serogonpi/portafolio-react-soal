// src/data/users.js
// Base de datos simulada de usuarios

const users = [
  {
    id: 1,
    email: "admin@sorl.com",
    password: "admin123", // En producción esto sería un hash
    role: "admin",
    name: "SORL Admin",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    email: "cliente@ejemplo.com",
    password: "cliente123",
    role: "client",
    name: "Cliente Ejemplo",
    phone: "+56912345678",
    address: {
      street: "Av. Providencia 123",
      city: "Santiago",
      region: "Región Metropolitana",
      zipCode: "7500000"
    },
    createdAt: new Date().toISOString()
  }
];

export default users;