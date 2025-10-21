import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/styles.css';

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <div className="nav-container">
                    <div className="logo">
                        <h1>Nuestro Portafolio</h1>
                    </div>
                    <ul className="nav-menu">
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;