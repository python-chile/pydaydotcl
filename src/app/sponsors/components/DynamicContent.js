"use client";
import { motion } from "framer-motion";
import SponsorList from "./SponsorList";
import SponsorshipPlans from "./SponsorshipPlans";
import SponsorForm from "@/app/sponsors/components/SponsorForm";
import CTAFinal from "@/components/CTAFinal";
import FAQSection from "@/components/FAQSection";
import { sponsorshipFAQs } from "@/data/faqs";
import { sponsorshipData } from "@/data/sponsorshipData";

export default function DynamicContent() {
  const { intro, audience, eventStats2024, benefits, plans, contact } =
    sponsorshipData;

  return (
    <>
      {/* Introducción */}
      <motion.section className="container mx-auto py-12 md:py-16 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 md:mb-6">
            <div className="text-4xl md:text-5xl font-bold text-[#4ADE80]">
              “
            </div>
          </div>
          <p className="text-lg md:text-2xl leading-relaxed text-gray-300 font-medium px-2 sm:px-0">
            {intro}
            <span className="block mt-4 md:mt-6 text-[#FFD43B] font-semibold text-base md:text-lg">
              ¡Sé parte de la revolución Python 2025!
            </span>
          </p>
          <div className="mt-6 md:mt-8 flex justify-center space-x-3 md:space-x-4">
            <div className="w-8 h-1 md:w-12 bg-[#4ADE80] rounded-full" />
            <div className="w-6 h-1 md:w-8 bg-[#FFD43B] rounded-full" />
            <div className="w-4 h-1 bg-[#F87171] rounded-full" />
          </div>
        </div>
      </motion.section>

      {/* Beneficios de patrocinio */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto py-16 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          <span className="border-b-4 border-[#4ADE80] pb-2">
            Ventajas Exclusivas
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-[#4ADE80] transition-all"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-[#4ADE80] opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />

              <div className="w-14 h-14 mb-6 bg-[#4ADE80]/10 rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#4ADE80]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{b.title}</h3>
              <p className="text-gray-400 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Alcance del evento */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="border-b-4 border-[#4ADE80] pb-2">
                  Impacto y Alcance
                </span>
              </h2>
              <p className="text-gray-400">Nuestra comunidad en números</p>
            </div>

            {/* Metricas principales */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 md:mb-12">
              {Object.entries(audience).map(([key, value]) => (
                <div
                  key={key}
                  className="p-4 md:p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#4ADE80]/50 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-bold text-[#4ADE80] mb-1">
                    {value.toLocaleString()}
                    <span className="text-[#FFD43B]">+</span>
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 font-medium">
                    {key === "x"
                      ? "Redes Sociales"
                      : key.split(/(?=[A-Z])/).join(" ")}
                  </p>
                </div>
              ))}
            </div>

            {/* Estadísticas 2024 */}
            <div className="p-6 md:p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-6 md:mb-8">
                Comparativa PyDay 2024
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Vistas en vivo", value: eventStats2024.liveViews },
                  {
                    label: "Asistentes presenciales",
                    value: eventStats2024.inPersonAttendees,
                  },
                  {
                    label: "Ponentes expertos",
                    value: eventStats2024.expertSpeakers,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-b from-[#4ADE80]/10 to-transparent"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-[#FFD43B] mb-1">
                      {stat.value.toLocaleString()}
                    </p>
                    <p className="text-sm md:text-base text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Planes de Patrocinio */}
      <SponsorshipPlans plans={plans} />

      {/* Patrocinadores anteriores */}
      <SponsorList sponsors={sponsorshipData.sponsors} />

      {/* Formulario de contacto */}
      <section id="contact-form" className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            ¿Interesado en patrocinar?
          </h2>
          <div className="p-12">
            <SponsorForm contactEmail={contact.email} />
          </div>
        </div>
      </section>

      <CTAFinal
        title="Contáctanos"
        subtitle={`Escríbenos a ${contact.email} o visita ${contact.website}`}
        buttonText="Enviar mensaje"
        email={contact.email}
      />
      <FAQSection faqs={sponsorshipFAQs} />
    </>
  );
}
