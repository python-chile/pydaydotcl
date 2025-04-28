'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  // Manejador para cerrar el menú
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
    
    // Listener solo cuando el menú está abierto
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    
    // Limpieza al desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Manejador para cerrar el menú
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-py-dark/90 to-py-dark/80 border-b border-py-green/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/logo.webp" 
                alt="PyDay Logo" 
                width={32} 
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-py-text font-bold text-xl tracking-tight">PyDay Chile 2025</span>
          </Link>
          
          {/* Menú para móvil */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-py-text p-2 hover:bg-py-green/20 rounded-md transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Menú para desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-py-text hover:text-py-yellow transition-colors">Inicio</Link>
            <Link href="/talks" className="text-py-text hover:text-py-yellow transition-colors">Charlas</Link>
            <Link href="/multimedia" className="text-py-text hover:text-py-yellow transition-colors">Multimedia</Link>
            <Link href="/previous-editions" className="text-py-text hover:text-py-yellow transition-colors">Ediciones Anteriores</Link>
            <Link href="/register" className="px-4 py-2 bg-py-green text-py-text hover:bg-py-green/80 transition-colors rounded-full font-medium">Registrarse</Link>
          </nav>
        </div>
        
        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden absolute left-0 right-0 top-full bg-py-dark/95 backdrop-blur-lg border-t border-py-green/30 shadow-lg animate-fadeIn"
          >
            <nav className="flex flex-col py-3">
              <Link href="/" onClick={handleLinkClick} className="px-6 py-3 text-py-text hover:bg-py-green/20 transition-colors">Inicio</Link>
              <Link href="/talks" onClick={handleLinkClick} className="px-6 py-3 text-py-text hover:bg-py-green/20 transition-colors">Charlas</Link>
              <Link href="/multimedia" onClick={handleLinkClick} className="px-6 py-3 text-py-text hover:bg-py-green/20 transition-colors">Multimedia</Link>
              <Link href="/previous-editions" onClick={handleLinkClick} className="px-6 py-3 text-py-text hover:bg-py-green/20 transition-colors">Ediciones Anteriores</Link>
              <Link href="/register" onClick={handleLinkClick} className="mx-6 my-3 px-4 py-2 bg-py-green text-py-text hover:bg-py-green/80 transition-colors rounded-full font-medium text-center">Registrarse</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}