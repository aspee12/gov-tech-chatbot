'use client';

import { useRouter } from 'next/navigation';
import { MessageSquare, Building2, HeartPulse, Landmark } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const chatbots = [
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
      name: "MOH",
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

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="size-12 text-slate-700" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Gov Tech Chatbot Portal
          </h1>
          <p className="text-lg text-slate-600">
            Select a chatbot to start your conversation
          </p>
        </div>

        {/* Chatbot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chatbots.map((bot) => {
            const Icon = bot.icon;
            return (
              <button
                key={bot.id}
                onClick={() => router.push(`/${bot.id}`)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${bot.color} ${bot.hoverColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`relative mb-6 w-20 h-20 mx-auto rounded-2xl bg-linear-to-br ${bot.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="size-10 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {bot.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {bot.description}
                  </p>
                  <div className="flex items-center justify-center text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                    <span>Open Chat</span>
                    <svg
                      className="ml-2 size-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Intelligent Chat • Built on Flowise AI
          </p>
        </div>
      </div>
    </div>
  );
}