import React from "react";
import '../assets/css/styles.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Nuestro Portafolio</h3>
                        <p>Desarrolladores web especializados en crear expreciencias
                            digitales únicas y memorables que impusan el crecimiento
                            de tu negocio.
                        </p>
                    </div>
                    <div className="footer-links">
                        <a href="/">Inicio</a>
                        <a href="/posts">Posts</a>
                        <a href="/gallery">Galería</a>
                        <a href="/contacto">Contacto</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Nuestro Portafolio. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;