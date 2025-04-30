"use client";
import { motion } from "framer-motion";
import SponsorList from "./SponsorList";
import SponsorshipPlans from "./SponsorshipPlans";
import SponsorForm from "@/app/sponsors/components/SponsorForm";
import CTAFinal from "@/components/CTAFinal";
import FAQSection from "@/components/FAQSection";
import { sponsorshipFAQs } from "@/data/faqs";
import { sponsorshipData } from "@/data/sponsorshipData";
import { FeatureGuard } from "@/components/FeatureManagement/FeatureGuard";

export default function DynamicContent() {
  const { intro, audience, eventStats2024, benefits, plans, contact } =
    sponsorshipData;

  return (
    <>
      {/* Introducción */}
      <motion.section className="container mx-auto py-12 md:py-16 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 md:mb-6">
            <div className="text-4xl md:text-5xl font-bold text-[var(--primary-green)]">
              "
            </div>
          </div>
          <p className="text-lg md:text-2xl leading-relaxed text-text-white font-medium px-2 sm:px-0">
            {intro}
            <span className="block mt-4 md:mt-6 text-[var(--accent-yellow)] font-semibold text-base md:text-lg">
              ¡Sé parte de la revolución Python 2025!
            </span>
          </p>
          <div className="mt-6 md:mt-8 flex justify-center space-x-3 md:space-x-4">
            <div className="w-8 h-1 md:w-12 bg-[var(--primary-green)] rounded-full" />
            <div className="w-6 h-1 md:w-8 bg-[var(--accent-yellow)] rounded-full" />
            <div className="w-4 h-1 bg-[var(--outline-red)] rounded-full" />
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
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--text-white)]">
          <span className="border-b-4 border-[var(--primary-green)] pb-2">
            Ventajas Exclusivas
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-gray-600/30 to-gray-800/50 backdrop-blur-sm hover:border-[var(--primary-green)] transition-all"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-[var(--primary-green)] opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />

              <div className="w-14 h-14 mb-6 bg-[var(--accent-yellow)]/10 rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[var(--accent-yellow)]"
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

              <h3 className="text-2xl font-bold text-[var(--text-white)] mb-4">
                {b.title}
              </h3>
              <p className="text-text-white leading-relaxed">{b.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-white)] mb-4">
                <span className="border-b-4 border-[var(--primary-green)] pb-2">
                  Impacto y Alcance
                </span>
              </h2>
              <p className="text-text-white">Nuestra comunidad en números</p>
            </div>

            {/* Metricas principales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 md:mb-12">
              {Object.entries(audience).map(([key, value]) => (
                <div
                  key={key}
                  className="p-4 md:p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[var(--primary-green)]/50 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-bold text-[var(--primary-green)] mb-1">
                    {value.toLocaleString()}
                    <span className="text-[var(--accent-yellow)]">+</span>
                  </p>
                  <p className="text-xs md:text-sm text-text-white font-medium">
                    {key === "x"
                      ? "Redes Sociales"
                      : key.split(/(?=[A-Z])/).join(" ")}
                  </p>
                </div>
              ))}
            </div>

            {/* Estadísticas 2024 */}
            <div className="p-6 md:p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-center text-[var(--text-white)] mb-6 md:mb-8">
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
                    className="p-4 rounded-xl bg-gradient-to-b from-[var(--primary-green)]/10 to-transparent"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-[var(--accent-yellow)] mb-1">
                      {stat.value.toLocaleString()}
                    </p>
                    <p className="text-sm md:text-base text-text-white">
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
      <FeatureGuard featureName="sponsorForm">
        <section id="contact-form" className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-[var(--text-white)]">
              ¿Interesado en patrocinar?
            </h2>
            <div className="p-8 sm:p-12">
              <SponsorForm contactEmail={contact.email} />
            </div>
          </div>
        </section>
      </FeatureGuard>
      {/* FIXME: Escondido mientras no haya formulario. */}
      {/* 
      <CTAFinal
        title="Contáctanos"
        subtitle={`Escríbenos a ${contact.email} o visita ${contact.website}`}
        buttonText="Enviar mensaje"
        email={contact.email}
      /> */}
      <FAQSection faqs={sponsorshipFAQs} />
    </>
  );
}
