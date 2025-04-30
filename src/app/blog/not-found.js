import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div className="container text-center py-20">
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <p className="text-lg">La página que buscas no existe.</p>
      </div>
    </Suspense>
  );
}