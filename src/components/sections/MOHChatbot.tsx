'use client';

import { ArrowLeft, HeartPulse } from 'lucide-react';
import { useEffect } from 'react';

export default function MOHChatbot() {

  useEffect(() => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
  
      script.onload = () => {
        // @ts-ignore
        window.Chatbot.init({
          chatflowid: "a74fa02c-bc26-4275-a74b-e9e99cbe2de2",
          apiHost: "https://chatbot.tech.gov.bt",
  
          theme: {
            button: {
              backgroundColor: "#009966"
            },
            chatWindow: {
              showTitle: true,
              title: "MoH AI Chatbot",
              welcomeMessage: "Kuzuzangpo la! 👋 I am MoH AI Assistant. How can I help you today?",
              titleAvatarSrc: "/assets/moh.png",
              botMessage: {
                showAvatar: true,
                avatarSrc: "/assets/moh.png",
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
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-emerald-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="p-2 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer">
              <ArrowLeft className="size-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                <HeartPulse className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  MoH Chatbot
                </h1>
                <p className="text-sm text-slate-600">Ministry of Health</p>
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
        <div className="bg-white rounded-2xl shadow-xl h-full flex items-center justify-center border border-emerald-100">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <HeartPulse className="size-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              MoH Chatbot
            </h2>
            <p className="text-slate-600 mb-6 max-w-md">
              Welcome to the Ministry of Health (MoH), Royal Government of Bhutan virtual assistant.
              This chatbot is designed to support citizens, health professionals, and visitors
              by providing quick access to information related to public health services,
              healthcare programs, policies, and national health initiatives.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <p className="text-sm font-mono text-emerald-900 mb-2">
                What you can ask the MoH Chatbot
              </p>
              <ul className="text-sm text-emerald-800 space-y-2 list-decimal list-inside">
                <li>Information on public healthcare services and facilities</li>
                <li>Maternal, child, and community health programs</li>
                <li>Guidance on disease prevention and health awareness</li>
                <li>Health policies, strategies, and national programs</li>
                <li>Frequently asked questions related to MoH services</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-500 max-w-xl mx-auto">
              This chatbot provides general health-related information for guidance purposes only
              and does not replace professional medical advice, diagnosis, or treatment.
              For medical emergencies or clinical concerns, please consult a qualified healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
