import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import '../../assets/css/styles.css';
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const { getTotalItems } = useCart();
    const { isAuthenticated, currentUser, logout } = useAuth();
    const cartItemsCount = getTotalItems();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
            logout();
            setDropdownOpen(false);
            navigate('/');
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Cerrar dropdown al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

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
                        
                        {/* Carrito */}
                        <li className="cart-menu-item">
                            <Link to="/carrito" className="cart-link">
                                <span className="cart-text">Carrito</span>
                                {cartItemsCount > 0 && (
                                    <span className="cart-badge">{cartItemsCount}</span>
                                )}
                            </Link>
                        </li>
                        
                        {/* Usuario */}
                        <li className="user-menu-item">
                            {isAuthenticated ? (
                                <div className="user-dropdown" ref={dropdownRef}>
                                    <button 
                                        className="user-button" 
                                        type="button"
                                        onClick={toggleDropdown}
                                    >
                                        <span className="user-name">{currentUser?.name?.split(' ')[0]}</span>
                                        <span className={`user-arrow ${dropdownOpen ? 'open' : ''}`}>▼</span>
                                    </button>
                                    {dropdownOpen && (
                                        <div className="dropdown-menu show">
                                            <Link 
                                                to="/perfil" 
                                                className="dropdown-item"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                Mi Perfil
                                            </Link>
                                            <Link 
                                                to="/mis-pedidos" 
                                                className="dropdown-item"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                Mis Pedidos
                                            </Link>
                                            {currentUser?.role === 'admin' && (
                                                <Link 
                                                    to="/admin" 
                                                    className="dropdown-item admin-link"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    Panel Admin
                                                </Link>
                                            )}
                                            <div className="dropdown-divider"></div>
                                            <button 
                                                onClick={handleLogout} 
                                                className="dropdown-item logout" 
                                                type="button"
                                            >
                                                Cerrar Sesión
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to="/login" className="login-button">
                                    Iniciar Sesión
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;