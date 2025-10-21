import React from "react";
import '../assets/css/styles.css'
import '../assets/css/posts-page.css'

function Blog() {
    return (
        <main>
            <section id="inicio" className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Nuestro Blog</h1>
                        <p className="hero-subtitle">
                            Compartimos conocimientos, experiencias y las últimas tendencias en desarrollo web
                        </p>
                    </div>
                </div>
            </section>

            <section id="posts" className="posts-section">
                <div className="container">
                    <div className="posts-grid">
                        <article className="post-card featured-post">
                            <div className="post-image">
                                <img className="main-post-image" src={require('../assets/images/diseno-web.png')} alt="Imagen de diseño web" />
                            </div>
                            <div className="post-content">
                                <div className="post-date">15 de Agosto, 2025</div>
                                <h2 className="post-title">Las Tendencias de Diseño Web para 2025</h2>
                                <div className="post-meta">
                                    <span className="post-author">Por Sebastián González</span>
                                    <span>•</span>
                                    <span>8 min lectura</span>
                                </div>
                                <p className="post-excerpt">
                                    Descubre las tendencias más importantes que están marcando el diseño web este año.
                                    Desde el minimalismo hasta las animaciones interactivas, exploramos lo que realmente
                                    está funcionando en 2025.
                                </p>
                                <div className="post-tags">
                                    <span className="tag">Diseño</span>
                                    <span className="tag">Tendencias</span>
                                    <span className="tag">UI/UX</span>
                                </div>
                                <a href="#featured-article" className="btn btn-primary">Leer más</a>
                            </div>
                        </article>

                        <article className="post-card">
                            <div className="post-image">
                                <img className="img-regular-posts" src={require('../assets/images/react.png')} alt="Logo de React" />
                            </div>
                            <div className="post-content">
                                <div className="post-date">10 de Marzo, 2025</div>
                                <h3 className="post-title">Optimización de Rendimiento en React</h3>
                                <div className="post-meta">
                                    <span className="post-author">Por Oscar Flores</span>
                                    <span>•</span>
                                    <span>6 min lectura</span>
                                </div>
                                <p className="post-excerpt">
                                    Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React
                                    y brindar una mejor experiencia de usuario.
                                </p>
                                <div className="post-tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Rendimiento</span>
                                </div>
                                <p className="btn btn-primary">Leer más</p>
                            </div>
                        </article>

                        <article className="post-card">
                            <div className="post-image">
                                <img id="gridvsflexbox" className="img-regular-posts" src={require('../assets/images/gridvsflexbox.jpg')}
                                    alt="Imagen de Grid vs Flexbox" />
                            </div>
                            <div className="post-content">
                                <div className="post-date">5 de Marzo, 2025</div>
                                <h3 className="post-title">CSS Grid vs Flexbox: ¿Cuándo usar cada uno?</h3>
                                <div className="post-meta">
                                    <span className="post-author">Por Andres Ibañez</span>
                                    <span>•</span>
                                    <span>4 min lectura</span>
                                </div>
                                <p className="post-excerpt">
                                    Una guía completa para entender las diferencias entre CSS Grid y Flexbox,
                                    y saber cuándo es mejor usar cada tecnología.
                                </p>
                                <div className="post-tags">
                                    <span className="tag">CSS</span>
                                    <span className="tag">Layout</span>
                                </div>
                                <p className="btn btn-primary">Leer más</p>
                            </div>
                        </article>

                        <article className="post-card">
                            <div className="post-image">
                                <img className="img-regular-posts" src={require('../assets/images/Typescript_logo.png')} alt="Logo de Typescript" />
                            </div>
                            <div className="post-content">
                                <div className="post-date">1 de Marzo, 2025</div>
                                <h3 className="post-title">Introducción a TypeScript para JavaScript</h3>
                                <div className="post-meta">
                                    <span className="post-author">Por Leroy Rodriguez</span>
                                    <span>•</span>
                                    <span>5 min lectura</span>
                                </div>
                                <p className="post-excerpt">
                                    Si vienes de JavaScript y quieres dar el salto a TypeScript, esta guía
                                    te ayudará a entender los conceptos básicos.
                                </p>
                                <div className="post-tags">
                                    <span className="tag">TypeScript</span>
                                    <span className="tag">JavaScript</span>
                                </div>
                                <p className="btn btn-primary">Leer más</p>
                            </div>
                        </article>
                    </div>

                    <article id="featured-article" className="main-article">
                        <header className="article-header">
                            <h1 className="article-title">Las Tendencias de Diseño Web para 2025</h1>
                            <div className="article-meta">
                                Por <strong>Sebastián González</strong> • 15 de Agosto, 2025 • 8 minutos de lectura
                            </div>
                        </header>

                        <div className="article-content">
                            <p>
                                El mundo del diseño web está en constante evolución, y 2025 no es la excepción.
                                Este año hemos visto emerger tendencias fascinantes que no solo mejoran la
                                estética de los sitios web, sino que también elevan significativamente la
                                experiencia del usuario.
                            </p>

                            <h2>Minimalismo Funcional</h2>
                            <p>
                                El minimalismo sigue siendo una tendencia dominante, pero en 2025 ha evolucionado
                                hacia lo que llamamos "minimalismo funcional". Ya no se trata solo de espacios
                                en blanco y elementos simples, sino de crear interfaces que sean visualmente
                                limpias pero funcionalmente ricas.
                            </p>

                            <blockquote>
                                "El buen diseño es tan poco diseño como sea posible, pero debe resolver todos
                                los problemas del usuario de manera elegante y eficiente."
                                <cite>— Dieter Rams, diseñador industrial</cite>
                            </blockquote>

                            <h2>Colores Vibrantes y Gradientes</h2>
                            <p>
                                Contrario a la paleta monocromática que dominó años anteriores, 2025 ha traído
                                consigo una explosión de colores vibrantes. Los gradientes han regresado con
                                fuerza, pero ahora son más sofisticados y sutiles.
                            </p>

                            <h3>Implementación Práctica</h3>
                            <p>
                                Para implementar estas tendencias en tus proyectos, es importante entender los
                                principios básicos del diseño. Si quieres profundizar más en estos conceptos,
                                te recomiendo visitar
                                <a href="https://www.smashingmagazine.com" target="_blank" rel="noreferrer" className="external-link">
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

                            <h2>Accesibilidad Como Prioridad</h2>
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

export default Blog;