'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center font-sans">
        <h2 className="text-2xl font-bold mb-2">Error crítico de la aplicación</h2>
        <p className="text-muted-foreground mb-6">
          Ocurrió un error inesperado. Por favor, intenta recargar la página.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}
