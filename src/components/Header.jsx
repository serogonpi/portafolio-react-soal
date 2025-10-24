import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/styles.css'

function Header() {
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
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-3">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Galería</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;