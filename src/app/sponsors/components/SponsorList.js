"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SponsorLogo from "@/app/sponsors/components/SponsorLogo";
import sponsorsData from "@/data/sponsors";

function SponsorGrid({ items, importance }) {
  // Reducimos significativamente el padding
  const paddingByImportance = {
    large: "p-3 md:p-4",   // Patrocinadores: padding reducido
    medium: "p-2 md:p-3", // Organizadores: padding reducido
    small: "p-1 md:p-2",  // Comunidades amigas: padding mínimo
  };

  const padding = paddingByImportance[importance] || "p-3 md:p-4";

  // Determinamos las columnas y justificación basándose en la cantidad de items
  const getGridClasses = (itemCount) => {
    if (itemCount === 1) {
      return "grid-cols-1 justify-items-center";
    } else if (itemCount === 2) {
      return "grid-cols-1 sm:grid-cols-2 justify-items-center";
    } else if (itemCount === 3) {
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center";
    } else {
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center";
    }
  };

  return (
    <div
      className={`
        relative z-10 p-4 md:p-6
        grid ${getGridClasses(items.length)}
        gap-3 md:gap-4 lg:gap-5
        ${items.length < 4 ? "max-w-4xl mx-auto" : ""}
      `}
    >
      {items.map((sponsor) => (
        <SponsorLogo
          key={sponsor._id}
          src={sponsor.logo.asset.url}
          alt={sponsor.name}
          url={sponsor.url || ""}
          importance={importance} // Pasamos la importancia al componente
          className={`group relative ${padding} 
            bg-gradient-to-br from-[var(--primary-green)]/8 via-[var(--accent-yellow)]/5 to-[var(--primary-green)]/8
            backdrop-blur-lg rounded-xl transition-all duration-500 hover:duration-300
            hover:shadow-[0_0_40px_-10px_rgba(61,139,55,0.4)]
            border-2 border-[var(--primary-green)]/20 hover:border-[var(--accent-yellow)]/40
            transform-gpu hover:-translate-y-2 cursor-pointer w-full max-w-[200px]`}
        />
      ))}
    </div>
  );
}

function SponsorSection({ title, year, items, importance = "medium" }) {
  const titleSizes = {
    large: "text-4xl md:text-4xl",
    medium: "text-3xl md:text-4xl",
    small: "text-2xl md:text-3xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto bg-gradient-to-br from-[var(--primary-green)]/15 via-[var(--accent-yellow)]/10 to-[var(--outline-red)]/15
        backdrop-blur-md rounded-3xl border border-[var(--primary-green)]/30
        shadow-[0_0_80px_-15px_rgba(61,139,55,0.35)] transition-shadow duration-500 relative"
    >
      {/* Fondos decorativos sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,225,65,0.15),transparent_70%)] rounded-3xl z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(61,139,55,0.15),transparent_70%)] rounded-3xl z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(242,57,57,0.08),transparent_60%)] rounded-3xl z-0" />

      {/* Título de la sección */}
      <div className="relative z-10 text-center mb-4 pt-6">
        <h2
          className={`font-bold text-[var(--text-white)] mb-2 ${titleSizes[importance]}`}
        >
          <span className="border-b-4 border-[var(--primary-green)] pb-2">
            {title}
          </span>
        </h2>
        <p className="text-text-white">{year}</p>
      </div>

      {/* Grid de logos con padding dinámico */}
      <SponsorGrid items={items} importance={importance} />
    </motion.div>
  );
}

export default function SponsorList({ 
  showSponsors = true, 
  showOrganizers = true, 
  showCommunities = true,
  sponsors: sponsorsProp 
}) {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    // Si se pasa sponsors como prop, úsalos, sino usa los datos por defecto
    setSponsors(sponsorsProp || sponsorsData);
  }, [sponsorsProp]);

  // Filtrar según las props
  const organizers = showOrganizers ? sponsors.filter((s) => s.type === "organizer") : [];
  const sponsorsOnly = showSponsors ? sponsors.filter((s) => s.type === "sponsor") : [];
  const communities = showCommunities ? sponsors.filter((s) => s.type === "community") : [];

  // Verificar si hay al menos una sección para mostrar
  const hasAnySponsors = sponsorsOnly.length > 0 || organizers.length > 0 || communities.length > 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container-py relative"
    >
      {hasAnySponsors ? (
        <div className="space-y-16">
          {sponsorsOnly.length > 0 && (
            <SponsorSection
              title="Patrocinadores"
              year="2025"
              items={sponsorsOnly}
              importance="large"
            />
          )}

          {organizers.length > 0 && (
            <SponsorSection
              title="Organizadores"
              year="2025"
              items={organizers}
              importance="medium"
            />
          )}

          {communities.length > 0 && (
            <SponsorSection
              title="Comunidades Amigas"
              year="2025"
              items={communities}
              importance="small"
            />
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <p className="text-xl md:text-2xl text-[var(--accent-yellow)] italic font-semibold">
            ¡Próximamente anunciaremos a nuestros patrocinadores!
          </p>
          <div className="mt-4 h-1 w-24 mx-auto bg-[var(--primary-green)]/40 rounded-full" />
        </motion.div>
      )}
    </motion.section>
  );
}

