/**
 * PRUEBA 3: Validación de Campos Requeridos del Formulario
 * Verifica que los campos obligatorios sean validados correctamente
 */

describe('Validación de Formulario - Campos Requeridos', () => {

  // Función de validación (basada en Contact.jsx)
  const validateField = (fieldName, value) => {
    switch(fieldName) {
      case 'nombre':
        if (!value || value.trim().length < 2) {
          return 'El nombre debe tener al menos 2 caracteres';
        }
        return '';
      
      case 'asunto':
        if (!value || value.trim().length < 2) {
          return 'El asunto debe tener al menos 2 caracteres';
        }
        return '';
      
      case 'mensaje':
        if (!value || value.trim().length < 10) {
          return 'El mensaje debe tener al menos 10 caracteres';
        }
        return '';
      
      case 'tipoProyecto':
        if (!value) {
          return 'Selecciona un tipo de proyecto';
        }
        return '';
      
      default:
        return '';
    }
  };

  describe('Validación de Nombre', () => {
    it('debe rechazar nombre vacío', () => {
      const error = validateField('nombre', '');
      expect(error).not.toBe('');
      expect(error).toContain('2 caracteres');
    });

    it('debe rechazar nombre con 1 carácter', () => {
      const error = validateField('nombre', 'A');
      expect(error).not.toBe('');
    });

    it('debe aceptar nombre con 2 caracteres', () => {
      const error = validateField('nombre', 'Ab');
      expect(error).toBe('');
    });

    it('debe aceptar nombre válido', () => {
      const error = validateField('nombre', 'Juan Pérez');
      expect(error).toBe('');
    });

    it('debe rechazar nombre solo con espacios', () => {
      const error = validateField('nombre', '   ');
      expect(error).not.toBe('');
    });
  });

  describe('Validación de Asunto', () => {
    it('debe rechazar asunto vacío', () => {
      const error = validateField('asunto', '');
      expect(error).not.toBe('');
    });

    it('debe aceptar asunto válido', () => {
      const error = validateField('asunto', 'Consulta web');
      expect(error).toBe('');
    });
  });

  describe('Validación de Mensaje', () => {
    it('debe rechazar mensaje vacío', () => {
      const error = validateField('mensaje', '');
      expect(error).not.toBe('');
      expect(error).toContain('10 caracteres');
    });

    it('debe rechazar mensaje con menos de 10 caracteres', () => {
      const error = validateField('mensaje', 'Hola');
      expect(error).not.toBe('');
    });

    it('debe aceptar mensaje con 10 caracteres', () => {
      const error = validateField('mensaje', '1234567890');
      expect(error).toBe('');
    });

    it('debe aceptar mensaje válido', () => {
      const error = validateField('mensaje', 'Este es un mensaje de prueba válido');
      expect(error).toBe('');
    });
  });

  describe('Validación de Tipo de Proyecto', () => {
    it('debe rechazar tipo de proyecto vacío', () => {
      const error = validateField('tipoProyecto', '');
      expect(error).not.toBe('');
    });

    it('debe aceptar tipo de proyecto seleccionado', () => {
      const error = validateField('tipoProyecto', 'ecommerce');
      expect(error).toBe('');
    });
  });
});