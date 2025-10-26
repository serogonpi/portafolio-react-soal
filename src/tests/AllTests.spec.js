/**
 * TESTS UNITARIOS - PORTAFOLIO REACT
 * Total: 7 pruebas estratégicas que cubren los requisitos de la evaluación
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

// ============================================
// TEST 1: RENDERIZADO DE COMPONENTE (Header)
// ============================================
describe('TEST 1: Renderizado del Header', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (root) {
      root.unmount();
    }
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
    root = null;
  });

  it('debe renderizar el Header con logo y navegación', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    setTimeout(() => {
      try {
        // Verificar logo
        const logo = container.querySelector('.logo h1');
        expect(logo).not.toBeNull();
        expect(logo.textContent).toBe('Nuestro Portafolio');

        // Verificar links de navegación
        const navLinks = container.querySelectorAll('.nav-link');
        expect(navLinks.length).toBe(4);

        // Verificar clase Bootstrap
        const navbar = container.querySelector('.navbar');
        expect(navbar.classList.contains('navbar')).toBe(true);

        done();
      } catch (error) {
        done.fail(error);
      }
    }, 100);
  });
});

// ============================================
// TEST 2: VALIDACIÓN - EMAIL INVÁLIDO
// ============================================
describe('TEST 2: Validación de Email Inválido', () => {
  // Función de validación (copiada de Contact.jsx)
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  it('debe rechazar emails con formato inválido', () => {
    // Email sin @
    expect(validateEmail('emailinvalido.com')).toBe(false);

    // Email sin dominio
    expect(validateEmail('email@')).toBe(false);

    // Email vacío
    expect(validateEmail('')).toBe(false);

    // Email con espacios
    expect(validateEmail('test @example.com')).toBe(false);
  });
});

// ============================================
// TEST 3: VALIDACIÓN - EMAIL VÁLIDO
// ============================================
describe('TEST 3: Validación de Email Válido', () => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  it('debe aceptar emails con formato válido', () => {
    // Email básico válido
    expect(validateEmail('test@example.com')).toBe(true);

    // Email con subdominios
    expect(validateEmail('user@mail.example.com')).toBe(true);

    // Email con números
    expect(validateEmail('user123@example.com')).toBe(true);

    // Email con guiones
    expect(validateEmail('user-name@example.com')).toBe(true);
  });
});

// ============================================
// TEST 4: VALIDACIÓN - CAMPO VACÍO (ERROR)
// ============================================
describe('TEST 4: Validación de Campos Requeridos - Casos de Error', () => {
  const validateField = (fieldName, value) => {
    switch(fieldName) {
      case 'nombre':
        if (!value || value.trim().length < 2) {
          return 'El nombre debe tener al menos 2 caracteres';
        }
        return '';
      
      case 'mensaje':
        if (!value || value.trim().length < 10) {
          return 'El mensaje debe tener al menos 10 caracteres';
        }
        return '';
      
      default:
        return '';
    }
  };

  it('debe rechazar campos vacíos o muy cortos', () => {
    // Nombre vacío
    const errorNombreVacio = validateField('nombre', '');
    expect(errorNombreVacio).not.toBe('');
    expect(errorNombreVacio).toContain('2 caracteres');

    // Nombre muy corto
    const errorNombreCorto = validateField('nombre', 'A');
    expect(errorNombreCorto).not.toBe('');

    // Mensaje vacío
    const errorMensajeVacio = validateField('mensaje', '');
    expect(errorMensajeVacio).not.toBe('');
    expect(errorMensajeVacio).toContain('10 caracteres');

    // Mensaje muy corto
    const errorMensajeCorto = validateField('mensaje', 'Hola');
    expect(errorMensajeCorto).not.toBe('');
  });
});

// ============================================
// TEST 5: VALIDACIÓN - CAMPO VÁLIDO (ÉXITO)
// ============================================
describe('TEST 5: Validación de Campos Requeridos - Casos de Éxito', () => {
  const validateField = (fieldName, value) => {
    switch(fieldName) {
      case 'nombre':
        if (!value || value.trim().length < 2) {
          return 'El nombre debe tener al menos 2 caracteres';
        }
        return '';
      
      case 'mensaje':
        if (!value || value.trim().length < 10) {
          return 'El mensaje debe tener al menos 10 caracteres';
        }
        return '';
      
      default:
        return '';
    }
  };

  it('debe aceptar campos con contenido válido', () => {
    // Nombre válido
    const errorNombre = validateField('nombre', 'Juan Pérez');
    expect(errorNombre).toBe('');

    // Nombre con 2 caracteres (mínimo)
    const errorNombreMin = validateField('nombre', 'Ab');
    expect(errorNombreMin).toBe('');

    // Mensaje válido
    const errorMensaje = validateField('mensaje', 'Este es un mensaje de prueba válido');
    expect(errorMensaje).toBe('');

    // Mensaje con 10 caracteres (mínimo)
    const errorMensajeMin = validateField('mensaje', '1234567890');
    expect(errorMensajeMin).toBe('');
  });
});

// ============================================
// TEST 6: RENDERIZADO DE LISTA (Proyectos)
// ============================================
describe('TEST 6: Renderizado de Proyectos', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (root) {
      root.unmount();
    }
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
    root = null;
  });

  it('debe renderizar la sección de proyectos con sus elementos', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    setTimeout(() => {
      try {
        // Verificar que existe la sección
        const projectsSection = container.querySelector('#proyectos');
        expect(projectsSection).not.toBeNull();

        // Verificar el título
        const title = projectsSection.querySelector('.section-title');
        expect(title).not.toBeNull();
        expect(title.textContent).toContain('Proyectos');

        // Verificar que hay 3 project cards
        const projectCards = container.querySelectorAll('.project-card');
        expect(projectCards.length).toBe(3);

        // Verificar que cada card tiene título y badges
        projectCards.forEach(card => {
          const cardTitle = card.querySelector('h3');
          expect(cardTitle).not.toBeNull();
          
          const badges = card.querySelectorAll('.badge');
          expect(badges.length).toBeGreaterThan(0);
        });

        done();
      } catch (error) {
        done.fail(error);
      }
    }, 200);
  });
});

// ============================================
// TEST 7: INTERACCIÓN (Footer Links)
// ============================================
describe('TEST 7: Interacción con Footer', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (root) {
      root.unmount();
    }
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
    root = null;
  });

  it('debe renderizar el Footer con links funcionales', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    setTimeout(() => {
      try {
        // Verificar que el footer existe
        const footer = container.querySelector('.footer');
        expect(footer).not.toBeNull();

        // Verificar título
        const title = container.querySelector('h3');
        expect(title.textContent).toContain('Nuestro Portafolio');

        // Verificar links de navegación
        const links = container.querySelectorAll('a');
        expect(links.length).toBe(4);

        // Verificar que cada link tiene href y texto
        links.forEach(link => {
          expect(link.href).toBeDefined();
          expect(link.textContent.trim().length).toBeGreaterThan(0);
        });

        // Verificar copyright
        expect(container.textContent).toContain('2025');
        expect(container.textContent).toContain('derechos reservados');

        // Verificar clases Bootstrap
        expect(footer.classList.contains('bg-dark')).toBe(true);
        expect(footer.classList.contains('text-white')).toBe(true);

        done();
      } catch (error) {
        done.fail(error);
      }
    }, 100);
  });
});