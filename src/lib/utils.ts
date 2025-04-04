import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Globe, Network, Dog, Zap, Home, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Network,
  Dog,
  Zap,
  Home,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIconByName(name: string): LucideIcon | null {
  return iconMap[name] || null;
}
