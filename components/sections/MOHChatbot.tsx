import { ArrowLeft, HeartPulse } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MOHChatbot() {
  const navigate = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-emerald-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate.push("/")}
              className="p-2 hover:bg-emerald-50 rounded-lg transition-colors">
              <ArrowLeft className="size-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                <HeartPulse className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  MOH Chatbot
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
    </div>
  );
}
