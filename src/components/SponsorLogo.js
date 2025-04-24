"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SponsorLogo({ src, alt }) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="relative w-32 aspect-square transition-transform duration-300 hover:scale-105"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="300px"
      />
    </motion.div>
  );
}
