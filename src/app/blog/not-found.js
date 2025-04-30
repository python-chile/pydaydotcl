import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-2xl w-full relative aspect-video mb-8">
          <Image
            src="/404status_transp.svg"
            alt="Error 404 - Página no encontrada"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="space-y-6">
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
    </Suspense>
  );
}