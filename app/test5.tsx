import { useState } from 'react';
import { ChevronRight, Star, TrendingUp, AlertCircle, CheckCircle, Clock, Zap, BarChart3 } from 'lucide-react';

export default function UniqueTableDesigns() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', revenue: '$12,500', growth: '+24%', score: 92 },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', revenue: '$9,200', growth: '+18%', score: 85 },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', revenue: '$8,100', growth: '+12%', score: 78 },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', revenue: '$11,300', growth: '+31%', score: 88 },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', revenue: '$15,600', growth: '+9%', score: 95 },
  ];



  const toggleRow = (id: number) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedRows(newSet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        

        {/* Table 12: Sparkline with Charts */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-600">
            <h2 className="text-lg font-semibold text-white">With Performance Metrics</h2>
          </div>
          
        </div>

        {/* Table 13: Dual-Column Hover Effect */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Interactive Dual-Column</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Employee</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Details</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group" onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="text-sm text-slate-600">{item.revenue}</p>
                        <p className="text-xs text-slate-400">{item.status}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className={`p-2 rounded-lg transition-all transform ${hoveredId === item.id ? 'bg-blue-500 text-white scale-110' : 'bg-slate-100 text-slate-500'}`}>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 14: Checkbox Selection with Gradient Highlight */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Selectable with Gradient Highlight</h2>
            {selectedRows.size > 0 && (
              <p className="text-sm text-slate-500 mt-2">{selectedRows.size} selected</p>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left w-8">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className={`border-b border-slate-100 cursor-pointer transition-all ${selectedRows.has(item.id) ? 'bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100' : 'hover:bg-slate-50'}`} onClick={() => toggleRow(item.id)}>
                    <td className="px-6 py-4">
                      <input type="checkbox" checked={selectedRows.has(item.id)} onChange={() => {}} className="rounded border-slate-300" />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 15: Nested Details with Icon Grid */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-purple-200 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-purple-200">
            <h2 className="text-lg font-semibold text-slate-900">Nested Details with Icons</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Team Member</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Metrics</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-purple-100 hover:bg-white/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">{item.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                        <Zap className="w-3 h-3" />
                        {item.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-purple-500" />
                          <span className="text-sm font-semibold text-slate-900">{item.revenue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm font-semibold text-emerald-600">{item.growth}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 16: Animated Progress Rows */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Animated Progress Tracking</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Member</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Progress</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Target</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                        <div 
                          style={{ width: `${item.score}%`, animation: `slideIn 1.5s ease-out ${idx * 0.1}s forwards` }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-slate-900">{item.score}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <style>{`
            @keyframes slideIn {
              from { width: 0; }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}