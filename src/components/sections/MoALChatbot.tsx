'use client';

import { ArrowLeft, Sprout } from 'lucide-react';
import { useEffect } from 'react';

export default function MoALChatbot() {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

    script.onload = () => {
      // @ts-ignore
      window.Chatbot.init({
        chatflowid: "1ab7f0d1-2cc2-4083-ae48-c32c346a85c3",
        apiHost: "https://chatbot.tech.gov.bt",

        theme: {
          button: {
            backgroundColor: "#65a30d"
          },
          chatWindow: {
            showTitle: true,
            title: "MoAL AI Chatbot",
            welcomeMessage:
              "Kuzuzangpo la! 👋 I am MoAL AI Assistant. How can I help you today?",
            titleAvatarSrc: "https://tech.gov.bt/wp-content/uploads/2025/09/logo.png",
            botMessage: {
              showAvatar: true,
              avatarSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/MoAL_Logo.jpg",
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
    <div className="min-h-screen bg-linear-to-br from-lime-50 to-lime-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-lime-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="p-2 hover:bg-lime-50 rounded-lg transition-colors cursor-pointer">
              <ArrowLeft className="size-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-lime-500 to-lime-600 flex items-center justify-center shadow-md">
                <Sprout className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  MoAL Chatbot
                </h1>
                <p className="text-sm text-slate-600">Ministry of Agriculture and Livestock</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-slate-600">Online</span>
          </div>
        </div>
      </div>

      {/* Chatbot Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-6">
        <div className="bg-white rounded-2xl shadow-xl h-full flex items-center justify-center border border-lime-100">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-lime-500 to-lime-600 flex items-center justify-center shadow-lg">
              <Sprout className="size-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              MoAL Chatbot
            </h2>
            <p className="text-slate-600 mb-6 max-w-md">
              Welcome to the Ministry of Agriculture and Livestock (MoAL), Royal Government of Bhutan
              virtual assistant. This chatbot is designed to assist farmers, citizens, and
              stakeholders by providing easy access to information related to agriculture,
              livestock, food security, and rural development services.
            </p>
            <div className="bg-lime-50 border border-lime-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <p className="text-sm font-mono text-lime-900 mb-2">
                What you can ask the MoAL Chatbot
              </p>
              <ul className="text-sm text-lime-800 space-y-2 list-disc list-inside">
                <li>Information on crop production and agricultural practices</li>
                <li>Guidance on livestock farming and animal health services</li>
                <li>Agriculture policies, schemes, and support programs</li>
                <li>Details on food security and rural development initiatives</li>
                <li>Frequently asked questions related to MoAL services</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-500 max-w-xl mx-auto">
              This chatbot provides general information for guidance purposes only. For official
              confirmation, technical advisory, or formal applications, please consult the
              Ministry of Agriculture and Livestock directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
