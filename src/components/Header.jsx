import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../assets/css/styles.css'

function Header() {
    // STATE: Controla si el menú mobile está abierto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hook de React Router para obtener la ruta actual
    const location = useLocation();

    // Función helper para determinar si un link está activo
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Función para cerrar el menú mobile al hacer clic en un link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header fixed-top bg-white shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <h1 className="m-0 fs-4 fw-bold text-success">Nuestro Portafolio</h1>
                    </Link>

                    {/* Botón hamburguesa para mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-3">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${isActive('/') ? 'active fw-bold text-success' : ''}`}
                                    to='/'
                                    onClick={handleLinkClick}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${isActive('/posts') ? 'active fw-bold text-success' : ''}`}
                                    to="/posts"
                                    onClick={handleLinkClick}
                                >
                                    Posts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${isActive('/gallery') ? 'active fw-bold text-success' : ''}`}
                                    to="/gallery"
                                    onClick={handleLinkClick}
                                >
                                    Galería
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${isActive('/contact') ? 'active fw-bold text-success' : ''}`}
                                    to="/contact"
                                    onClick={handleLinkClick}
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;