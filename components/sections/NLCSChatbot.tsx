import { ArrowLeft, Landmark } from 'lucide-react';

export default function NLCSChatbot() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-purple-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => ("/")}
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
          </div>
        </div>
      </div>
    </div>
  );
}
