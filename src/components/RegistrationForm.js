"use client";
import { useState, useEffect } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    sendCFP: false,
    city: "",
    idType: "run",
    idNumber: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({
    success: null,
    message: "",
  });

  // Validación de RUN chileno (módulo 11)
  const validateRUN = (run) => {
    // Limpiar y formatear RUN
    const cleanedRUN = run
      .trim()
      .toLowerCase()
      .replace(/[^0-9k]/g, "");

    // Validar formato básico
    if (!/^(\d{7,8})(\d|k)$/.test(cleanedRUN)) return false;

    // Separar número y dígito verificador
    const [numberStr, verifier] = cleanedRUN.match(/(\d{7,8})(\d|k)$/).slice(1);
    const runNumber = parseInt(numberStr, 10);
    const calculatedVerifier = calculateRUNVerifier(runNumber);

    return calculatedVerifier === verifier;
  };

  const calculateRUNVerifier = (number) => {
    let m = 0;
    let s = 1;
    let tempNumber = number;

    while (tempNumber > 0) {
      s = (s + (tempNumber % 10) * (9 - (m++ % 6))) % 11;
      tempNumber = Math.floor(tempNumber / 10);
    }

    const finalDigit = s > 0 ? s - 1 : 10;
    return finalDigit === 10 ? "k" : finalDigit.toString();
  };

  // Validación de pasaporte (formato básico)
  const validatePassport = (passport) => {
    return /^[A-Za-z0-9]{6,12}$/.test(passport);
  };

  // Validación de email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleValidation = () => {
    const errors = {};

    // Validación del nombre
    if (!formData.name.trim()) {
      errors.name = "El nombre es obligatorio";
    } else if (formData.name.trim().length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres";
    }

    // Validación del email
    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Formato de email inválido";
    }

    // Validación de identificación
    if (!formData.idNumber.trim()) {
      errors.idNumber = "Este campo es obligatorio";
    } else if (formData.idType === "run" && !validateRUN(formData.idNumber)) {
      errors.idNumber = "RUN inválido. Formato: 12.345.678-9";
    } else if (
      formData.idType === "passport" &&
      !validatePassport(formData.idNumber)
    ) {
      errors.idNumber = "Pasaporte inválido. Mínimo 6 caracteres alfanuméricos";
    }

    // Validación del rol
    if (!formData.role) {
      errors.role = "Selecciona un rol";
    }

    // Validación de la ciudad
    if (!formData.city) {
      errors.city = "Selecciona una ciudad";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setIsSubmitting(true);
    try {
      console.log("Datos enviados:", formData);

      // Simulación de envío
      setTimeout(() => {
        setSubmitResult({
          success: true,
          message:
            "¡Registro exitoso! Verifica tu correo para la confirmación.",
        });
        setIsSubmitting(false);

        if (formData.sendCFP) {
          window.open(
            "https://sessionize.com/pyday-valparaiso-2025/",
            "_blank"
          );
        }
      }, 1500);
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Error en el registro. Intenta nuevamente.",
      });
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white/5 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Regístrate para PyDay 2025
      </h2>
      {submitResult.success === null ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 relative pb-6">
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {validationErrors.name && (
              <p className="absolute text-xs text-red-500 mt-1">
                {validationErrors.name}
              </p>
            )}
          </div>

          {/* Sección de identificación con estructura mejorada */}
          <div className="space-y-2">
            <label htmlFor="idType" className="block text-sm font-medium">
              Identificación Oficial
            </label>

            {/* Contenedor para el select con altura fija */}
            <div className="h-10">
              <select
                id="idType"
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="run">RUN</option>
                <option value="passport">Pasaporte</option>
              </select>
            </div>

            {/* Contenedor para el input y mensaje de error */}
            <div className="relative pb-6">
              <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder={
                  formData.idType === "run" ? "12.345.678-9" : "AA123456"
                }
                required
                className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {validationErrors.idNumber && (
                <p className="absolute text-xs text-red-500 mt-1">
                  {validationErrors.idNumber}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2 relative pb-6">
            <label htmlFor="email" className="block text-sm font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {validationErrors.email && (
              <p className="absolute text-xs text-red-500 mt-1">
                {validationErrors.email}
              </p>
            )}
          </div>

          <div className="space-y-2 relative pb-6">
            <label htmlFor="role" className="block text-sm font-medium">
              Rol / Ocupación
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecciona una opción</option>
              <option value="student">Estudiante</option>
              <option value="professional">Profesional</option>
              <option value="academic">Académico</option>
              <option value="other">Otro</option>
            </select>
            {validationErrors.role && (
              <p className="absolute text-xs text-red-500 mt-1">
                {validationErrors.role}
              </p>
            )}
          </div>

          <div className="space-y-2 relative pb-6">
            <label htmlFor="city" className="block text-sm font-medium">
              ¿A qué sede asistirás?
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecciona una Ciudad</option>
              <option value="copiapo">Copiapó</option>
              <option value="valparaiso">Valparaíso</option>
              <option value="santiago">Santiago</option>
            </select>
            {validationErrors.city && (
              <p className="absolute text-xs text-red-500 mt-1">
                {validationErrors.city}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="sendCFP"
              name="sendCFP"
              checked={formData.sendCFP}
              onChange={handleChange}
              className="h-4 w-4 rounded  border-white/20 accent-green-600 focus:ring-green-500"
            />
            <label htmlFor="sendCFP" className="text-sm font-medium">
              Quiero proponer una charla
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            ) : (
              "Registrarme"
            )}
          </button>
        </form>
      ) : (
        <div className="text-center py-6">
          <p className="text-xl font-medium mb-2">{submitResult.message}</p>
          {submitResult.success && (
            <p className="text-sm text-gray-300">
              Recibirás un correo con tu confirmación e información adicional.
            </p>
          )}
          {!submitResult.success && (
            <button
              onClick={() => setSubmitResult({ success: null, message: "" })}
              className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
            >
              Intentar nuevamente
            </button>
          )}
        </div>
      )}
    </div>
  );
}
