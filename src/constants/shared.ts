import { Building2, HeartPulse, Landmark } from 'lucide-react';
import { Chatbot } from '@app-types/chatbot';

export const chatBots: Chatbot[] = [
    {
      id: "moit",
      name: "MoIT",
      description: "Ministry of IT Chatbot",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      id: "moh",
      name: "MoH",
      description: "Ministry of Health Chatbot",
      icon: HeartPulse,
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
    },
    {
      id: "nlcs",
      name: "NLCS",
      description: "National Land Commission Secretariat",
      icon: Landmark,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
    },
  ];