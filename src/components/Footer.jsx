import React from 'react';
import '../assets/css/styles.css'

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <h3 className="h4 mb-3 text-success">Nuestro Portafolio</h3>
                        <p className="text-white-50 lh-lg">
                            Desarrolladores web especializados en crear experiencias
                            digitales únicas y memorables que impulsan el crecimiento
                            de tu negocio.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column gap-3">
                            <a href="/" className="text-white-50 text-decoration-none hover-link">
                                Inicio
                            </a>
                            <a href="/posts" className="text-white-50 text-decoration-none hover-link">
                                Posts
                            </a>
                            <a href="/gallery" className="text-white-50 text-decoration-none hover-link">
                                Galería
                            </a>
                            <a href="/contact" className="text-white-50 text-decoration-none hover-link">
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-secondary my-4" />
                <div className="text-center text-white-50 small">
                    <p className="mb-0">&copy; 2025 Nuestro Portafolio. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;