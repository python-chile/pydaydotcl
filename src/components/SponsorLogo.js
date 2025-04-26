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
      <Image
        src={src}
        alt={alt}
        width={160}
        height={80}
        className="mx-auto transform-gpu transition-all duration-500 
          group-hover:scale-105 group-hover:saturate(150)"
        style={{
          filter: "brightness(115%) contrast(125%)",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 95%)",
        }}
      />

      {/* Efecto de partículas sutil */}
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-20 
        transition-opacity duration-500 pointer-events-none"
      >
        <div
          className="absolute w-full h-full bg-[url('/noise.png')] 
          mix-blend-overlay opacity-50"
        />
      </div>
    </motion.div>
  );
}
