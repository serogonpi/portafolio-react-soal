// src/pages/Services.jsx
import React from 'react';
import ServiceList from '../components/services/ServiceList';
import '../assets/css/styles.css';

function Services() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Soluciones profesionales de desarrollo y diseño para tu negocio</p>
        </div>
      </section>

      <section className="services-section">
        <ServiceList showFilters={true} />
      </section>
    </main>
  );
}

export default Services;