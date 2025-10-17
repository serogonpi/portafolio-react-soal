import react from "react";
import '../assets/css/styles.css'

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <div className="nav-container">
                    <div className="logo">
                        <h1>Nuestro Portafolio</h1>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/posts">Posts</a></li>
                        <li><a href="/gallery">Galería</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;