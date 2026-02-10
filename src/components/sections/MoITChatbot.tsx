'use client';

import { ArrowLeft, Building2 } from 'lucide-react';
import { useEffect } from 'react';

export default function MoITChatbot() {
  
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

    script.onload = () => {
      // @ts-ignore
      window.Chatbot.init({
        chatflowid: "ba354c53-d0ed-4d27-9d4d-3f2e9e795fa6",
        apiHost: "https://chatbot.tech.gov.bt",

        theme: {
          chatWindow: {
            showTitle: true,
            title: "MoIT AI Chatbot",
            welcomeMessage:
              "Kuzuzangpo la! 👋 I am MoIT AI Assistant. How can I help you today?",
            titleAvatarSrc:
              "https://tech.gov.bt/wp-content/uploads/2025/09/logo.png",
            botMessage: {
              showAvatar: true,
              avatarSrc:
                "https://tech.gov.bt/wp-content/uploads/2025/09/logo.png",
            },
          },
          disclaimer: {
            title: "Disclaimer",
            message: `<p style="text-align:justify">Responses are generated automatically by AI based on your input, and we cannot guarantee that the information will be complete, accurate, or up-to-date.
                      <br/>Accordingly, the information provided by the Chatbot should not be considered as a basis for production workloads.
                      <br/>You are solely responsible for the interactions and reliance on the information provided by the Chatbot, as well as for any actions taken or not taken.
                      <br/><b>AI-generated content may be inaccurate. Please validate before making decisions.</b></p>`,
            buttonText: "Start Chatting",
          },
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">MoIT Chatbot</h1>
                <p className="text-sm text-slate-600">Ministry of IT</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-600">Online</span>
          </div>
        </div>
      </div>

      {/* Chatbot Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-6">
        <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col border border-blue-100">
          {/* Info Section */}
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">MoIT Chatbot</h2>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Welcome to the Ministry of Information and Technology (MoIT) virtual assistant. This chatbot
              is designed to help citizens, businesses, and stakeholders quickly access information related
              to MoIT services, digital initiatives, policies, and online systems.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <p className="text-sm font-mono text-blue-900 mb-2">What you can ask the MoIT Chatbot</p>
              <ul className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
                <li>Information about MoIT services and departments</li>
                <li>Guidance on digital government platforms and systems</li>
                <li>ICT policies, guidelines, and procedures</li>
                <li>Frequently asked questions related to MoIT initiatives</li>
                <li>General support and directions to relevant resources</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-500 max-w-xl mx-auto">
              This chatbot provides general information for guidance purposes only. For official confirmation or sensitive matters, please contact MoIT directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
