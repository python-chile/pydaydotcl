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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //FIXME: Lógica de envío a API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium mb-1">
          Nombre de la empresa
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          className="w-full px-4 py-2 rounded-lg bg-black/50 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
          placeholder="Nombre de tu empresa"
        />
      </div>
      <div>
        <label htmlFor="contactName" className="block text-sm font-medium mb-1">
          Nombre de contacto
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          className="w-full px-4 py-2 rounded-lg bg-black/50 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
          placeholder="Nombre completo"
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
          required
          className="w-full px-4 py-2 rounded-lg bg-black/50 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
          placeholder="correo@empresa.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 rounded-lg bg-black/50 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
          placeholder="+569 XXXXXXXX"
        />
      </div>
      <div>
        <label
          htmlFor="sponsorLevel"
          className="block text-sm font-medium mb-1"
        >
          Nivel de patrocinio de interés
        </label>
        <select
          id="sponsorLevel"
          name="sponsorLevel"
          value={formData.sponsorLevel}
          onChange={handleChange}
          required
          className="select-theme"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <option
            value=""
            disabled
            style={{ backgroundColor: "#1a1a1a", color: "white" }}
          >
            Selecciona una opción
          </option>
          <option
            value="bronze"
            style={{ backgroundColor: "#1a1a1a", color: "white" }}
          >
            Bronze
          </option>
          <option
            value="silver"
            style={{ backgroundColor: "#1a1a1a", color: "white" }}
          >
            Silver
          </option>
          <option
            value="gold"
            style={{ backgroundColor: "#1a1a1a", color: "white" }}
          >
            Gold
          </option>
          <option
            value="custom"
            style={{ backgroundColor: "#1a1a1a", color: "white" }}
          >
            Otro (personalizado)
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-4 py-2 rounded-lg bg-black/50 backdrop-blur border border-white/20 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white"
          placeholder="Cuéntanos más sobre tu interés en patrocinar PyDay Chile"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full btn-primary flex justify-center items-center"
      >
        Enviar solicitud de patrocinio
      </button>
    </form>
  );
}
