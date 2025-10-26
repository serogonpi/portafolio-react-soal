/**
 * PRUEBA 4: Renderizado de la Sección de Proyectos
 * Verifica que la sección de proyectos se renderice con las cards correctas
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Projects Section', () => {
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

  it('debe renderizar la sección de proyectos', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    setTimeout(() => {
      const projectsSection = container.querySelector('#proyectos');
      expect(projectsSection).toBeDefined();
      done();
    }, 100);
  });

  it('debe mostrar el título de la sección', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    setTimeout(() => {
      const title = container.querySelector('.section-title');
      expect(title).toBeDefined();
      expect(title.textContent).toContain('Proyectos');
      done();
    }, 100);
  });

  it('debe renderizar al menos 3 project cards', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    setTimeout(() => {
      const projectCards = container.querySelectorAll('.project-card');
      expect(projectCards.length).toBeGreaterThanOrEqual(3);
      done();
    }, 100);
  });

  it('cada project card debe tener un título', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    setTimeout(() => {
      const projectCards = container.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        const title = card.querySelector('.card-title');
        expect(title).toBeDefined();
        expect(title.textContent.length).toBeGreaterThan(0);
      });
      done();
    }, 100);
  });

  it('cada project card debe tener badges de tecnologías', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    setTimeout(() => {
      const projectCards = container.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        const badges = card.querySelectorAll('.badge');
        expect(badges.length).toBeGreaterThan(0);
      });
      done();
    }, 100);
  });
});