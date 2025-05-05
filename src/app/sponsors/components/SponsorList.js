"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SponsorLogo from "@/app/sponsors/components/SponsorLogo";
import sponsorsData from "@/data/sponsors";

export default function SponsorList() {
  const [sponsors, setSponsors] = useState([]);
  
  useEffect(() => {
    setSponsors(sponsorsData);
  }, []);

  const hasSponsors = sponsors.length > 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container-py relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-white)] mb-4">
          <span className="border-b-4 border-[var(--primary-green)] pb-2">
            Patrocinadores
          </span>
        </h2>
        <p className="text-text-white">2025</p>
      </div>

      {hasSponsors ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-[var(--primary-green)]/15 via-[var(--accent-yellow)]/10 to-[var(--outline-red)]/15
            backdrop-blur-md rounded-3xl border border-[var(--primary-green)]/30
            shadow-[0_0_80px_-15px_rgba(61,139,55,0.35)] hover:shadow-[0_0_100px_-20px_rgba(61,139,55,0.45)]
            transition-shadow duration-500"
        >
          {/* Capas de luminosidad */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,225,65,0.15),transparent_70%)] rounded-3xl z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(61,139,55,0.15),transparent_70%)] rounded-3xl z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(242,57,57,0.08),transparent_60%)] rounded-3xl z-0" />

          {/* Grid de sponsors */}
          <div className="relative z-10 p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {sponsors.map((sponsor) => (
              <SponsorLogo
                key={sponsor._id}
                src={sponsor.logo.asset.url}
                alt={sponsor.name}
                url={sponsor.url || ""}
                className="group relative p-4 md:p-6 bg-gradient-to-br from-[var(--primary-green)]/8 via-[var(--accent-yellow)]/5 to-[var(--primary-green)]/8
                  backdrop-blur-lg rounded-2xl transition-all duration-500 hover:duration-300
                  hover:shadow-[0_0_40px_-10px_rgba(61,139,55,0.4)]
                  border-2 border-[var(--primary-green)]/20 hover:border-[var(--accent-yellow)]/40
                  transform-gpu hover:-translate-y-2 cursor-pointer"
              />
            ))}
          </div>
        </motion.div>
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