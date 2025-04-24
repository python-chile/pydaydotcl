"use client";
import { useState } from "react";
export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    sendCFP: false,
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({
    success: null,
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      //FIXME:  Aquí iría la lógica para enviar los datos a tu backend
      console.log("Enviando datos:", formData);

      // Simulación de respuesta exitosa
      setTimeout(() => {
        setSubmitResult({
          success: true,
          message: "¡Registro exitoso! Te esperamos en PyDay 2025.",
        });
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      setSubmitResult({
        success: false,
        message:
          "Ocurrió un error al procesar tu registro. Por favor intenta nuevamente.",
      });
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Regístrate para PyDay 2025
      </h2>

      {submitResult.success === null ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Rol / Ocupación
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/50 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white appearance-none"
              style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              <option
                value=""
                disabled
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Selecciona una opción
              </option>
              <option
                value="estudiante"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Estudiante
              </option>
              <option
                value="profesional"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Profesional
              </option>
              <option
                value="academico"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Académico
              </option>
              <option
                value="otro"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Otro
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              ¿A qué sede asistirás?
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/50 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white appearance-none"
              style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              <option
                value=""
                disabled
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Selecciona una Ciudad
              </option>
              <option
                value="copiapo"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Copiapó
              </option>
              <option
                value="valparaiso"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Valparaíso
              </option>
              <option
                value="santiago"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
              >
                Santiago
              </option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="sendCFP"
              name="sendCFP"
              checked={formData.sendCFP}
              onChange={handleChange}
              className="h-4 w-4 rounded border-white/20 accent-green-600 focus:ring-green-500"
            />
            <label htmlFor="sendCFP" className="ml-2 block text-sm">
              Me interesa enviar una propuesta de charla (CFP)
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-white"></span>
            ) : (
              "Registrarme"
            )}
          </button>
        </form>
      ) : (
        <div
          className={`p-4 rounded-lg text-center ${
            submitResult.success ? "bg-green-500/20" : "bg-red-500/20"
          }`}
        >
          <p className="text-lg font-medium">{submitResult.message}</p>
          {submitResult.success && (
            <p className="mt-2 text-sm opacity-80">
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
