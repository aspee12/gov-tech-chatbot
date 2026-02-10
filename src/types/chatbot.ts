import { LucideIcon } from 'lucide-react';

export interface Chatbot {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  hoverColor: string;
}