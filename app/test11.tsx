import { Shield, ExternalLink, Lock } from 'lucide-react';

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