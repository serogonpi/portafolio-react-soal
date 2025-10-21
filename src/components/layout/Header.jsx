import React from "react";
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import '../../assets/css/styles.css';
import './Header.css';

function Header() {
    const { getTotalItems } = useCart();
    const cartItemsCount = getTotalItems();

    return (
        <header className="header">
            <nav className="navigation">
                <div className="nav-container">
                    <div className="logo">
                        <Link to="/">
                            <h1>SORL Servicios</h1>
                        </Link>
                    </div>
                    <ul className="nav-menu">
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li className="cart-menu-item">
                            <Link to="/carrito" className="cart-link">
                                <span className="cart-icon">🛒</span>
                                <span className="cart-text">Carrito</span>
                                {cartItemsCount > 0 && (
                                    <span className="cart-badge">{cartItemsCount}</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;