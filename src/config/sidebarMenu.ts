import {
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  PieChart,
  Map,
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Atlas",
      logo: "Globe",
      plan: "Hoteleria",
    },
    {
      name: "Medusa",
      logo: "Network",
      plan: "BTB",
    },
    {
      name: "Cerbero",
      logo: "Dog",
      plan: "BTB",
    },
    {
      name: "Thor",
      logo: "Zap",
      plan: "BTC",
    },
    {
      name: "Interno",
      logo: "Home",
      plan: "Cliente Interno",
    },
  ],
  menuByTeam: {
    Atlas: {
      navMain: [
        {
          title: "Reservas",
          url: "/atlas/reservas",
          icon: SquareTerminal,
          isActive: true,
          items: [
            { title: "Historial", url: "/atlas/reservas/historial" },
            { title: "Calendario", url: "/atlas/reservas/calendario" },
          ],
        },
        {
          title: "Hoteles",
          url: "/atlas/hoteles",
          icon: Bot,
          items: [
            { title: "Listado", url: "/atlas/hoteles/listado" },
            { title: "Nuevo hotel", url: "/atlas/hoteles/nuevo" },
          ],
        },
      ],
      projects: [
        {
          name: "Historial de actualizaciones",
          url: "/dashboard",
          icon: Frame,
        },
        {
          name: "Turismo Local",
          url: "/atlas/proyectos/turismo",
          icon: Map,
        },
      ],
    },

    Medusa: {
      navMain: [
        {
          title: "Reportes BTB",
          url: "/medusa/reportes",
          icon: BookOpen,
          isActive: true,
          items: [
            { title: "Ventas", url: "/medusa/reportes/ventas" },
            { title: "Proveedores", url: "/medusa/reportes/proveedores" },
          ],
        },
        {
          title: "Integraciones",
          url: "/medusa/integraciones",
          icon: Settings2,
          items: [
            { title: "API Partners", url: "/medusa/integraciones/api" },
            { title: "Logs", url: "/medusa/integraciones/logs" },
          ],
        },
      ],
      projects: [
        {
          name: "BTB Regional",
          url: "/medusa/proyectos/regional",
          icon: PieChart,
        },
      ],
    },
  },
};
