import { AlertCircle, CheckCircle, Clock, Zap, Users, TrendingUp } from 'lucide-react';

export default function EvenMoreAndMoreTableDesigns() {

  const data = [
    { id: 1, name: 'Sarah Anderson', position: 'Senior PM', salary: '$145,000', start: '2021-03-15', team: 8, performance: 94, department: 'Product', badge: 'Lead' },
    { id: 2, name: 'Mike Chen', position: 'Senior Developer', salary: '$165,000', start: '2020-07-20', team: 6, performance: 88, department: 'Engineering', badge: 'Expert' },
    { id: 3, name: 'Emma Wilson', position: 'Designer', salary: '$125,000', start: '2022-01-10', team: 3, performance: 91, department: 'Design', badge: 'Contributor' },
    { id: 4, name: 'James Johnson', position: 'Data Analyst', salary: '$135,000', start: '2021-11-05', team: 4, performance: 85, department: 'Analytics', badge: 'Rising' },
    { id: 5, name: 'Lisa Garcia', position: 'Director', salary: '$185,000', start: '2019-05-01', team: 15, performance: 96, department: 'Operations', badge: 'Executive' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Table 40: Multi-Stat Row Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Employee Stats</h2>
          </div>
          <div className="overflow-x-auto">
            
          </div>
        </div>

        {/* Table 41: Timeline Status Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Project Timeline Status</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Owner</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => {
                  const statuses = ['On Track', 'At Risk', 'Delayed', 'Completed', 'In Progress'];
                  const colors = ['emerald', 'amber', 'red', 'blue', 'purple'];
                  const status = statuses[idx];
                  const color = colors[idx];
                  
                  return (
                    <tr key={item.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group">
                      <td className="px-6 py-4 text-sm font-semibold text-white">{item.department} Initiative</td>
                      <td className="px-6 py-4 text-sm text-slate-400">{item.name}</td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 bg-${color}-500/20 text-${color}-300 text-xs font-semibold rounded-full`}>
                              {status === 'On Track' && <CheckCircle className="w-3 h-3" />}
                              {status === 'At Risk' && <AlertCircle className="w-3 h-3" />}
                              {status === 'Delayed' && <Clock className="w-3 h-3" />}
                              {status}
                            </span>
                          </div>
                          <div className="w-48 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div style={{ width: `${item.performance - 20 + Math.random() * 20}%` }} className={`h-full bg-${color}-500 rounded-full`}></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}