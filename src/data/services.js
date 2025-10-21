const services = [
  {
    id: 1,
    name: "Desarrollo Web Completo",
    slug: "desarrollo-web-completo",
    category: "desarrollo-web",
    description: "Sitio web profesional completo con diseño moderno, responsive y optimizado para SEO. Incluye hasta 5 páginas, formulario de contacto y panel de administración básico.",
    shortDescription: "Sitio web profesional responsive con hasta 5 páginas",
    price: 299990,
    currency: "CLP",
    duration: "2-3 semanas",
    image: "diseno-web.png",
    features: [
      "Diseño responsive (móvil, tablet, desktop)",
      "Optimización SEO básica",
      "Formulario de contacto funcional",
      "Integración con redes sociales",
      "Panel de administración básico",
      "Hosting y dominio por 1 año (opcional)",
      "3 revisiones incluidas",
      "Soporte técnico por 30 días"
    ],
    technologies: ["React", "Node.js", "Bootstrap", "MongoDB"],
    inStock: true,
    featured: true,
    deliverables: [
      "Código fuente completo",
      "Documentación técnica",
      "Manual de usuario",
      "Archivos de diseño"
    ]
  },
  {
    id: 2,
    name: "Diseño UI/UX Profesional",
    slug: "diseno-uiux-profesional",
    category: "diseno-uiux",
    description: "Diseño de interfaz de usuario moderna y experiencia de usuario optimizada. Incluye wireframes, prototipos interactivos y guía de estilos completa.",
    shortDescription: "Diseño moderno de interfaces con prototipos interactivos",
    price: 199990,
    currency: "CLP",
    duration: "1-2 semanas",
    image: "dashboard.png",
    features: [
      "Investigación de usuarios",
      "Wireframes de baja y alta fidelidad",
      "Prototipos interactivos en Figma",
      "Guía de estilos completa",
      "Design system básico",
      "Versión móvil y desktop",
      "5 revisiones incluidas",
      "Archivos editables entregados"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch"],
    inStock: true,
    featured: true,
    deliverables: [
      "Archivos de Figma/XD",
      "Guía de estilos",
      "Prototipos interactivos",
      "Assets exportados"
    ]
  },
  {
    id: 3,
    name: "Aplicación Web Bancaria",
    slug: "app-web-bancaria",
    category: "desarrollo-web",
    description: "Desarrollo de aplicación web para servicios bancarios con dashboard administrativo, gestión de cuentas y transacciones. Sistema seguro con autenticación robusta.",
    shortDescription: "App bancaria con dashboard y gestión de transacciones",
    price: 899990,
    currency: "CLP",
    duration: "6-8 semanas",
    image: "banking_app.png",
    features: [
      "Dashboard administrativo completo",
      "Gestión de cuentas y usuarios",
      "Sistema de transacciones",
      "Autenticación multi-factor",
      "Reportes y analíticas",
      "Responsive design",
      "APIs RESTful",
      "Base de datos segura",
      "Backup automático",
      "Soporte por 60 días"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Redux"],
    inStock: true,
    featured: true,
    deliverables: [
      "Código fuente completo",
      "Base de datos configurada",
      "API documentada",
      "Manual de administrador",
      "Tests unitarios"
    ]
  },
  {
    id: 4,
    name: "Portal Corporativo",
    slug: "portal-corporativo",
    category: "desarrollo-web",
    description: "Portal corporativo completo con sistema de gestión de contenidos, área de empleados, directorio y módulo de comunicaciones internas.",
    shortDescription: "Portal empresarial con CMS y área de empleados",
    price: 699990,
    currency: "CLP",
    duration: "4-6 semanas",
    image: "portal_corporativo.png",
    features: [
      "Sistema de gestión de contenidos (CMS)",
      "Área privada de empleados",
      "Directorio corporativo",
      "Sistema de noticias internas",
      "Calendario de eventos",
      "Gestión de documentos",
      "Multi-idioma (opcional)",
      "Integraciones con Office 365/Google Workspace",
      "Responsive design",
      "Soporte por 45 días"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    inStock: true,
    featured: false,
    deliverables: [
      "Código fuente",
      "Panel CMS configurado",
      "Manual de administrador",
      "Documentación de API"
    ]
  },
  {
    id: 5,
    name: "Dashboard Analítico",
    slug: "dashboard-analitico",
    category: "desarrollo-web",
    description: "Dashboard interactivo con visualización de datos en tiempo real, gráficos personalizables y reportes exportables. Perfecto para toma de decisiones basada en datos.",
    shortDescription: "Dashboard con visualización de datos en tiempo real",
    price: 449990,
    currency: "CLP",
    duration: "3-4 semanas",
    image: "dashboard.png",
    features: [
      "Visualización de datos interactiva",
      "Gráficos personalizables (Chart.js/D3.js)",
      "Reportes exportables (PDF/Excel)",
      "Filtros y búsqueda avanzada",
      "Actualizaciones en tiempo real",
      "Responsive design",
      "Múltiples roles de usuario",
      "Integración con APIs externas",
      "Soporte por 30 días"
    ],
    technologies: ["React", "Chart.js", "D3.js", "Node.js", "WebSocket"],
    inStock: true,
    featured: true,
    deliverables: [
      "Código fuente",
      "Documentación técnica",
      "Manual de usuario",
      "API documentada"
    ]
  },
  {
    id: 6,
    name: "E-commerce Completo",
    slug: "ecommerce-completo",
    category: "desarrollo-web",
    description: "Tienda online completa con carrito de compras, pasarela de pagos, gestión de inventario y panel administrativo. Lista para empezar a vender.",
    shortDescription: "Tienda online con carrito y pasarela de pagos",
    price: 799990,
    currency: "CLP",
    duration: "5-7 semanas",
    image: "ecommerce.jpeg",
    features: [
      "Catálogo de productos completo",
      "Carrito de compras",
      "Integración con pasarelas de pago",
      "Gestión de inventario",
      "Panel administrativo",
      "Sistema de usuarios y perfiles",
      "Seguimiento de pedidos",
      "Cupones de descuento",
      "Reportes de ventas",
      "Responsive design",
      "Soporte por 60 días"
    ],
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redux"],
    inStock: true,
    featured: true,
    deliverables: [
      "Código fuente completo",
      "Base de datos configurada",
      "Panel admin completo",
      "Manual de administrador",
      "Documentación de API"
    ]
  },
  {
    id: 7,
    name: "App de Delivery",
    slug: "app-delivery",
    category: "desarrollo-web",
    description: "Aplicación web para servicios de delivery con seguimiento en tiempo real, gestión de pedidos y sistema de notificaciones.",
    shortDescription: "App de delivery con seguimiento en tiempo real",
    price: 649990,
    currency: "CLP",
    duration: "4-5 semanas",
    image: "delivery_app.png",
    features: [
      "Sistema de pedidos online",
      "Seguimiento en tiempo real",
      "Gestión de repartidores",
      "Sistema de notificaciones",
      "Panel administrativo",
      "Integración con mapas",
      "Múltiples métodos de pago",
      "Historial de pedidos",
      "Responsive design",
      "Soporte por 45 días"
    ],
    technologies: ["React", "Node.js", "Socket.io", "Google Maps API", "MongoDB"],
    inStock: true,
    featured: false,
    deliverables: [
      "Código fuente",
      "Panel admin",
      "App de repartidores",
      "Manual de usuario",
      "API documentada"
    ]
  },
  {
    id: 8,
    name: "App de Fitness",
    slug: "app-fitness",
    category: "desarrollo-web",
    description: "Aplicación web para seguimiento de ejercicios, planes de entrenamiento personalizados y tracking de progreso. Incluye calculadoras de IMC y calorías.",
    shortDescription: "App de fitness con planes de entrenamiento personalizados",
    price: 349990,
    currency: "CLP",
    duration: "3-4 semanas",
    image: "fitness-app.png",
    features: [
      "Biblioteca de ejercicios",
      "Planes de entrenamiento personalizados",
      "Tracking de progreso",
      "Calculadoras (IMC, calorías)",
      "Calendario de entrenamientos",
      "Sistema de notificaciones",
      "Estadísticas y gráficos",
      "Responsive design",
      "Soporte por 30 días"
    ],
    technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
    inStock: true,
    featured: false,
    deliverables: [
      "Código fuente",
      "Base de datos de ejercicios",
      "Manual de usuario",
      "Documentación"
    ]
  },
  {
    id: 9,
    name: "Branding & Identidad Visual",
    slug: "branding-identidad-visual",
    category: "branding",
    description: "Desarrollo completo de identidad visual corporativa: logo, paleta de colores, tipografía, manual de marca y aplicaciones en diferentes medios.",
    shortDescription: "Identidad visual completa con logo y manual de marca",
    price: 249990,
    currency: "CLP",
    duration: "2-3 semanas",
    image: "identidad_visual.jpg",
    features: [
      "Diseño de logotipo (3 propuestas)",
      "Paleta de colores corporativa",
      "Selección tipográfica",
      "Manual de identidad visual",
      "Papelería corporativa",
      "Plantillas para redes sociales",
      "Mockups profesionales",
      "Archivos en múltiples formatos",
      "5 revisiones incluidas"
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    inStock: true,
    featured: false,
    deliverables: [
      "Logo en vectores (AI, EPS, SVG)",
      "Manual de marca PDF",
      "Papelería diseñada",
      "Templates redes sociales",
      "Mockups"
    ]
  },
  {
    id: 10,
    name: "Consultoría Técnica",
    slug: "consultoria-tecnica",
    category: "consultoria",
    description: "Sesiones de consultoría técnica personalizada para arquitectura de software, optimización de código, revisión de seguridad y mejores prácticas.",
    shortDescription: "Consultoría técnica personalizada por hora",
    price: 49990,
    currency: "CLP",
    duration: "1 hora",
    image: "diseno-web.png",
    features: [
      "Revisión de código",
      "Arquitectura de software",
      "Optimización de performance",
      "Auditoría de seguridad",
      "Mejores prácticas",
      "Documentación técnica",
      "Sesión en vivo o grabada",
      "Informe detallado post-sesión"
    ],
    technologies: ["Múltiples según necesidad"],
    inStock: true,
    featured: false,
    deliverables: [
      "Informe de consultoría",
      "Recomendaciones documentadas",
      "Grabación de sesión (opcional)"
    ]
  }
];

export default services;