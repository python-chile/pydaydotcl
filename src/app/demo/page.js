'use client';

import { useEffect } from "react";
import { pressStart2P } from "../fonts";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center max-w-4xl mx-auto">
      <div className="relative w-48 h-48 mb-8">
        <Image
                src="/images/logos/logo.webp"
                alt="PyDay Chile 2025 Logo"
                fill
                className="object-contain"
              />
            </div>
        
            <div className="w-full md:w-3/4 lg:w-2/3">
        {/* Título del error */}
        <h1
          className={`${pressStart2P.className} text-center text-xl md:text-2xl mb-4 text-py-yellow`}
        >
          ¡Ups! Algo salió mal
        </h1>
        
        {/* Mensaje de error */}
        <p className="text-center mb-6 text-py-text">
          Parece que hemos encontrado un error inesperado. No te preocupes, las
          mejores Pythonistas están trabajando para solucionarlo.
        </p>
        
        {/* Ilustración del error */}
        <div className="py-4 flex justify-center">
          <div className="relative text-center text-6xl animate-bounce">🐞</div>
        </div>
        
        {/* Botón para intentar de nuevo */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => reset()}
            className="btn-primary flex items-center gap-2 group"
          >
            <span>Intentar nuevamente</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
        
        {/* Footer específico */}
        <p className="text-center text-sm mt-8 text-py-text/70">
          ¿Quieres volver a la página principal de PyDay 2025?
          <a href="/" className="text-py-yellow hover:underline ml-1">
            Haz clic aquí
          </a>
        </p>
      </div>
      </div>
  );
}