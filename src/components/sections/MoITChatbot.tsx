'use client';

import { ArrowLeft, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MoITChatbot() {
  const navigate = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate.push("/")}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="size-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <Building2 className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">MoIT Chatbot</h1>
                <p className="text-sm text-slate-600">Ministry of IT</p>
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
        <div className="bg-white rounded-2xl shadow-xl h-full flex items-center justify-center border border-blue-100">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Building2 className="size-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              MoIT Chatbot
            </h2>
            <p className="text-slate-600 mb-6 max-w-md">
              This is where my Flowise chatbot will be embedded. Will Replace this placeholder with Flowise embed code.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <p className="text-sm font-mono text-blue-900 mb-2">
                To embed Flowise chatbot:
              </p>
              <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
                <li>Getting chatbot embed code from Flowise</li>
                <li>Replace this placeholder content with the embed script</li>
                <li>Configure the chatbot settings as needed</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
