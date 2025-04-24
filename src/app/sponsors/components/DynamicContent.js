"use client";
import { motion } from "framer-motion";
import SponsorList from "./SponsorList";
import SponsorshipPlans from "./SponsorshipPlans";
import SponsorForm from "@/components/SponsorForm";
import CTAFinal from "@/components/CTAFinal";
import FAQSection from "@/components/FAQSection";
import { sponsorshipFAQs } from "@/data/faqs";


export default function DynamicContent() {
  return (
    <>
      {/* Beneficios de patrocinio */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container-py"
      >
        <h2 className="section-title">¿Por qué patrocinar PyDay Chile?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-black/20 backdrop-blur p-6 rounded-lg text-center">
            <div className="bg-green-600 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Visibilidad</h4>
            <p>
              Conecta tu marca con la comunidad Python de Chile y Latinoamérica.
              Más de 300 asistentes entre desarrolladores, profesionales y
              estudiantes.
            </p>
          </div>
          <div className="bg-black/20 backdrop-blur p-6 rounded-lg text-center">
            <div className="bg-green-600 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Reclutamiento</h4>
            <p>
              Acceso directo a talento especializado en Python, uno de los
              lenguajes más demandados en la industria tecnológica.
            </p>
          </div>
          <div className="bg-black/20 backdrop-blur p-6 rounded-lg text-center">
            <div className="bg-green-600 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Comunidad</h4>
            <p>
              Contribuye al crecimiento de la comunidad open source y mejora tu
              reputación como empresa que apoya el desarrollo tecnológico en
              Chile.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Alcance del evento */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container-py bg-black/10 backdrop-blur"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Alcance del Evento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">300+</div>
              <p className="text-xl">Asistentes por sede</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">3</div>
              <p className="text-xl">Ciudades en Chile</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">20+</div>
              <p className="text-xl">Charlas y talleres</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">70%</div>
              <p className="text-xl">Profesionales del sector tecnológico</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">2K+</div>
              <p className="text-xl">Seguidores en redes sociales</p>
            </div>
          </div>
        </div>
      </motion.section>

      <SponsorshipPlans />

      {/* Patrocinadores anteriores */}
      <SponsorList />

      {/* Testimonios de patrocinadores */}
      <section className="container-py">
        <h2 className="section-title">Lo que dicen nuestros patrocinadores</h2>
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/20 backdrop-blur rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "Patrocinar PyDay nos permitió conectar con desarrolladores
                talentosos y aumentar nuestra visibilidad en la comunidad Python
                de Chile. Definitivamente repetiremos la experiencia."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                  <span className="font-bold text-lg">AC</span>
                </div>
                <div>
                  <p className="font-bold">Ana Contreras</p>
                  <p className="text-sm opacity-80">CTO, TechSolutions Chile</p>
                </div>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "El retorno de inversión fue excelente. Logramos contactar con
                varios perfiles interesantes para nuestro equipo y posicionar
                nuestra marca entre profesionales del sector."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                  <span className="font-bold text-lg">PM</span>
                </div>
                <div>
                  <p className="font-bold">Pablo Muñoz</p>
                  <p className="text-sm opacity-80">
                    Director de RRHH, DataSoft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="container-py bg-black/20 backdrop-blur">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title">¿Interesado en patrocinar?</h2>
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6">
            <SponsorForm />
          </div>
        </div>
      </section>

      <CTAFinal
        title="¿Listo para formar parte de PyDay Chile 2025?"
        subtitle="Conviértete en parte fundamental de este evento que impulsa el desarrollo tecnológico en Chile"
        buttonText="Solicitar Información"
      />

      <FAQSection faqs={sponsorshipFAQs} />
    </>
  );
}
