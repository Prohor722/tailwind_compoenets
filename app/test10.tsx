import { ChevronRight, Wifi } from 'lucide-react';

export default function MoreMoreMoreTableDesigns() {



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">


        {/* Table 45: Technology Stack Display */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Technology Stack</h2>
          </div>
          
        </div>

        {/* Table 46: Real-time Activity Feed */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Wifi className="w-5 h-5 text-cyan-400 animate-pulse" />
              Live Activity
            </h2>
            <span className="text-xs text-slate-400">Real-time</span>
          </div>
          <div className="divide-y divide-slate-800 max-h-96 overflow-y-auto">
            {[
              { action: 'Deploy completed', user: 'Sarah', time: '2 min ago', status: 'success' },
              { action: 'Build started', user: 'Mike', time: '5 min ago', status: 'loading' },
              { action: 'Test failed', user: 'Emma', time: '12 min ago', status: 'error' },
              { action: 'Review approved', user: 'James', time: '18 min ago', status: 'success' },
              { action: 'Commit pushed', user: 'Lisa', time: '24 min ago', status: 'success' },
            ].map((activity, idx) => (
              <div key={idx} className="p-4 hover:bg-slate-800/50 transition-colors flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${activity.status === 'success' ? 'bg-emerald-500' : activity.status === 'error' ? 'bg-red-500' : 'bg-blue-500 animate-pulse'}`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium">{activity.action}</p>
                  <p className="text-xs text-slate-400">{activity.user} • {activity.time}</p>
                </div>
                <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}