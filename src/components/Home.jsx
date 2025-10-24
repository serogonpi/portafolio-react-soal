import React from "react";
import '../assets/css/styles.css'

function Home() {
    return (
        <main>
            <section id="inicio" className="hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="hero-title display-3 fw-bold mb-4">
                                Somos Desarrolladores Web
                            </h2>
                            <p className="hero-subtitle lead fs-4 mb-5 opacity-90">
                                Creamos sitios web modernos y funcionales que ayudan
                                a las empresas a crecer en el mundo digital.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <a href="#proyectos" className="btn btn-light btn-lg px-4 py-3 fw-bold">
                                    Ver Proyectos
                                </a>
                                <a href="#contacto" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                                    Contactar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="acerca" className="about py-5">
                <div className="container">
                    <h2 className="section-title text-center display-5 fw-bold mb-5">
                        Acerca de Nosotros
                    </h2>

                    <div className="row g-5 align-items-start">
                        {/* Columna de texto - 8 columnas en desktop */}
                        <div className="col-lg-8">
                            <div className="about-text">
                                <p className="fs-5 lh-lg mb-4">
                                    Somos desarrolladores web con más de 3 años de experiencia en el diseño y desarrollo
                                    de sitios modernos, funcionales y optimizados para todo tipo de dispositivos.
                                    Nos especializamos en <strong>HTML, CSS, JavaScript y React</strong>, creando interfaces
                                    dinámicas y de alto rendimiento que mejoran la experiencia del usuario.
                                </p>
                                <p className="fs-5 lh-lg mb-4">
                                    Nuestra pasión es transformar ideas en <em>experiencias digitales</em> que no solo
                                    se vean atractivas, sino que también aporten soluciones reales a los desafíos de
                                    usuarios y empresas. Valoramos la <strong>usabilidad</strong>, la
                                    <strong> accesibilidad</strong> y las <strong>buenas prácticas de desarrollo</strong>,
                                    asegurando productos escalables y de calidad profesional.
                                </p>
                                <p className="fs-5 lh-lg">
                                    Además, trabajamos con metodologías ágiles y un enfoque colaborativo, lo que nos permite
                                    adaptarnos rápidamente a las necesidades de cada proyecto y entregar resultados eficientes.
                                    Nuestro objetivo es ayudarte a potenciar tu presencia digital y llevar tu proyecto al
                                    siguiente nivel.
                                </p>
                            </div>
                        </div>

                        {/* Columna de stats - 4 columnas en desktop */}
                        <div className="col-lg-4">
                            <div className="d-flex flex-column gap-4">
                                <div className="stat text-center p-4 bg-white rounded-3 shadow">
                                    <h3 className="display-4 fw-bold text-success mb-2">25+</h3>
                                    <p className="text-secondary mb-0">Proyectos Completados</p>
                                </div>
                                <div className="stat text-center p-4 bg-white rounded-3 shadow">
                                    <h3 className="display-4 fw-bold text-success mb-2">3+</h3>
                                    <p className="text-secondary mb-0">Años de Experiencia</p>
                                </div>
                                <div className="stat text-center p-4 bg-white rounded-3 shadow">
                                    <h3 className="display-4 fw-bold text-success mb-2">15+</h3>
                                    <p className="text-secondary mb-0">Clientes Felices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="proyectos" className="projects py-5">
                <div className="container">
                    <h2 className="section-title text-center display-5 fw-bold mb-5">
                        Nuestros Proyectos
                    </h2>

                    <div className="row g-4">
                        {/* Proyecto 1 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card project-card h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="project-image">
                                    <img
                                        className="card-img-top"
                                        src={require('../assets/images/ecommerce.jpeg')}
                                        alt="Imagen de Ecommerce"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title h4 mb-3 text-dark">E-commerce</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Tienda online completa con carrito de compras y pasarela de pago.
                                    </p>
                                    <div className="project-tech d-flex flex-wrap gap-2 mt-auto">
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            HTML
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            CSS
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            JavaScript
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Proyecto 2 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card project-card h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="project-image">
                                    <img
                                        className="card-img-top"
                                        src={require('../assets/images/dashboard.png')}
                                        alt="Imagen de Dashboard"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title h4 mb-3 text-dark">Dashboard</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Panel de control con gráficos y estadísticas en tiempo real.
                                    </p>
                                    <div className="project-tech d-flex flex-wrap gap-2 mt-auto">
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            React
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            CSS
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            API
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Proyecto 3 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card project-card h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="project-image">
                                    <img
                                        className="card-img-top"
                                        src={require('../assets/images/portal_corporativo.png')}
                                        alt="Imagen de Portal Corporativo"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title h4 mb-3 text-dark">Tienda Online Premium</h3>
                                    <p className="card-text text-secondary mb-4">
                                        Sitio web empresarial con panel administrativo, gestión de contenidos
                                        y sistema de citas online.
                                    </p>
                                    <div className="project-tech d-flex flex-wrap gap-2 mt-auto">
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            HTML
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            CSS
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            PHP
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;