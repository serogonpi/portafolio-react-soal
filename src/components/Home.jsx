import React from "react";
import '../assets/css/styles.css'

function Home() {
    return (
        <main>
            <section id="inicio" className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h2 className="hero-title">Somos Desarrolladores Web</h2>
                        <p className="hero-subtitle">
                            Creamos sitios web modernos y funcionales que ayudan
                            a las empresas a crecer en el mundo digital.
                        </p>
                        <div className="hero-buttons">
                            <a href="#gallery" className="btn btn-primary">Ver Proyectos</a>
                            <a href="#contacto" className="btn btn-secondary">Contactar</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="acerca" className="about">
                <div className="container">
                    <h2 className="section-title">Acerca de Nosotros</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Somos desarrolladores web con más de 3 años de experiencia en el diseño y desarrollo
                                de sitios modernos, funcionales y optimizados para todo tipo de dispositivos.
                                Nos especializamos en <strong>HTML, CSS, JavaScript y React</strong>, creando interfaces
                                dinámicas y de alto rendimiento que mejoran la experiencia del usuario.
                            </p>
                            <p>
                                Nuestra pasión es transformar ideas en <em>experiencias digitales</em> que no solo
                                se vean atractivas, sino que también aporten soluciones reales a los desafíos de
                                usuarios y empresas. Valoramos la <strong>usabilidad</strong>, la
                                <strong>accesibilidad</strong>
                                y las <strong>buenas prácticas de desarrollo</strong>, asegurando productos escalables
                                y de calidad profesional.
                            </p>
                            <p>
                                Además, trabajamos con metodologías ágiles y un enfoque colaborativo, lo que nos permite
                                adaptarnos rápidamente a las necesidades de cada proyecto y entregar resultados eficientes.
                                Nuestro objetivo es ayudarte a potenciar tu presencia digital y llevar tu proyecto al
                                siguiente nivel.
                            </p>

                        </div>
                        <div className="about-stats">
                            <div className="stat">
                                <h3>25+</h3>
                                <p>Proyectos Completados</p>
                            </div>
                            <div className="stat">
                                <h3>3+</h3>
                                <p>Años de Experiencia</p>
                            </div>
                            <div className="stat">
                                <h3>15+</h3>
                                <p>Clientes Felices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="proyectos" className="projects">
                <div className="container">
                    <h2 className="section-title">Nuestros Proyectos</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img className="img" src={require('../assets/images/ecommerce.jpeg')} alt="Imagen de Ecommerce" />
                            </div>
                            <div className="project-info">
                                <h3>E-commerce</h3>
                                <p>Tienda online completa con carrito de compras y pasarela de pago.</p>
                                <div className="project-tech">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img className="img" src={require('../assets/images/dashboard.png')} alt="Imagen de Dashboard" />
                            </div>
                            <div className="project-info">
                                <h3>Dashboard</h3>
                                <p>Panel de control con gráficos y estadísticas en tiempo real.</p>
                                <div className="project-tech">
                                    <span>React</span>
                                    <span>CSS</span>
                                    <span>API</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src={require('../assets/images/portal_corporativo.png')} alt="Imagen de Portal Corporativo" />
                            </div>
                            <div className="project-info">
                                <h3>Tienda Online Premium</h3>
                                <p>Sitio web empresarial con panel administrativo, gestión de contenidos y sistema de citas
                                    online.</p>
                                <div className="project-tech">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>PHP</span>
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