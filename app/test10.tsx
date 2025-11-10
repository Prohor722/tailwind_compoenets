import { ChevronRight, Wifi } from 'lucide-react';

export default function MoreMoreMoreTableDesigns() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Table 46: Real-time Activity Feed */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Wifi className="w-5 h-5 text-cyan-400 animate-pulse" />
              Live Activity
            </h2>
            <span className="text-xs text-slate-400">Real-time</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}