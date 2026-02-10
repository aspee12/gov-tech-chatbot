'use client';

import { ArrowLeft, Landmark } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NLCSChatbot() {
  const navigate = useRouter();
  useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    
        script.onload = () => {
          // @ts-ignore
          window.Chatbot.init({
            chatflowid: "caf5e096-7ef7-406e-b213-a7b750783aac",
            apiHost: "https://chatbot.tech.gov.bt",
    
            theme: {
              button: {
                backgroundColor: "#a855f7"
              },
              chatWindow: {
                showTitle: true,
                title: "NLCS AI Chatbot",
                welcomeMessage:
                  "Kuzuzangpo la! 👋 I am NLCS AI Assistant. How can I help you today?",
                titleAvatarSrc:
                  "/assets/nlcs.png",
                botMessage: {
                  showAvatar: true,
                  avatarSrc:
                    "/assets/nlcs.png",
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
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-purple-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="size-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                <Landmark className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  NLCS Chatbot
                </h1>
                <p className="text-sm text-slate-600">
                  National Land Commission Secretariat
                </p>
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
        <div className="bg-white rounded-2xl shadow-xl h-full flex items-center justify-center border border-purple-100">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Landmark className="size-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              NLCS Chatbot
            </h2>
            <p className="text-slate-600 mb-6 max-w-md">
              Welcome to the National Land Commission Secretariat (NLCS), Royal Government of Bhutan
              virtual assistant. This chatbot is designed to assist citizens, landowners, and
              stakeholders by providing easy access to information related to land services,
              land records, policies, and national land management initiatives.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <p className="text-sm font-mono text-blue-900 mb-2">
                 What you can ask the NLCS Chatbot
              </p>
              <ul className="text-sm text-blue-800 space-y-2 list-disc list-inside">
                <li>Information on land registration and ownership services</li>
                <li>Guidance on cadastral surveys and land record management</li>
                <li>Land policies, rules, and regulatory procedures</li>
                <li>Details on land leasing, transfer, and related services</li>
                <li>Frequently asked questions related to NLCS systems and services</li>
              </ul>
            </div>
            <p className="mt-4 text-xs text-slate-500 max-w-xl mx-auto">
              This chatbot provides general information for guidance purposes only and does not
              constitute legal advice. For official land records, legal verification, or formal
              applications, please consult the National Land Commission Secretariat directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
