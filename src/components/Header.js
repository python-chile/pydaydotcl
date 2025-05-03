"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const isToggleButton = buttonRef.current?.contains(event.target);

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !isToggleButton &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Manejador para cerrar el menú
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logos/logo.webp"
                alt="PyDay Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-py-text font-bold text-xl tracking-tight">
              PyDay Chile 2025
            </span>
          </Link>

          {/* Menú para móvil */}
          <div className="block md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-py-text p-2 rounded-md transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menú para desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className="text-py-text hover:text-accent-yellow transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/sponsors"
              className="text-py-text hover:text-accent-yellow transition-colors"
            >
              Patrocinio
            </Link>
            <Link
              href="/talks"
              className="text-py-text hover:text-accent-yellow transition-colors"
            >
              Charlas
            </Link>
            <Link
              href="/multimedia"
              className="text-py-text hover:text-accent-yellow transition-colors"
            >
              Multimedia
            </Link>
            <Link
              href="/previous"
              className="text-py-text hover:text-accent-yellow transition-colors"
            >
              Ediciones Anteriores
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-py-text font-bold transition-colors rounded-full font-medium"
            >
              Registrarse
            </Link>
          </nav>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden mobile-menu-container animate-fadeIn"
          >
            <nav className="flex flex-col py-3">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="px-6 py-3 text-py-text font-bold transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/sponsors"
                onClick={handleLinkClick}
                className="px-6 py-3 text-py-text font-bold transition-colors"
              >
                Patrocinio
              </Link>
              <Link
                href="/talks"
                onClick={handleLinkClick}
                className="px-6 py-3 text-py-text font-bold transition-colors"
              >
                Charlas
              </Link>
              <Link
                href="/multimedia"
                onClick={handleLinkClick}
                className="px-6 py-3 text-py-text font-bold transition-colors"
              >
                Multimedia
              </Link>
              <Link
                href="/previous"
                onClick={handleLinkClick}
                className="px-6 py-3 text-py-text font-bold transition-colors"
              >
                Ediciones Anteriores
              </Link>
              <Link
                href="/register"
                onClick={handleLinkClick}
                className="mx-6 my-3 px-4 py-2 text-py-text border border-white/20 hover:bg-white/10 transition-colors rounded-full font-medium text-center"
              >
                Registrarse
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
