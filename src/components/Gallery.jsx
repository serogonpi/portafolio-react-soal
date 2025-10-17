import React from "react";
import '../assets/css/styles.css'
import '../assets/css/gallery.css'

function Gallery() {
    return (
        <main>
        <section id="inicio" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h2 className="hero-title">Nuestra Galería</h2>
                    <p className="hero-subtitle">Explora nuestros trabajos más destacados y descubre la calidad de nuestros
                        proyectos digitales.</p>
                </div>
            </div>
        </section>

        <section className="gallery">
            <div className="container">
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <div className="gallery-image web-design">
                            <img className="img" src={require('../assets/images/ecommerce.jpeg')} alt="Imagen de Ecommerce" />
                        </div>
                        <div className="gallery-info">
                            <h3>Tienda Online Premium</h3>
                            <p>E-commerce moderno con diseño responsive, carrito de compras avanzado y pasarela de pago
                                integrada.</p>
                            <span className="gallery-category">Diseño Web</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="gallery-image web-design">
                            <img className="img" src={require('../assets/images/portal_corporativo.png')} alt="imagen de portal corporativo" />
                        </div>
                        <div className="gallery-info">
                            <h3>Portal Corporativo</h3>
                            <p>Sitio web empresarial con panel administrativo, gestión de contenidos y sistema de citas
                                online.</p>
                            <span className="gallery-category">Diseño Web</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="gallery-image mobile-app">
                            <img className="img" src={require('../assets/images/fitness-app.png')} alt="Imagen de Aplicación fitness" />
                        </div>
                        <div className="gallery-info">
                            <h3>Aplicación de Fitness</h3>
                            <p>App móvil para seguimiento de ejercicios, rutinas personalizadas y estadísticas de
                                progreso.</p>
                            <span className="gallery-category">Apps Móviles</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="gallery-image mobile-app">
                            <img className="img" src={require('../assets/images/delivery_app.png')} alt="imagen de una app de delivery" />
                        </div>
                        <div className="gallery-info">
                            <h3>App de Delivery</h3>
                            <p>Aplicación de pedidos online con tracking en tiempo real y múltiples métodos de pago.</p>
                            <span className="gallery-category">Apps Móviles</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="gallery-image branding">
                            <img className="img" src={require('../assets/images/identidad_visual.jpg')} alt="imagen de identidad visual" />
                        </div>
                        <div className="gallery-info">
                            <h3>Identidad Corporativa</h3>
                            <p>Desarrollo completo de marca: logo, colores, tipografías y manual de identidad visual.
                            </p>
                            <span className="gallery-category">Branding</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="gallery-image branding">
                            <img className="img" src={require('../assets/images/branding_cafe_premium.jpg')} alt="Imagen de logo de cafe" />
                        </div>
                        <div className="gallery-info">
                            <h3>Branding Café Premium</h3>
                            <p>Identidad visual completa para cafetería premium, incluyendo packaging y material
                                promocional.</p>
                            <span className="gallery-category">Branding</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="gallery-image ui-ux">
                            <img className="img" src={require('../assets/images/dashboard.png')} alt="imagen de dashboard" />
                        </div>
                        <div className="gallery-info">
                            <h3>Dashboard Analytics</h3>
                            <p>Diseño UX/UI de dashboard para análisis de datos con gráficos interactivos y métricas en
                                tiempo real.</p>
                            <span className="gallery-category">UI/UX</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <div className="gallery-image ui-ux">
                            <img className="img" src={require('../assets/images/banking_app.png')} alt="imagen de app bancaria" />
                        </div>
                        <div className="gallery-info">
                            <h3>App Bancaria</h3>
                            <p>Rediseño UX de aplicación bancaria enfocado en usabilidad y experiencia de usuario
                                intuitiva.</p>
                            <span className="gallery-category">UI/UX</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Gallery;