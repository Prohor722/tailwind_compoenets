import { useState } from 'react';
import { X, AlertCircle, CheckCircle, Clock, Zap, Users, TrendingUp } from 'lucide-react';

export default function EvenMoreAndMoreTableDesigns() {
  const [selectedRows, setSelectedRows] = useState(new Set());

  const data = [
    { id: 1, name: 'Sarah Anderson', position: 'Senior PM', salary: '$145,000', start: '2021-03-15', team: 8, performance: 94, department: 'Product', badge: 'Lead' },
    { id: 2, name: 'Mike Chen', position: 'Senior Developer', salary: '$165,000', start: '2020-07-20', team: 6, performance: 88, department: 'Engineering', badge: 'Expert' },
    { id: 3, name: 'Emma Wilson', position: 'Designer', salary: '$125,000', start: '2022-01-10', team: 3, performance: 91, department: 'Design', badge: 'Contributor' },
    { id: 4, name: 'James Johnson', position: 'Data Analyst', salary: '$135,000', start: '2021-11-05', team: 4, performance: 85, department: 'Analytics', badge: 'Rising' },
    { id: 5, name: 'Lisa Garcia', position: 'Director', salary: '$185,000', start: '2019-05-01', team: 15, performance: 96, department: 'Operations', badge: 'Executive' },
  ];

  const toggleRow = (id: number) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedRows(newSet);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">


        {/* Table 38: Inline Edit Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Quick Edit Table</h2>
          </div>
          <div className="overflow-x-auto">
            
          </div>
        </div>

        {/* Table 39: Bulk Action Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Bulk Actions & Selection</h2>
            {selectedRows.size > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-300">{selectedRows.size} selected</span>
                <button className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm font-medium transition-colors">
                  <X className="w-4 h-4" />
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-4 text-left w-8">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-800 cursor-pointer" />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Salary</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Department</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className={`border-b border-slate-800 cursor-pointer transition-all ${selectedRows.has(item.id) ? 'bg-blue-500/20 hover:bg-blue-500/30' : 'hover:bg-slate-800/50'}`}>
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedRows.has(item.id)} 
                        onChange={() => toggleRow(item.id)} 
                        className="w-4 h-4 rounded border-slate-600 bg-slate-800 cursor-pointer" 
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-white">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">{item.salary}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">
                        {item.department}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 40: Multi-Stat Row Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Employee Stats</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Employee</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="w-4 h-4" />
                      Team
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Performance
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4" />
                      Score
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.position}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                        {item.team}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 justify-center">
                        <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div style={{ width: `${item.performance}%` }} className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700 w-8 text-right">{item.performance}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold rounded-full">
                        {Math.round(item.performance / 10)}/10
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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