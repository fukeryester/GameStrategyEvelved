import { LucideIcon } from 'lucide-react';

export interface TeamMember {
  role: string;
  background: string;
  icon: LucideIcon;
  stats: { label: string; value: number }[]; // Just for visual flavor
}

export interface StrategyPoint {
  title: string;
  description: string;
}

export interface Phase {
  id: string;
  title: string;
  duration: string;
  subtitle: string;
  color: string;
  goal: string;
  keyActions: {
    title: string;
    items: string[];
  }[];
  outcomes: string[];
}
