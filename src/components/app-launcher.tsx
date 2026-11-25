"use client";

import { apps } from '@/lib/apps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AppLauncher() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">DMR HUB</h1>
          <p className="text-xl text-muted-foreground">Selecciona una aplicación para empezar</p>
        </header>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  <CardHeader className="flex flex-row items-center gap-4 p-6">
                    <div className="p-3 bg-destructive/10 rounded-lg">
                      <app.icon className="w-8 h-8 text-destructive" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{app.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </main>
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 DMR Corp.</p>
        </footer>
      </div>
    </div>
  );
}
