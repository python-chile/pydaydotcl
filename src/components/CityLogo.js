'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CityLogo({ cityName, logoPath, size = 'md' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [logoPath]);

  const logoSizes = {
    sm: { container: 'w-24 h-24', padding: 'p-2' },
    md: { container: 'w-32 h-32 md:w-40 md:h-40', padding: 'p-3' },
    lg: { container: 'w-40 h-40 md:w-48 md:h-48', padding: 'p-4' }
  };

  const { container, padding } = logoSizes[size] || logoSizes.md;

  const renderPlaceholder = () => {
    const nameParts = `PyDay ${cityName}`.split(' ');
    const initials = nameParts.map(part => part[0]).join('');

    return (
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full text-white">
        <span className="text-2xl md:text-4xl font-bold">{initials}</span>
      </div>
    );
  };

  return (
    <div 
      className={`relative ${container} bg-black/40 backdrop-blur rounded-full ${padding} shadow-lg transition-transform duration-300 hover:scale-105`}
    >
      {!error ? (
        <Image
          src={logoPath}
          alt={`Logo PyDay ${cityName}`}
          fill
          className={`object-contain p-3 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      ) : renderPlaceholder()}
      
      {/* Efecto de carga mientras la imagen se está cargando */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-300"></div>
        </div>
      )}
    </div>
  );
}