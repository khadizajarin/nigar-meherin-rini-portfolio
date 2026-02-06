// src/lib/iconMap.ts
import { Briefcase, Tv, Users, Newspaper, PenTool } from "lucide-react";

export const iconMap = {
  briefcase: Briefcase,
  tv: Tv,
  users: Users,
  newspaper: Newspaper,
  pentool: PenTool,
};

export type IconKey = keyof typeof iconMap;
