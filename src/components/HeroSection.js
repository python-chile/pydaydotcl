"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  title,
  subtitle,
  background = "bg-gradient-to-b from-green-900/40 to-black/60",
  backButton = false,
  image,
  motionConfig = { initial: { opacity: 1 }, animate: { opacity: 1 } },
  children,
}) {
  const Container = backButton || image ? motion.div : motion.section;

  return (
    <Container
      {...motionConfig}
      className={`relative min-h-[40vh] flex flex-col justify-center items-center text-center mt-8 px-4`}
    >
      {/* Botón de regreso parte superior */}
      {backButton && (
        <div className="absolute top-4 left-4 z-10">
          <Link
            href="/"
            className="flex items-center space-x-2 bg-black/50 backdrop-blur px-4 py-2 rounded-full text-white hover:bg-black/70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Volver</span>
          </Link>
        </div>
      )}

      {/* Contenedor para imagen de fondo */}
      {image && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
          {/* Capa de gradiente para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/11 to-black/33"></div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-4xl mx-auto py-8 flex flex-col items-center justify-center">
        {/* Título */}
        {title && (
          <div className="mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {title}
            </h1>
          </div>
        )}

        {/* Subtítulo */}
        {subtitle && (
          <div className="mb-6">
            <p className="text-xl md:text-2xl opacity-90">{subtitle}</p>
          </div>
        )}

        {/* Contenido hijo (children) - Logo de ciudad, fechas, etc. */}
        <div className="mt-4">{children}</div>
      </div>
    </Container>
  );
}
