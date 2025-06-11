"use client";
import { motion } from "framer-motion";
import SponsorLogo from "@/app/sponsors/components/SponsorLogo";
import sponsorsData from "@/data/sponsors";

const cityNameMap = {
  santiago: "Santiago",
  valparaiso: "Valparaíso",
  copiapo: "Copiapó",
  // agregar aquí más ciudades si se suman mas
};

function CitySponsorGrid({ items, importance, title }) {
  const paddingByImportance = {
    large: "p-3 md:p-4",
    medium: "p-2 md:p-3",
    small: "p-1 md:p-2",
  };

  const padding = paddingByImportance[importance] || "p-2 md:p-3";

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
    <div className="mb-6 md:mb-8">
      {/* Título de la subsección */}
      <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-4 text-center">
        {title}
      </h3>

      {/* Grid de logos */}
      <div
        className={`
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
            importance={importance}
            className={`group relative ${padding} 
              bg-gradient-to-br from-[var(--primary-green)]/8 via-[var(--accent-yellow)]/5 to-[var(--primary-green)]/8
              backdrop-blur-lg rounded-xl transition-all duration-500 hover:duration-300
              hover:shadow-[0_0_40px_-10px_rgba(61,139,55,0.4)]
              border-2 border-[var(--primary-green)]/20 hover:border-[var(--accent-yellow)]/40
              transform-gpu hover:-translate-y-2 cursor-pointer w-full max-w-[200px]`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CitySponsorList({ cityName }) {
  // Filtrar patrocinadores por ciudad
  const citySponsors = sponsorsData.filter((sponsor) =>
    sponsor.cities && sponsor.cities.includes(cityName.toLowerCase())
  );

  // Separar por tipo
  const organizers = citySponsors.filter((s) => s.type === "organizer");
  const sponsorsOnly = citySponsors.filter((s) => s.type === "sponsor");
  const communities = citySponsors.filter((s) => s.type === "community");

  // Si no hay patrocinadores específicos para esta ciudad, no mostrar nada
  if (citySponsors.length === 0) {
    return null;
  }

  // Nombre bonito para mostrar
  const displayCityName = cityNameMap[cityName.toLowerCase()] || cityName;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container-py"
    >
      <div className="bg-black/20 backdrop-blur rounded-lg p-6 md:p-8">
        <div
          className="bg-gradient-to-br from-[var(--primary-green)]/15 via-[var(--accent-yellow)]/10 to-[var(--outline-red)]/15
          backdrop-blur-md rounded-3xl border border-[var(--primary-green)]/30
          shadow-[0_0_80px_-15px_rgba(61,139,55,0.35)] transition-shadow duration-500 relative p-6 md:p-8"
        >
          {/* Fondos decorativos sutiles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,225,65,0.15),transparent_70%)] rounded-3xl z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(61,139,55,0.15),transparent_70%)] rounded-3xl z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(242,57,57,0.08),transparent_60%)] rounded-3xl z-0" />

          {/* Título principal */}
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <span className="border-b-4 border-[var(--primary-green)] pb-2">
                Apoyan este evento:
              </span>
            </h2>
            <p className="text-white/90 text-xl md:text-2xl font-semibold tracking-wide">
              PyDay {displayCityName} 2025
            </p>
          </div>

          {/* Contenido de patrocinadores */}
          <div className="relative z-10 space-y-8">
            {/* Patrocinadores principales */}
            {sponsorsOnly.length > 0 && (
              <CitySponsorGrid
                items={sponsorsOnly}
                importance="large"
                title="Patrocinadores"
              />
            )}

            {/* Organizadores */}
            {organizers.length > 0 && (
              <CitySponsorGrid
                items={organizers}
                importance="medium"
                title="Organizadores"
              />
            )}

            {/* Comunidades amigas */}
            {communities.length > 0 && (
              <CitySponsorGrid
                items={communities}
                importance="small"
                title="Comunidades Amigas"
              />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
