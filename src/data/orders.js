let orders = [
  {
    id: "ORD-20250120-001",
    userId: 2,
    items: [
      {
        serviceId: 1,
        serviceName: "Desarrollo Web Completo",
        price: 299990,
        quantity: 1
      }
    ],
    subtotal: 299990,
    total: 299990,
    status: "pendiente",
    customerInfo: {
      name: "Cliente Ejemplo",
      email: "cliente@ejemplo.com",
      phone: "+56912345678"
    },
    shippingAddress: {
      street: "Av. Providencia 123",
      city: "Santiago",
      region: "Región Metropolitana",
      zipCode: "7500000",
      notes: "Oficina 301"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export default orders;