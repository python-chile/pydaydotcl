'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/30 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 relative">
              <Image 
                src="/images/logo.webp" 
                alt="PyDay Chile Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            <span className="text-xl font-bold">PyDay Chile 2025</span>
          </Link>
          
          {/* Menú para móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Menú para desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-green-400 transition">Inicio</Link>
            <Link href="/multimedia" className="text-white hover:text-green-400 transition">Multimedia</Link>
            <Link href="/previous-editions" className="text-white hover:text-green-400 transition">Ediciones Anteriores</Link>
            <Link href="#registro" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition">Registrarse</Link>
          </nav>
        </div>
        
        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-green-400 transition">Inicio</Link>
              <Link href="/multimedia" className="text-white hover:text-green-400 transition">Multimedia</Link>
              <Link href="/previous-editions" className="text-white hover:text-green-400 transition">Ediciones Anteriores</Link>
              <Link href="#registro" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition text-center">Registrarse</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}