import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenedor de imagen full screen */}
      <div className="flex-1 relative w-full h-[calc(100vh-160px)]">
        <Image
          src="/images/404status_transp.svg"
          alt="Error 404 - Página no encontrada"
          fill
          className="object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      {/* Botón posicionado absolutamente */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <Link
          href="/"
          className="btn-primary inline-flex items-center px-8 py-3 text-lg transition-transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
