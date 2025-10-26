/**
 * PRUEBA 5: Renderizado del componente Footer
 * Verifica que el Footer se renderice correctamente
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Footer Component', () => {
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

  it('debe renderizar el Footer correctamente', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    setTimeout(() => {
      const footer = container.querySelector('.footer');
      expect(footer).toBeDefined();
      done();
    }, 100);
  });

  it('debe mostrar el título del portafolio', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    setTimeout(() => {
      const title = container.querySelector('h3');
      expect(title).toBeDefined();
      expect(title.textContent).toContain('Nuestro Portafolio');
      done();
    }, 100);
  });

  it('debe contener links de navegación', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    setTimeout(() => {
      const links = container.querySelectorAll('a');
      expect(links.length).toBeGreaterThan(0);
      done();
    }, 100);
  });

  it('debe mostrar el copyright', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    setTimeout(() => {
      const copyright = container.textContent;
      expect(copyright).toContain('2025');
      expect(copyright).toContain('derechos reservados');
      done();
    }, 100);
  });

  it('debe tener la clase de Bootstrap', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    setTimeout(() => {
      const footer = container.querySelector('.footer');
      expect(footer.classList.contains('bg-dark')).toBe(true);
      done();
    }, 100);
  });
});