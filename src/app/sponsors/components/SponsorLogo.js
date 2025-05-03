"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SponsorLogo({ src, alt, className }) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Hover: Efecto de resplandor */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-green)]/10 via-[var(--accent-yellow)]/15 to-[var(--primary-green)]/10 
        rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-0" />
      
      {/* Contenedor de imagen */}
      <div className="relative z-10 p-2">
        <Image
          src={src}
          alt={alt}
          width={160}
          height={80}
          className="mx-auto transform-gpu transition-all duration-500
            filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]
            group-hover:scale-105 group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]
            group-hover:brightness-110"
          style={{
            filter: "brightness(115%) contrast(105%)",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      
      {/* Halo sutil alrededor del logo */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-all duration-300
        bg-[radial-gradient(circle_at_center,var(--accent-yellow),transparent_70%)]" />
      
      {/* Efecto de partículas sutil */}
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-20
          transition-opacity duration-500 pointer-events-none rounded-2xl z-0"
      >
        <div
          className="absolute w-full h-full mix-blend-overlay opacity-40 rounded-2xl"
        />
      </div>
    </motion.div>
  );
}