import React, { useState } from "react";
import '../assets/css/styles.css'
import '../assets/css/gallery.css'

function Gallery() {
    // STATE: Categoría seleccionada para filtrar
    const [selectedCategory, setSelectedCategory] = useState('todos');

    // Datos de los proyectos
    const projects = [
        {
            id: 1,
            title: 'Tienda Online Premium',
            description: 'E-commerce moderno con diseño responsive, carrito de compras avanzado y pasarela de pago integrada.',
            category: 'diseño-web',
            image: require('../assets/images/ecommerce.jpeg')
        },
        {
            id: 2,
            title: 'Portal Corporativo',
            description: 'Sitio web empresarial con panel administrativo, gestión de contenidos y sistema de citas online.',
            category: 'diseño-web',
            image: require('../assets/images/portal_corporativo.png')
        },
        {
            id: 3,
            title: 'Aplicación de Fitness',
            description: 'App móvil para seguimiento de ejercicios, rutinas personalizadas y estadísticas de progreso.',
            category: 'apps-moviles',
            image: require('../assets/images/fitness-app.png')
        },
        {
            id: 4,
            title: 'App de Delivery',
            description: 'Aplicación de pedidos online con tracking en tiempo real y múltiples métodos de pago.',
            category: 'apps-moviles',
            image: require('../assets/images/delivery_app.png')
        },
        {
            id: 5,
            title: 'Identidad Corporativa',
            description: 'Desarrollo completo de marca: logo, colores, tipografías y manual de identidad visual.',
            category: 'branding',
            image: require('../assets/images/identidad_visual.jpg')
        },
        {
            id: 6,
            title: 'Branding Café Premium',
            description: 'Identidad visual completa para cafetería premium, incluyendo packaging y material promocional.',
            category: 'branding',
            image: require('../assets/images/branding_cafe_premium.jpg')
        },
        {
            id: 7,
            title: 'Dashboard Analytics',
            description: 'Diseño UX/UI de dashboard para análisis de datos con gráficos interactivos y métricas en tiempo real.',
            category: 'ui-ux',
            image: require('../assets/images/dashboard.png')
        },
        {
            id: 8,
            title: 'App Bancaria',
            description: 'Rediseño UX de aplicación bancaria enfocado en usabilidad y experiencia de usuario intuitiva.',
            category: 'ui-ux',
            image: require('../assets/images/banking_app.png')
        }
    ];

    // Función para obtener el badge label según categoría
    const getCategoryLabel = (category) => {
        const labels = {
            'diseño-web': 'Diseño Web',
            'apps-moviles': 'Apps Móviles',
            'branding': 'Branding',
            'ui-ux': 'UI/UX'
        };
        return labels[category] || category;
    };

    // Función para obtener el color del badge según categoría
    const getCategoryColor = (category) => {
        const colors = {
            'diseño-web': 'success',
            'apps-moviles': 'primary',
            'branding': 'warning',
            'ui-ux': 'info'
        };
        return colors[category] || 'secondary';
    };

    // Filtrar proyectos según categoría seleccionada
    const filteredProjects = selectedCategory === 'todos' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    // Componente reutilizable para cada proyecto (recibe PROPS)
    const ProjectCard = ({ project }) => {
        return (
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card gallery-item h-100 shadow border-0 rounded-4 overflow-hidden">
                    <div className="gallery-image position-relative">
                        <img 
                            className="card-img-top" 
                            src={project.image} 
                            alt={project.title}
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title h5 fw-bold mb-3">{project.title}</h3>
                        <p className="card-text text-secondary mb-3">
                            {project.description}
                        </p>
                        <span className={`badge bg-${getCategoryColor(project.category)}-subtle text-${getCategoryColor(project.category)}-emphasis px-3 py-2 rounded-pill`}>
                            {getCategoryLabel(project.category)}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main>
            <section id="inicio" className="hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="hero-title display-3 fw-bold mb-4">Nuestra Galería</h2>
                            <p className="hero-subtitle lead fs-4 opacity-90">
                                Explora nuestros trabajos más destacados y descubre la calidad de nuestros
                                proyectos digitales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery py-5">
                <div className="container">
                    {/* Botones de filtro */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="d-flex flex-wrap gap-3 justify-content-center">
                                <button 
                                    className={`btn ${selectedCategory === 'todos' ? 'btn-success' : 'btn-outline-success'} px-4 py-2`}
                                    onClick={() => setSelectedCategory('todos')}
                                >
                                    Todos ({projects.length})
                                </button>
                                <button 
                                    className={`btn ${selectedCategory === 'diseño-web' ? 'btn-success' : 'btn-outline-success'} px-4 py-2`}
                                    onClick={() => setSelectedCategory('diseño-web')}
                                >
                                    Diseño Web ({projects.filter(p => p.category === 'diseño-web').length})
                                </button>
                                <button 
                                    className={`btn ${selectedCategory === 'apps-moviles' ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                                    onClick={() => setSelectedCategory('apps-moviles')}
                                >
                                    Apps Móviles ({projects.filter(p => p.category === 'apps-moviles').length})
                                </button>
                                <button 
                                    className={`btn ${selectedCategory === 'branding' ? 'btn-warning' : 'btn-outline-warning'} px-4 py-2`}
                                    onClick={() => setSelectedCategory('branding')}
                                >
                                    Branding ({projects.filter(p => p.category === 'branding').length})
                                </button>
                                <button 
                                    className={`btn ${selectedCategory === 'ui-ux' ? 'btn-info' : 'btn-outline-info'} px-4 py-2`}
                                    onClick={() => setSelectedCategory('ui-ux')}
                                >
                                    UI/UX ({projects.filter(p => p.category === 'ui-ux').length})
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contador de proyectos filtrados */}
                    <div className="row mb-3">
                        <div className="col-12 text-center">
                            <p className="text-secondary">
                                Mostrando <strong>{filteredProjects.length}</strong> proyecto{filteredProjects.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                    </div>

                    {/* Grid de proyectos */}
                    <div className="row g-4">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Mensaje cuando no hay proyectos */}
                    {filteredProjects.length === 0 && (
                        <div className="row">
                            <div className="col-12 text-center py-5">
                                <p className="text-secondary fs-5">
                                    No hay proyectos en esta categoría
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Gallery;