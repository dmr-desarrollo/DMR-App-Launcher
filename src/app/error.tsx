'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Algo salió mal</h2>
      <p className="text-muted-foreground mb-6">
        Ocurrió un error inesperado al cargar la aplicación.
      </p>
      <Button onClick={() => reset()}>Intentar de nuevo</Button>
    </div>
  );
}
