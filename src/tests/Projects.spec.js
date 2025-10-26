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
      expect(projectsSection).not.toBeNull();
      expect(projectsSection).toBeDefined();
      done();
    }, 200); // Aumentado a 200ms
  });

  it('debe mostrar el título de la sección', (done) => {
    root = ReactDOM.createRoot(container);
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    setTimeout(() => {
      const projectsSection = container.querySelector('#proyectos');
      expect(projectsSection).not.toBeNull();
      
      // Buscar el título dentro de la sección de proyectos
      const title = projectsSection.querySelector('.section-title');
      expect(title).not.toBeNull();
      expect(title.textContent).toContain('Proyectos');
      done();
    }, 200);
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
    }, 200);
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
      expect(projectCards.length).toBeGreaterThan(0);
      
      projectCards.forEach(card => {
        const title = card.querySelector('h3');
        expect(title).not.toBeNull();
        expect(title.textContent.length).toBeGreaterThan(0);
      });
      done();
    }, 200);
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
      expect(projectCards.length).toBeGreaterThan(0);
      
      projectCards.forEach(card => {
        const badges = card.querySelectorAll('.badge');
        expect(badges.length).toBeGreaterThan(0);
      });
      done();
    }, 200);
  });
});