'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({
  title,
  subtitle,
  background = 'bg-gradient-to-b from-green-900/40 to-black/60',
  backButton = false,
  image,
  motionConfig = { initial: { opacity: 1 }, animate: { opacity: 1 } },
  children
}) {
  const Container = backButton || image ? motion.div : motion.section;

  return (
    <Container
      {...motionConfig}
      className={`relative min-h-[40vh] flex flex-col justify-center items-center text-center mt-8 px-4 backdrop-blur`}
    >
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Volver</span>
          </Link>
        </div>
      )}

      {image && (
        <div className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
            {children}
          </div>
        </div>
      )}

      {!image && (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
          {children}
        </div>
      )}
    </Container>
  );
}