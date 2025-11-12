import { Shield, Zap, TrendingUp, ExternalLink, Lock, Edit2, Plus, Users, DollarSign, Award } from 'lucide-react';

export default function FinalTableDesigns() {

  const data = [
    { id: 1, name: 'Sarah Anderson', company: 'TechCorp', value: '$450K', deal: 'Enterprise', stage: 'Closed Won', probability: 95, amount: 450000, daysOpen: 45, owner: 'John' },
    { id: 2, name: 'Mike Chen', company: 'StartupXYZ', value: '$125K', deal: 'Growth', stage: 'Negotiation', probability: 65, amount: 125000, daysOpen: 28, owner: 'Sarah' },
    { id: 3, name: 'Emma Wilson', company: 'GlobalCo', value: '$890K', deal: 'Expansion', stage: 'Proposal', probability: 40, amount: 890000, daysOpen: 62, owner: 'Mike' },
    { id: 4, name: 'James Johnson', company: 'InnovateLabs', value: '$280K', deal: 'Partnership', stage: 'Discovery', probability: 25, amount: 280000, daysOpen: 15, owner: 'Emma' },
    { id: 5, name: 'Lisa Garcia', company: 'MegaScale', value: '$1.2M', deal: 'Strategic', stage: 'Closed Won', probability: 100, amount: 1200000, daysOpen: 72, owner: 'James' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">


        {/* Table 48: Financial Summary with Sparklines */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">Financial Summary</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Quarter</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Revenue</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Change</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Trend</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { q: 'Q1 2024', rev: '$2.4M', change: '+12%', trend: 'up' },
                  { q: 'Q2 2024', rev: '$2.8M', change: '+18%', trend: 'up' },
                  { q: 'Q3 2024', rev: '$3.1M', change: '+24%', trend: 'up' },
                  { q: 'Q4 2024', rev: '$3.8M', change: '+31%', trend: 'up' },
                  { q: 'Q1 2025', rev: '$4.2M', change: '+39%', trend: 'up' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors group">
                    <td className="px-6 py-4 text-sm font-semibold text-white">{row.q}</td>
                    <td className="px-6 py-4 text-right text-lg font-bold text-emerald-400">{row.rev}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                        <TrendingUp className="w-4 h-4" />
                        {row.change}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} style={{ height: `${20 + i * 15}px` }} className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm"></div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 49: Team Performance Matrix */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Team Performance Matrix</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Team Member</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <Award className="w-4 h-4" />
                      Quality
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4" />
                      Speed
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="w-4 h-4" />
                      Collaboration
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Overall</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, 4).map((item) => {
                  const scores = [92, 78, 85, 88];
                  const idx = data.indexOf(item);
                  const score = scores[idx];
                  return (
                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.name}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div style={{ width: `${88 + Math.random() * 10}%` }} className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div style={{ width: `${75 + Math.random() * 20}%` }} className="h-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div style={{ width: `${82 + Math.random() * 15}%` }} className="h-full bg-gradient-to-r from-pink-400 to-rose-400"></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 font-bold text-slate-900">
                          {score}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 50: Project Timeline Gantt-style */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Project Timeline</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 w-32">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Phase 1', start: 10, width: 30, status: 'completed' },
                  { name: 'Phase 2', start: 35, width: 35, status: 'in-progress' },
                  { name: 'Phase 3', start: 65, width: 25, status: 'pending' },
                  { name: 'Phase 4', start: 85, width: 15, status: 'pending' },
                ].map((phase, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{phase.name}</td>
                    <td className="px-6 py-4">
                      <div className="w-full h-10 bg-slate-100 rounded-lg relative overflow-hidden">
                        <div 
                          style={{ left: `${phase.start}%`, width: `${phase.width}%` }} 
                          className={`absolute h-full rounded-lg flex items-center justify-center text-white text-xs font-bold ${
                            phase.status === 'completed' ? 'bg-gradient-to-r from-emerald-400 to-teal-500' :
                            phase.status === 'in-progress' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                            'bg-gradient-to-r from-slate-300 to-slate-400'
                          }`}
                        >
                          {phase.width}%
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 51: Access Control Matrix */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Access Control Matrix</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">User</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Read</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Write</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Delete</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Admin</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4 text-sm font-semibold text-white">{item.name}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors">
                        <Lock className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className={`p-2 rounded-lg transition-colors ${Math.random() > 0.4 ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-slate-700 text-slate-500 hover:bg-slate-600'}`}>
                        <Lock className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className={`p-2 rounded-lg transition-colors ${Math.random() > 0.7 ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-slate-700 text-slate-500 hover:bg-slate-600'}`}>
                        <Lock className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className={`p-2 rounded-lg transition-colors ${item.id === 5 ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30' : 'bg-slate-700 text-slate-500 hover:bg-slate-600'}`}>
                        <Shield className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 52: Event Log with Severity */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Event Log</h2>
          </div>
          <div className="divide-y divide-slate-200 max-h-96 overflow-y-auto">
            {[
              { timestamp: '2025-10-13 14:32', event: 'User login successful', severity: 'info', user: 'sarah@company.com' },
              { timestamp: '2025-10-13 14:15', event: 'Database backup completed', severity: 'success', user: 'system' },
              { timestamp: '2025-10-13 13:58', event: 'Failed authentication attempt', severity: 'warning', user: 'unknown' },
              { timestamp: '2025-10-13 13:42', event: 'Deployment started', severity: 'info', user: 'devops-bot' },
              { timestamp: '2025-10-13 12:30', event: 'Critical error in API', severity: 'error', user: 'system' },
              { timestamp: '2025-10-13 11:15', event: 'Configuration updated', severity: 'info', user: 'admin' },
            ].map((log, idx) => (
              <div key={idx} className="px-6 py-4 hover:bg-slate-50 transition-colors flex items-start gap-4 group">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  log.severity === 'error' ? 'bg-red-500' :
                  log.severity === 'warning' ? 'bg-amber-500' :
                  log.severity === 'success' ? 'bg-emerald-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{log.event}</p>
                  <p className="text-xs text-slate-500">{log.timestamp} • {log.user}</p>
                </div>
                <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-slate-200 rounded-lg transition-all text-slate-600">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}