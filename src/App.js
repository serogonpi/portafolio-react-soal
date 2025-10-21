import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Contexts
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// Utils
import { initializeData } from './utils/dataManager';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './components/services/ServiceDetail';
import Blog from './pages/Blog';
import Cart from './pages/Cart';

function App() {
  // Inicializar datos al cargar la aplicación
  useEffect(() => {
    initializeData();
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/servicios/:slug" element={<ServiceDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/carrito" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;