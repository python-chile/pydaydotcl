"use client";
import { useState } from "react";

export default function SponsorForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    sponsorLevel: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FIXME: Lógica de envío a API
  };

  return (
    <div className="max-w-md mx-auto bg-white/5 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Solicitud de Patrocinio
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/** Empresa */}
        <div className="space-y-1">
          <label htmlFor="companyName" className="block text-sm font-medium text-white">
            Nombre de la empresa
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-py-green-500"
            placeholder="Nombre de tu empresa"
          />
        </div>

        {/** Contacto */}
        <div className="space-y-1">
          <label htmlFor="contactName" className="block text-sm font-medium text-white">
            Nombre de contacto
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-py-green-500"
            placeholder="Nombre completo"
          />
        </div>

        {/** Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-py-green-500"
            placeholder="correo@empresa.com"
          />
        </div>

        {/** Teléfono */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm font-medium text-white">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-py-green-500"
            placeholder="+569 XXXXXXXX"
          />
        </div>

        {/** Nivel de patrocinio */}
        <div className="space-y-1">
          <label htmlFor="sponsorLevel" className="block text-sm font-medium text-white">
            Nivel de patrocinio de interés
          </label>
          <select
            id="sponsorLevel"
            name="sponsorLevel"
            value={formData.sponsorLevel}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-py-green-500 appearance-none"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="custom">Otro (personalizado)</option>
          </select>
        </div>

        {/** Mensaje */}
        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Mensaje (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-py-green-500"
            placeholder="Cuéntanos más sobre tu interés en patrocinar PyDay Chile"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar solicitud de patrocinio
        </button>
      </form>
    </div>
  );
}
