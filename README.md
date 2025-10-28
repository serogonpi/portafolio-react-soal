# Portafolio Web - Desarrolladores SOAL

Portafolio web profesional desarrollado con React que muestra proyectos, blog técnico y formulario de contacto. Proyecto creado como parte de la Evaluación Parcial 2 de Desarrollo Fullstack II (DSY1104) - Migración de HTML/CSS/JS vanilla a React con testing.

---

## 🚀 Demo en Vivo

- **Vercel (Producción):** [https://portafolio-react-soal.vercel.app/](https://portafolio-react-soal.vercel.app/)
- **GitHub Repository:** [https://github.com/serogonpi/portafolio-react-soal](https://github.com/serogonpi/portafolio-react-soal)

---

## ✨ Funcionalidades Principales

### 🏠 **Página Principal (Home)**
- Hero section con animación de gradiente
- Sección "Acerca de Nosotros" con estadísticas animadas
- Contadores dinámicos (25+ proyectos, 3+ años experiencia, 15+ clientes)
- Muestra de 3 proyectos destacados con tecnologías utilizadas
- Diseño 100% responsivo (mobile, tablet, desktop)

### 🖼️ **Galería de Proyectos**
- Sistema de **filtrado dinámico** por categorías:
  - Todos (8 proyectos)
  - Diseño Web (2 proyectos)
  - Apps Móviles (2 proyectos)
  - Branding (2 proyectos)
  - UI/UX (2 proyectos)
- Contador de proyectos filtrados en tiempo real
- Cards con hover effects y badges de categoría
- Grid responsivo que adapta columnas según dispositivo

### 📝 **Blog (Posts)**
- Post destacado (featured) con layout especial
- 3 posts regulares con imágenes y tags
- Artículo completo expandible
- Sistema de metadata (autor, fecha, tiempo de lectura)
- Tags categorizados por temática

### 📧 **Formulario de Contacto**
- **Validación en tiempo real** de todos los campos:
  - Nombre (requerido, min 2 caracteres)
  - Email (requerido, formato válido con regex)
  - Teléfono (opcional, formato validado)
  - Tipo de proyecto (select requerido)
  - Presupuesto (select opcional)
  - Asunto (requerido, min 2 caracteres)
  - Mensaje (requerido, min 10 caracteres)
  - Checkbox de términos (requerido)
- Feedback visual de errores con Bootstrap
- Scroll automático al primer error
- Estado de envío (botón deshabilitado durante submit)
- Sección de información de contacto
- Links a redes sociales
- Preguntas frecuentes (FAQ)

### 🧭 **Navegación**
- React Router para navegación SPA
- Header fixed con menú responsivo
- Indicador visual de página activa
- Menú hamburguesa en mobile con Bootstrap
- Footer con links y copyright

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.2.0 | Framework principal con Hooks (useState, useEffect) |
| **React Router** | 7.9.4   | Navegación SPA entre páginas |
| **Bootstrap** | 5.3.0 | Sistema de grillas, componentes y diseño responsivo |
| **CSS3** | - | Estilos custom, animaciones y gradientes |

### **Testing**
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Jasmine** | 5.1.0 | Framework de testing unitario |
| **Karma** | 6.4.4 | Test runner con ChromeHeadless |
| **Karma Coverage** | 2.2.1 | Generación de reportes de cobertura |

### **Pasos de Instalación**
```bash
# 1. Clonar el repositorio
git clone https://github.com/serogonpi/portafolio-react-soal
cd portafolio-react-soal

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start
# Abre http://localhost:3000 en tu navegador

# 4. Ejecutar tests
npm test

# 5. Ver cobertura de tests
npm run test:coverage
# Abre coverage/html/index.html en tu navegador
```

---

## 🧪 Testing

### **Cobertura Actual**
```
========================= Coverage summary =========================
Statements   : 100% ( 6/6 )
Branches     : 50% ( 1/2 )
Functions    : 100% ( 3/3 )
Lines        : 100% ( 4/4 )
====================================================================
```

### **Tests Implementados (7)**

| # | Test | Descripción | Componente |
|---|------|-------------|------------|
| 1 | Renderizado del Header | Verifica logo, navegación y clases Bootstrap | Header.jsx |
| 2 | Validación Email Inválido | Rechaza emails sin @, sin dominio, vacíos o con espacios | Contact.jsx |
| 3 | Validación Email Válido | Acepta emails con formato correcto | Contact.jsx |
| 4 | Validación Campos Vacíos | Rechaza nombre y mensaje menores al mínimo | Contact.jsx |
| 5 | Validación Campos Válidos | Acepta campos con contenido adecuado | Contact.jsx |
| 6 | Renderizado de Proyectos | Verifica sección, título y 3 project cards | Home.jsx |
| 7 | Interacción con Footer | Verifica renderizado de links y copyright | Footer.jsx |

### **Comandos de Testing**
```bash
# Ejecutar tests una vez
npm test

# Generar reporte de cobertura
npm run test:coverage
```

---

## 📁 Estructura del Proyecto
```
portafolio-react-soal/
├── public/
│   ├── index.html                 # HTML template
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── styles.css         # Estilos globales
│   │   │   ├── contacto.css       # Estilos de contacto
│   │   │   ├── gallery.css        # Estilos de galería
│   │   │   └── posts-page.css     # Estilos de posts
│   │   └── images/                # Imágenes del proyecto
│   ├── components/
│   │   ├── Header.jsx             # Navegación principal
│   │   ├── Footer.jsx             # Pie de página
│   │   ├── Home.jsx               # Página principal
│   │   ├── Gallery.jsx            # Galería con filtros
│   │   ├── Posts.jsx              # Blog de posts
│   │   └── Contact.jsx            # Formulario de contacto
│   ├── tests/
│   │   └── AllTests.spec.js       # Suite de 7 tests
│   ├── App.js                     # Componente raíz con Router
│   ├── index.js                   # Entry point
│   └── reportWebVitals.js         # Performance metrics
├── karma.conf.js                  # Configuración de Karma
├── package.json                   # Dependencies y scripts
├── vercel.json                    # Configuración de Vercel
└── README.md                      # Este archivo
```

---

## 🎨 Componentes React

### **Arquitectura de Componentes**
```
App (raíz - React Router)
├── Header (state: isMenuOpen)
│   └── Links de navegación
├── Routes
│   ├── Home (state: stats)
│   │   └── StatCard (props: value, label, suffix) ← REUTILIZABLE
│   ├── Gallery (state: selectedCategory)
│   │   └── ProjectCard (props: project) ← REUTILIZABLE
│   ├── Posts (presentacional)
│   └── Contact (state: formData, errors, isSubmitting)
└── Footer (estático)
```

### **Tabla de Componentes (8 totales)**

| Componente | Props | State | Descripción | Tipo |
|------------|-------|-------|-------------|------|
| **App** | - | - | Raíz con Router | Container |
| **Header** | - | `isMenuOpen` | Navbar con menú mobile y links activos | Container |
| **Footer** | - | - | Footer estático con links | Presentacional |
| **Home** | - | `stats` | Página principal con contadores animados | Container |
| **StatCard** | `value`, `label`, `suffix` | - | Componente reutilizable para estadísticas | Presentacional |
| **Gallery** | - | `selectedCategory` | Galería con filtro de categorías | Container |
| **ProjectCard** | `project` | - | Componente reutilizable para proyectos | Presentacional |
| **Posts** | - | - | Blog de artículos técnicos | Presentacional |
| **Contact** | - | `formData`, `errors`, `isSubmitting` | Formulario con validación completa | Container |

---

## 🎯 Características Técnicas

### **Hooks de React Utilizados**
```javascript
// useState - Gestión de estado local
const [selectedCategory, setSelectedCategory] = useState('todos');
const [formData, setFormData] = useState({ nombre: '', email: '' });

// useEffect - Efectos secundarios (animaciones)
useEffect(() => {
  // Animar contadores de estadísticas
  const timer = setInterval(() => {
    setStats(prevStats => ({ ...prevStats, projects: progress }));
  }, interval);
  return () => clearInterval(timer); // Cleanup
}, []);

// useLocation - Detectar ruta actual (React Router)
const location = useLocation();
const isActive = (path) => location.pathname === path;
```

### **Validación de Formularios**

#### **Validaciones implementadas:**
- **Nombre:** Requerido, min 2 caracteres
- **Email:** Requerido, formato `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Teléfono:** Opcional, formato `/^[+]?[\d\s-]{8,}$/`
- **Mensaje:** Requerido, min 10 caracteres
- **Términos:** Checkbox obligatorio

#### **Flujo de validación:**
```javascript
handleChange() → Limpiar error en tiempo real
                       ↓
handleSubmit() → validateForm()
                       ↓
              ¿Hay errores? → SÍ → Mostrar + Scroll
                       ↓ NO
                Enviar datos
```

### **Diseño Responsivo (Bootstrap)**

| Breakpoint | Resolución | Columnas Gallery | Columnas Projects |
|------------|------------|------------------|-------------------|
| **Mobile** | < 768px | 1 columna (100%) | 1 columna (100%) |
| **Tablet** | ≥ 768px | 2 columnas (50%) | 2 columnas (50%) |
| **Desktop** | ≥ 992px | 3 columnas (33%) | 3 columnas (33%) |

---

### **Imagenes Mobile**
<img src="/src/assets/images/1.jpg" alt="Logo" width="250"/>
<img src="/src/assets/images/2.jpg" alt="Logo" width="250"/>
<img src="/src/assets/images/3.jpg" alt="Logo" width="250"/>
<img src="/src/assets/images/4.jpg" alt="Logo" width="250"/>
<img src="/src/assets/images/5.jpg" alt="Logo" width="250"/>
<img src="/src/assets/images/6.jpg" alt="Logo" width="250"/>

## 👥 Autores

### **Equipo de Desarrollo**

| Nombre | GitHub |
|--------|--------|
| **[Sebastián González]** | [@serogonpi](https://github.com/serogonpi) |


## 📄 Licencia

Este proyecto fue creado con fines académicos para la asignatura Desarrollo Fullstack II.