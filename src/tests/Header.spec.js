/**
 * PRUEBA 1: Renderizado del componente Header
 * Verifica que el Header se renderice correctamente con todos sus elementos
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  let container;
  let root;

  beforeEach(() => {
    // Crear un contenedor DOM para los tests
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Limpiar después de cada test
    if (root) {
      root.unmount();
    }
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
    root = null;
  });

  it('debe renderizar el Header correctamente con el logo', () => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    setTimeout(() => {
      const logo = container.querySelector('.logo h1');
      expect(logo).toBeDefined();
      expect(logo.textContent).toBe('Nuestro Portafolio');
    }, 100);
  });

  it('debe renderizar todos los links de navegación', () => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    setTimeout(() => {
      // Verificar que existen los 4 links principales
      const navLinks = container.querySelectorAll('.nav-link');
      expect(navLinks.length).toBeGreaterThanOrEqual(4);
      
      // Verificar textos de los links
      const linkTexts = Array.from(navLinks).map(link => link.textContent);
      expect(linkTexts).toContain('Inicio');
      expect(linkTexts).toContain('Posts');
      expect(linkTexts).toContain('Galería');
      expect(linkTexts).toContain('Contacto');
    }, 100);
  });

  it('debe tener la clase navbar de Bootstrap', () => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    setTimeout(() => {
      const navbar = container.querySelector('.navbar');
      expect(navbar).toBeDefined();
      expect(navbar.classList.contains('navbar')).toBe(true);
    }, 100);
  });
});