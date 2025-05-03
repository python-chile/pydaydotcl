'use client';

import { useSearchParams } from 'next/navigation';

// Componente de cliente que maneja la lógica de cliente
function MaintenanceBannerClient({ message }) {
  if (!message) return null;

  return (
    <div className="bg-[var(--primary-green)]/20 border-l-4 border-[var(--accent-yellow)] p-4 mb-8 text-center animate-fade-in">
      <p className="text-[var(--accent-yellow)] font-semibold">
        {decodeURIComponent(message)}
      </p>
    </div>
  );
}

// Componente principal que utiliza client boundary
export function MaintenanceBanner() {
  const searchParams = useSearchParams();
  const message = searchParams.get('maintenance');
  
  return <MaintenanceBannerClient message={message} />;
}