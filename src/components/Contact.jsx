import React, { useState } from "react";
import '../assets/css/styles.css'
import '../assets/css/contacto.css'

function Contact() {
    // Estado para los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        tipoProyecto: '',
        presupuesto: '',
        asunto: '',
        mensaje: '',
        newsletter: false,
        terminos: false
    });

    // Estado para los errores de validación
    const [errors, setErrors] = useState({});

    // Estado para el botón de envío
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Limpiar error del campo cuando el usuario escribe
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    // Función de validación
    const validateForm = () => {
        const newErrors = {};

        // Validar nombre (requerido, mínimo 2 caracteres)
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        } else if (formData.nombre.trim().length < 2) {
            newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
        }

        // Validar email (requerido, formato válido)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Por favor, ingresa un email válido';
        }

        // Validar teléfono (opcional, pero si está debe ser válido)
        if (formData.telefono.trim()) {
            const phoneRegex = /^[+]?[\d\s-]{8,}$/;
            if (!phoneRegex.test(formData.telefono)) {
                newErrors.telefono = 'Formato de teléfono inválido';
            }
        }

        // Validar tipo de proyecto (requerido)
        if (!formData.tipoProyecto) {
            newErrors.tipoProyecto = 'Selecciona un tipo de proyecto';
        }

        // Validar asunto (requerido, mínimo 2 caracteres)
        if (!formData.asunto.trim()) {
            newErrors.asunto = 'El asunto es requerido';
        } else if (formData.asunto.trim().length < 2) {
            newErrors.asunto = 'El asunto debe tener al menos 2 caracteres';
        }

        // Validar mensaje (requerido, mínimo 10 caracteres)
        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es requerido';
        } else if (formData.mensaje.trim().length < 10) {
            newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }

        // Validar términos (requerido)
        if (!formData.terminos) {
            newErrors.terminos = 'Debes aceptar los términos y condiciones';
        }

        return newErrors;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar formulario
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            // Scroll al primer error
            const firstError = document.querySelector('.is-invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Enviar al backend real
        setIsSubmitting(true);

        try {
            console.log('Enviando petición al backend...');

            const response = await fetch('/api/contact', {  // ← El proxy lo convierte a localhost:5000
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    email: formData.email,
                    asunto: formData.asunto,
                    mensaje: formData.mensaje,
                    tipoProyecto: formData.tipoProyecto,
                    presupuesto: formData.presupuesto
                })
            });

            console.log('Respuesta recibida:', response.status);

            const result = await response.json();
            console.log('Resultado:', result);

            if (result.success) {
                alert('¡Mensaje enviado con éxito! Te responderemos pronto.');

                // Resetear formulario
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    empresa: '',
                    tipoProyecto: '',
                    presupuesto: '',
                    asunto: '',
                    mensaje: '',
                    newsletter: false,
                    terminos: false
                });
                setErrors({});
            } else {
                alert('Error: ' + result.message);
            }

        } catch (error) {
            console.error('Error completo:', error);
            alert('Ocurrió un error al enviar el mensaje. Asegúrate de que el servidor esté corriendo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main>
            <section id="inicio" className="hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="hero-title display-3 fw-bold mb-4">Contáctanos</h1>
                            <p className="hero-subtitle lead fs-4 opacity-90">
                                ¿Tienes un proyecto en mente? Nos encantaría escucharte.
                                Trabajemos juntos para hacer realidad tu visión digital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-main py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Columna Izquierda - Información de Contacto */}
                        <div className="col-lg-4">
                            <div className="d-flex flex-column gap-4">
                                {/* Card de Información */}
                                <div className="card contact-info-card shadow border-0 rounded-4">
                                    <div className="card-body p-4">
                                        <h2 className="h4 mb-3 text-success">¿Hablamos?</h2>
                                        <p className="text-secondary mb-4">
                                            Estamos aquí para ayudarte con tu próximo proyecto web.
                                            Respondemos todos los mensajes en menos de 24 horas.
                                        </p>

                                        <div className="contact-details d-flex flex-column gap-3">
                                            <div className="contact-item d-flex align-items-center gap-3 p-3 bg-light rounded-3">
                                                <div className="contact-icon fs-3">📧</div>
                                                <div>
                                                    <strong className="text-success d-block">Email</strong>
                                                    <p className="mb-0 text-secondary">soal@email.com</p>
                                                </div>
                                            </div>

                                            <div className="contact-item d-flex align-items-center gap-3 p-3 bg-light rounded-3">
                                                <div className="contact-icon fs-3">📱</div>
                                                <div>
                                                    <strong className="text-success d-block">Teléfono</strong>
                                                    <p className="mb-0 text-secondary">+56 9 12345678</p>
                                                </div>
                                            </div>

                                            <div className="contact-item d-flex align-items-center gap-3 p-3 bg-light rounded-3">
                                                <div className="contact-icon fs-3">📍</div>
                                                <div>
                                                    <strong className="text-success d-block">Ubicación</strong>
                                                    <p className="mb-0 text-secondary">Santiago, Chile</p>
                                                </div>
                                            </div>

                                            <div className="contact-item d-flex align-items-center gap-3 p-3 bg-light rounded-3">
                                                <div className="contact-icon fs-3">⏰</div>
                                                <div>
                                                    <strong className="text-success d-block">Horarios</strong>
                                                    <p className="mb-0 text-secondary">Lun - Vie: 9:00 - 18:00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card de Redes Sociales */}
                                <div className="card shadow border-0 rounded-4">
                                    <div className="card-body p-4">
                                        <h3 className="h5 mb-3 text-success">Síguenos</h3>
                                        <div className="d-flex flex-column gap-2">
                                            <a href="https://www.facebook.com/"
                                                className="social-icon d-flex align-items-center gap-2 p-3 bg-light rounded-3 text-decoration-none text-dark"
                                                target="_blank" rel="noreferrer">
                                                📘 Facebook
                                            </a>
                                            <a href="https://www.instagram.com/"
                                                className="social-icon d-flex align-items-center gap-2 p-3 bg-light rounded-3 text-decoration-none text-dark"
                                                target="_blank" rel="noreferrer">
                                                📷 Instagram
                                            </a>
                                            <a href="https://www.linkedin.com/"
                                                className="social-icon d-flex align-items-center gap-2 p-3 bg-light rounded-3 text-decoration-none text-dark"
                                                target="_blank" rel="noreferrer">
                                                💼 LinkedIn
                                            </a>
                                            <a href="https://x.com/?lang=es"
                                                className="social-icon d-flex align-items-center gap-2 p-3 bg-light rounded-3 text-decoration-none text-dark"
                                                target="_blank" rel="noreferrer">
                                                🐦 Twitter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha - Formulario */}
                        <div className="col-lg-8">
                            <div className="card contact-form shadow border-0 rounded-4">
                                <div className="card-body p-4 p-lg-5">
                                    <h2 className="h3 mb-2 text-success">Envíanos un mensaje</h2>
                                    <p className="text-secondary mb-4">
                                        Cuéntanos sobre tu proyecto y te contactaremos pronto.
                                    </p>

                                    <form onSubmit={handleSubmit} noValidate>
                                        {/* Nombre */}
                                        <div className="mb-4">
                                            <label htmlFor="nombre" className="form-label fw-semibold text-success">
                                                Nombre *
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                                id="nombre"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                placeholder="Tu nombre completo"
                                            />
                                            {errors.nombre && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.nombre}
                                                </div>
                                            )}
                                        </div>

                                        {/* Email y Teléfono */}
                                        <div className="row g-3 mb-4">
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label fw-semibold text-success">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="tu@email.com"
                                                />
                                                {errors.email && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="telefono" className="form-label fw-semibold text-success">
                                                    Teléfono
                                                </label>
                                                <input
                                                    type="tel"
                                                    className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                                                    id="telefono"
                                                    name="telefono"
                                                    value={formData.telefono}
                                                    onChange={handleChange}
                                                    placeholder="+56 9 12345678"
                                                />
                                                {errors.telefono && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.telefono}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Empresa */}
                                        <div className="mb-4">
                                            <label htmlFor="empresa" className="form-label fw-semibold text-success">
                                                Empresa
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="empresa"
                                                name="empresa"
                                                value={formData.empresa}
                                                onChange={handleChange}
                                                placeholder="Nombre de tu empresa"
                                            />
                                        </div>

                                        {/* Tipo de Proyecto */}
                                        <div className="mb-4">
                                            <label htmlFor="tipoProyecto" className="form-label fw-semibold text-success">
                                                Tipo de Proyecto *
                                            </label>
                                            <select
                                                className={`form-select ${errors.tipoProyecto ? 'is-invalid' : ''}`}
                                                id="tipoProyecto"
                                                name="tipoProyecto"
                                                value={formData.tipoProyecto}
                                                onChange={handleChange}
                                            >
                                                <option value="">Selecciona una opción</option>
                                                <option value="sitio-web">Sitio Web Corporativo</option>
                                                <option value="ecommerce">Tienda Online</option>
                                                <option value="aplicacion">Aplicación Web</option>
                                                <option value="rediseño">Rediseño de Sitio</option>
                                                <option value="mantenimiento">Mantenimiento Web</option>
                                                <option value="consultoria">Consultoría</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                            {errors.tipoProyecto && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.tipoProyecto}
                                                </div>
                                            )}
                                        </div>

                                        {/* Presupuesto */}
                                        <div className="mb-4">
                                            <label htmlFor="presupuesto" className="form-label fw-semibold text-success">
                                                Presupuesto Aproximado
                                            </label>
                                            <select
                                                className="form-select"
                                                id="presupuesto"
                                                name="presupuesto"
                                                value={formData.presupuesto}
                                                onChange={handleChange}
                                            >
                                                <option value="">Selecciona un rango</option>
                                                <option value="menos-500.000">Menos de $500.000</option>
                                                <option value="500.000-1.000.000">$500.000 - $1.000.000</option>
                                                <option value="1.000.000-1.500.000">$1.000.000 - $1.500.000</option>
                                                <option value="1.500.000-2.000.000">$1.500.000 - $2.000.000</option>
                                                <option value="mas-2.000.000">Más de $2.000.000</option>
                                            </select>
                                        </div>

                                        {/* Asunto */}
                                        <div className="mb-4">
                                            <label htmlFor="asunto" className="form-label fw-semibold text-success">
                                                Asunto *
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
                                                id="asunto"
                                                name="asunto"
                                                value={formData.asunto}
                                                onChange={handleChange}
                                                placeholder="Resumen del proyecto"
                                            />
                                            {errors.asunto && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.asunto}
                                                </div>
                                            )}
                                        </div>

                                        {/* Mensaje */}
                                        <div className="mb-4">
                                            <label htmlFor="mensaje" className="form-label fw-semibold text-success">
                                                Mensaje *
                                            </label>
                                            <textarea
                                                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                                                id="mensaje"
                                                name="mensaje"
                                                rows="6"
                                                value={formData.mensaje}
                                                onChange={handleChange}
                                                placeholder="Cuéntanos más detalles sobre tu proyecto..."
                                            />
                                            {errors.mensaje && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.mensaje}
                                                </div>
                                            )}
                                        </div>

                                        {/* Newsletter */}
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="newsletter"
                                                name="newsletter"
                                                checked={formData.newsletter}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="newsletter">
                                                Quiero recibir actualizaciones y noticias por email
                                            </label>
                                        </div>

                                        {/* Términos */}
                                        <div className="form-check mb-4">
                                            <input
                                                className={`form-check-input ${errors.terminos ? 'is-invalid' : ''}`}
                                                type="checkbox"
                                                id="terminos"
                                                name="terminos"
                                                checked={formData.terminos}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="terminos">
                                                Acepto los términos y condiciones *
                                            </label>
                                            {errors.terminos && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.terminos}
                                                </div>
                                            )}
                                        </div>

                                        {/* Botón de Envío */}
                                        <button
                                            type="submit"
                                            className="btn btn-success w-100 py-3 fw-bold"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section py-5">
                <div className="container">
                    <h2 className="section-title text-center display-5 fw-bold mb-5">
                        Preguntas Frecuentes
                    </h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="faq-item p-4 bg-light rounded-4 border-start border-5 border-success">
                                <h3 className="h6 fw-bold mb-3">¿Cuánto tiempo toma desarrollar un sitio web?</h3>
                                <p className="text-secondary mb-0">
                                    Depende de la complejidad, pero generalmente entre 2-8 semanas para sitios estándar.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="faq-item p-4 bg-light rounded-4 border-start border-5 border-success">
                                <h3 className="h6 fw-bold mb-3">¿Ofrecen mantenimiento post-lanzamiento?</h3>
                                <p className="text-secondary mb-0">
                                    Sí, ofrecemos planes de mantenimiento mensual para mantener tu sitio actualizado y seguro.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="faq-item p-4 bg-light rounded-4 border-start border-5 border-success">
                                <h3 className="h6 fw-bold mb-3">¿Los sitios son responsive?</h3>
                                <p className="text-secondary mb-0">
                                    Absolutamente. Todos nuestros sitios están optimizados para móviles y tablets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;