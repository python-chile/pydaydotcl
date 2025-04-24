"use client";
import { useEffect, useState } from "react";

const MapSection = ({ city }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Resetear estado al cambiar ciudad
  useEffect(() => {
    setMapLoaded(false);
  }, [city.embedMap]);

  return (
    <div className="bg-black/20 backdrop-blur rounded-lg overflow-hidden">
      <div className="relative aspect-video">
        {/* Renderiza el iframe desde el inicio */}
        <iframe
          key={city.embedMap}
          className="absolute inset-0"
          src={city.embedMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setMapLoaded(true)}
        ></iframe>
        {/* Muestra el placeholder hasta que el mapa se haya cargado */}
        {!mapLoaded && (
          <div className="absolute inset-0 bg-gray-800/70 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-8 h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="mt-2 text-sm text-gray-300">Cargando mapa...</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <a
          href={city.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline flex items-center justify-center space-x-2"
        >
          <span>Ver en Google Maps</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MapSection;
