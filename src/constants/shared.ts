import { Building2, Cpu, HeartPulse, Landmark, Sprout } from 'lucide-react';
import { Chatbot } from '@app-types/chatbot';

export const chatBots: Chatbot[] = [
    {
      id: "govtech",
      name: "GovTech",
      description: "Government Technology Agency",
      icon: Cpu,
      color: "from-cyan-500 to-cyan-600",
      hoverColor: "hover:from-cyan-600 hover:to-cyan-700",
    },
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
    {
      id: "moal",
      name: "MoAL",
      description: "Ministry of Agriculture and Livestock",
      icon: Sprout,
      color: "from-lime-500 to-lime-600",
      hoverColor: "hover:from-lime-600 hover:to-lime-700",
    },
  ];