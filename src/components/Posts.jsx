import React from "react";
import '../assets/css/styles.css'
import '../assets/css/posts-page.css'

function Posts() {
    return (
        <main>
            <section id="inicio" className="hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="hero-title display-3 fw-bold mb-4">Nuestro Blog</h1>
                            <p className="hero-subtitle lead fs-4 opacity-90">
                                Compartimos conocimientos, experiencias y las últimas tendencias en desarrollo web
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="posts" className="posts-section py-5">
                <div className="container">
                    <div className="row g-4 mb-5">
                        {/* Post Destacado - Ocupa toda la fila */}
                        <div className="col-12">
                            <article className="card featured-post shadow border-0 rounded-4 overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img 
                                            className="img-fluid w-100 h-100" 
                                            src={require('../assets/images/diseno-web.png')} 
                                            alt="Imagen de diseño web"
                                            style={{ objectFit: 'cover', minHeight: '400px' }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body p-4 p-lg-5 d-flex flex-column h-100">
                                            <div className="post-date text-success fw-bold mb-3">
                                                15 de Agosto, 2025
                                            </div>
                                            <h2 className="card-title display-6 fw-bold mb-3">
                                                Las Tendencias de Diseño Web para 2025
                                            </h2>
                                            <div className="post-meta d-flex align-items-center gap-3 mb-4 text-muted">
                                                <span className="text-success fw-semibold">Por Sebastián González</span>
                                                <span>•</span>
                                                <span>8 min lectura</span>
                                            </div>
                                            <p className="card-text text-secondary lh-lg mb-4">
                                                Descubre las tendencias más importantes que están marcando el diseño web este año.
                                                Desde el minimalismo hasta las animaciones interactivas, exploramos lo que realmente
                                                está funcionando en 2025.
                                            </p>
                                            <div className="d-flex flex-wrap gap-2 mb-4">
                                                <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                                    Diseño
                                                </span>
                                                <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                                    Tendencias
                                                </span>
                                                <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                                    UI/UX
                                                </span>
                                            </div>
                                            <a href="#featured-article" className="btn btn-success mt-auto px-4 py-2">
                                                Leer más
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Post Regular 1 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <article className="card post-card h-100 shadow border-0 rounded-4 overflow-hidden">
                                <img 
                                    className="card-img-top" 
                                    src={require('../assets/images/react.png')} 
                                    alt="Logo de React"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <div className="post-date text-success fw-bold mb-2">
                                        10 de Marzo, 2025
                                    </div>
                                    <h3 className="card-title h5 fw-bold mb-3">
                                        Optimización de Rendimiento en React
                                    </h3>
                                    <div className="post-meta d-flex align-items-center gap-2 mb-3 small text-muted">
                                        <span className="text-success fw-semibold">Por Oscar Flores</span>
                                        <span>•</span>
                                        <span>6 min lectura</span>
                                    </div>
                                    <p className="card-text text-secondary mb-4">
                                        Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React
                                        y brindar una mejor experiencia de usuario.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            React
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            Rendimiento
                                        </span>
                                    </div>
                                    <button className="btn btn-success mt-auto w-100">Leer más</button>
                                </div>
                            </article>
                        </div>

                        {/* Post Regular 2 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <article className="card post-card h-100 shadow border-0 rounded-4 overflow-hidden">
                                <img 
                                    className="card-img-top" 
                                    src={require('../assets/images/gridvsflexbox.jpg')}
                                    alt="Imagen de Grid vs Flexbox"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <div className="post-date text-success fw-bold mb-2">
                                        5 de Marzo, 2025
                                    </div>
                                    <h3 className="card-title h5 fw-bold mb-3">
                                        CSS Grid vs Flexbox: ¿Cuándo usar cada uno?
                                    </h3>
                                    <div className="post-meta d-flex align-items-center gap-2 mb-3 small text-muted">
                                        <span className="text-success fw-semibold">Por Andres Ibañez</span>
                                        <span>•</span>
                                        <span>4 min lectura</span>
                                    </div>
                                    <p className="card-text text-secondary mb-4">
                                        Una guía completa para entender las diferencias entre CSS Grid y Flexbox,
                                        y saber cuándo es mejor usar cada tecnología.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            CSS
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            Layout
                                        </span>
                                    </div>
                                    <button className="btn btn-success mt-auto w-100">Leer más</button>
                                </div>
                            </article>
                        </div>

                        {/* Post Regular 3 */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <article className="card post-card h-100 shadow border-0 rounded-4 overflow-hidden">
                                <img 
                                    className="card-img-top" 
                                    src={require('../assets/images/Typescript_logo.png')} 
                                    alt="Logo de Typescript"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <div className="post-date text-success fw-bold mb-2">
                                        1 de Marzo, 2025
                                    </div>
                                    <h3 className="card-title h5 fw-bold mb-3">
                                        Introducción a TypeScript para JavaScript
                                    </h3>
                                    <div className="post-meta d-flex align-items-center gap-2 mb-3 small text-muted">
                                        <span className="text-success fw-semibold">Por Leroy Rodriguez</span>
                                        <span>•</span>
                                        <span>5 min lectura</span>
                                    </div>
                                    <p className="card-text text-secondary mb-4">
                                        Si vienes de JavaScript y quieres dar el salto a TypeScript, esta guía
                                        te ayudará a entender los conceptos básicos.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            TypeScript
                                        </span>
                                        <span className="badge bg-success-subtle text-success-emphasis px-3 py-2 rounded-pill">
                                            JavaScript
                                        </span>
                                    </div>
                                    <button className="btn btn-success mt-auto w-100">Leer más</button>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Artículo Completo */}
                    <article id="featured-article" className="card shadow border-0 rounded-4 p-4 p-lg-5">
                        <header className="text-center mb-5 pb-4 border-bottom">
                            <h1 className="display-4 fw-bold mb-4">
                                Las Tendencias de Diseño Web para 2025
                            </h1>
                            <div className="text-muted">
                                Por <strong>Sebastián González</strong> • 15 de Agosto, 2025 • 8 minutos de lectura
                            </div>
                        </header>

                        <div className="article-content fs-5 lh-lg">
                            <p>
                                El mundo del diseño web está en constante evolución, y 2025 no es la excepción.
                                Este año hemos visto emerger tendencias fascinantes que no solo mejoran la
                                estética de los sitios web, sino que también elevan significativamente la
                                experiencia del usuario.
                            </p>

                            <h2 className="h3 fw-bold mt-5 mb-4">Minimalismo Funcional</h2>
                            <p>
                                El minimalismo sigue siendo una tendencia dominante, pero en 2025 ha evolucionado
                                hacia lo que llamamos "minimalismo funcional". Ya no se trata solo de espacios
                                en blanco y elementos simples, sino de crear interfaces que sean visualmente
                                limpias pero funcionalmente ricas.
                            </p>

                            <blockquote className="border-start border-5 border-success bg-light rounded p-4 my-4 fst-italic">
                                <p className="mb-3 fs-4">
                                    "El buen diseño es tan poco diseño como sea posible, pero debe resolver todos
                                    los problemas del usuario de manera elegante y eficiente."
                                </p>
                                <cite className="d-block text-success fw-bold not-italic">
                                    — Dieter Rams, diseñador industrial
                                </cite>
                            </blockquote>

                            <h2 className="h3 fw-bold mt-5 mb-4">Colores Vibrantes y Gradientes</h2>
                            <p>
                                Contrario a la paleta monocromática que dominó años anteriores, 2025 ha traído
                                consigo una explosión de colores vibrantes. Los gradientes han regresado con
                                fuerza, pero ahora son más sofisticados y sutiles.
                            </p>

                            <h3 className="h4 fw-bold mt-4 mb-3">Implementación Práctica</h3>
                            <p>
                                Para implementar estas tendencias en tus proyectos, es importante entender los
                                principios básicos del diseño. Si quieres profundizar más en estos conceptos,
                                te recomiendo visitar{' '}
                                <a href="https://www.smashingmagazine.com" target="_blank" rel="noreferrer" 
                                   className="text-success text-decoration-underline fw-semibold">
                                    Smashing Magazine
                                </a>,
                                una excelente fuente de información para diseñadores web.
                            </p>

                            <p>
                                Las animaciones micro-interactivas también están ganando terreno. Estos pequeños
                                detalles pueden marcar la diferencia entre una experiencia de usuario buena y
                                una excepcional. Desde hover effects sutiles hasta transiciones fluidas entre
                                estados, cada detalle cuenta.
                            </p>

                            <h2 className="h3 fw-bold mt-5 mb-4">Accesibilidad Como Prioridad</h2>
                            <p>
                                Una de las tendencias más importantes de 2025 es el enfoque renovado en la
                                accesibilidad web. Ya no es suficiente crear sitios que se vean bien; deben
                                ser accesibles para todos los usuarios, independientemente de sus habilidades
                                o limitaciones.
                            </p>

                            <p>
                                En conclusión, las tendencias de diseño web de 2025 nos muestran un camino
                                hacia interfaces más humanas, accesibles y funcionalmente superiores. El
                                futuro del diseño web no solo se trata de cómo se ve, sino de cómo se siente
                                y funciona para cada usuario.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Posts;