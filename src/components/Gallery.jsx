import React from "react";
import '../assets/css/styles.css'
import '../assets/css/gallery.css'

function Gallery() {
    return (
        <main>
            <section id="inicio" className="hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="hero-title display-3 fw-bold mb-4">Nuestra Galería</h2>
                            <p className="hero-subtitle lead fs-4 opacity-90">
                                Explora nuestros trabajos más destacados y descubre la calidad de nuestros
                                proyectos digitales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery py-5">
                <div className="container">
                    <div className="row g-4">
                        {/* Item 1 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/ecommerce.jpeg')} 
                                        alt="Imagen de Ecommerce"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">Tienda Online Premium</h3>
                                    <p className="card-text text-secondary mb-3">
                                        E-commerce moderno con diseño responsive, carrito de compras avanzado 
                                        y pasarela de pago integrada.
                                    </p>
                                    <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                        Diseño Web
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/portal_corporativo.png')} 
                                        alt="imagen de portal corporativo"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">Portal Corporativo</h3>
                                    <p className="card-text text-secondary mb-3">
                                        Sitio web empresarial con panel administrativo, gestión de contenidos 
                                        y sistema de citas online.
                                    </p>
                                    <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                        Diseño Web
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/fitness-app.png')} 
                                        alt="Imagen de Aplicación fitness"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">Aplicación de Fitness</h3>
                                    <p className="card-text text-secondary mb-3">
                                        App móvil para seguimiento de ejercicios, rutinas personalizadas 
                                        y estadísticas de progreso.
                                    </p>
                                    <span className="badge bg-primary-subtle text-primary-emphasis px-3 py-2 rounded-pill">
                                        Apps Móviles
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/delivery_app.png')} 
                                        alt="imagen de una app de delivery"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">App de Delivery</h3>
                                    <p className="card-text text-secondary mb-3">
                                        Aplicación de pedidos online con tracking en tiempo real y múltiples 
                                        métodos de pago.
                                    </p>
                                    <span className="badge bg-primary-subtle text-primary-emphasis px-3 py-2 rounded-pill">
                                        Apps Móviles
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/identidad_visual.jpg')} 
                                        alt="imagen de identidad visual"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">Identidad Corporativa</h3>
                                    <p className="card-text text-secondary mb-3">
                                        Desarrollo completo de marca: logo, colores, tipografías y manual 
                                        de identidad visual.
                                    </p>
                                    <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2 rounded-pill">
                                        Branding
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 6 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/branding_cafe_premium.jpg')} 
                                        alt="Imagen de logo de cafe"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">Branding Café Premium</h3>
                                    <p className="card-text text-secondary mb-3">
                                        Identidad visual completa para cafetería premium, incluyendo packaging 
                                        y material promocional.
                                    </p>
                                    <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2 rounded-pill">
                                        Branding
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 7 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/dashboard.png')} 
                                        alt="imagen de dashboard"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">Dashboard Analytics</h3>
                                    <p className="card-text text-secondary mb-3">
                                        Diseño UX/UI de dashboard para análisis de datos con gráficos interactivos 
                                        y métricas en tiempo real.
                                    </p>
                                    <span className="badge bg-info-subtle text-info-emphasis px-3 py-2 rounded-pill">
                                        UI/UX
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 8 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                                <div className="gallery-image position-relative">
                                    <img 
                                        className="card-img-top" 
                                        src={require('../assets/images/banking_app.png')} 
                                        alt="imagen de app bancaria"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-bold mb-3">App Bancaria</h3>
                                    <p className="card-text text-secondary mb-3">
                                        Rediseño UX de aplicación bancaria enfocado en usabilidad y experiencia 
                                        de usuario intuitiva.
                                    </p>
                                    <span className="badge bg-info-subtle text-info-emphasis px-3 py-2 rounded-pill">
                                        UI/UX
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Gallery;