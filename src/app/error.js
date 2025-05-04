"use client";

import { useEffect } from "react";
import { pressStart2P } from "./fonts";
import Image from "next/image";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);

    document.body.classList.add("not-found-active");

    return () => {
      document.body.classList.remove("not-found-active");
    };
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full backdrop-blur-sm bg-py-dark/11 rounded-2xl p-8 border border-white/15 fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="logo-container logo-entrance relative w-24 h-24">
            <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center logo-pulse">
              <Image
                src="/images/logos/logo.webp"
                alt="PyDay Chile 2025 Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Título del error */}
        <h1
          className={`${pressStart2P.className} text-center text-xl md:text-2xl mb-4 text-py-yellow`}
        >
          ¡Ups! Algo salió mal
        </h1>

        {/* Mensaje de error */}
        <p className="text-center mb-6 text-py-text">
          Parece que hemos encontrado un error inesperado. No te preocupes, los
          mejores Pythonistas están trabajando para solucionarlo.
        </p>

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
          <Link href="/" className="text-py-yellow hover:underline ml-1">
            Haz clic aquí
          </Link>
        </p>
      </div>
    </div>
  );
}
