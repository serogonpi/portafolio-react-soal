/**
 * PRUEBA 2: Validación de Email en el Formulario de Contacto
 * Verifica que el formulario valide correctamente el formato del email
 */

describe('Validación de Formulario - Email', () => {
  
  // Función de validación de email (copiada de Contact.jsx)
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  it('debe rechazar email sin @', () => {
    const invalidEmail = 'emailinvalido.com';
    const result = validateEmail(invalidEmail);
    expect(result).toBe(false);
  });

  it('debe rechazar email sin dominio', () => {
    const invalidEmail = 'email@';
    const result = validateEmail(invalidEmail);
    expect(result).toBe(false);
  });

  it('debe rechazar email sin extensión', () => {
    const invalidEmail = 'email@dominio';
    const result = validateEmail(invalidEmail);
    expect(result).toBe(false);
  });

  it('debe aceptar email válido', () => {
    const validEmail = 'test@example.com';
    const result = validateEmail(validEmail);
    expect(result).toBe(true);
  });

  it('debe aceptar email con subdominios', () => {
    const validEmail = 'test@mail.example.com';
    const result = validateEmail(validEmail);
    expect(result).toBe(true);
  });

  it('debe rechazar email con espacios', () => {
    const invalidEmail = 'test @example.com';
    const result = validateEmail(invalidEmail);
    expect(result).toBe(false);
  });

  it('debe rechazar email vacío', () => {
    const invalidEmail = '';
    const result = validateEmail(invalidEmail);
    expect(result).toBe(false);
  });
});