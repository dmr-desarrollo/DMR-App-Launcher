import type { LucideIcon } from 'lucide-react';
import { FileText, TrendingUp, CheckCircle2, ShoppingCart, Phone, AppWindow } from 'lucide-react';

export type AppConfig = {
  name: string;
  url: string;
  icon: LucideIcon;
  description: string;
};

export const apps: AppConfig[] = [
    {
        name: "DMR Proyectos",
        url: "https://studio--proyectum.us-central1.hosted.app/",
        icon: FileText,
        description: "Gestión y seguimiento de proyectos."
    },
    {
        name: "Tickets IT",
        url: "https://studio--activity-compass-qiuxy.us-central1.hosted.app/",
        icon: TrendingUp,
        description: "Sistema de tickets para soporte de TI."
    },
    {
        name: "Registro de Soporte",
        url: "https://studio--tech-support-tracker.us-central1.hosted.app/",
        icon: CheckCircle2,
        description: "Registro de actividades de soporte técnico."
    },
    {
        name: "Compras DMR",
        url: "https://studio--compras-dmr.us-central1.hosted.app/",
        icon: ShoppingCart,
        description: "Plataforma para gestión de compras."
    },
    {
        name: "DMR Contact Center",
        url: "https://studio--dmr-connect.us-central1.hosted.app/",
        icon: Phone,
        description: "Herramientas para el centro de contacto."
    }
];

export const appIcon: LucideIcon = AppWindow;
