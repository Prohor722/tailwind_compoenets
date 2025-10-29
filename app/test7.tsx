import { useState } from 'react';
import { ChevronRight, Plus, Minus, MoreVertical, Bell, Zap, Flame, Lightbulb, Target, Lock, Unlock, Download, Share2, GitBranch, Code, Briefcase, BarChart2 } from 'lucide-react';

export default function EvenMoreTableDesigns() {
  const [expandedRows, setExpandedRows] = useState(new Set());

  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', price: '$12,500', priority: 'High', category: 'PM', tags: ['Leadership', 'Strategy'], progress: 85 },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', price: '$9,200', priority: 'Medium', category: 'Dev', tags: ['Backend', 'Frontend'], progress: 72 },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', price: '$8,100', priority: 'High', category: 'Design', tags: ['UI/UX', 'Branding'], progress: 68 },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', price: '$11,300', priority: 'Medium', category: 'Analytics', tags: ['Data', 'Insights'], progress: 91 },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', price: '$15,600', priority: 'Critical', category: 'Management', tags: ['Team', 'Planning'], progress: 95 },
  ];

  const getPriorityIcon = (priority: string) => {
    if (priority === 'Critical') return <Flame className="w-4 h-4 text-red-500" />;
    if (priority === 'High') return <Zap className="w-4 h-4 text-amber-500" />;
    return <Lightbulb className="w-4 h-4 text-blue-500" />;
  };

//   const getPriorityColor = (priority) => {
//     if (priority === 'Critical') return 'from-red-600 to-red-700';
//     if (priority === 'High') return 'from-amber-600 to-amber-700';
//     return 'from-blue-600 to-blue-700';
//   };

  const toggleRow = (id: number) => {
    const newSet = new Set(expandedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setExpandedRows(newSet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Even More Table Designs</h1>
          <p className="text-slate-600">Additional advanced variations and interaction patterns</p>
        </div>

        {/* Table 24: Multi-Row Expandable with Details */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Expandable Details View</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left w-8"></th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Priority</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Progress</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <>
                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group" onClick={() => toggleRow(item.id)}>
                      <td className="px-6 py-4">
                        <button className="text-slate-400 hover:text-slate-600 transition-all transform group-hover:scale-110">
                          <ChevronRight className={`w-5 h-5 transition-transform ${expandedRows.has(item.id) ? 'rotate-90' : ''}`} />
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900 group-hover:text-blue-600">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {getPriorityIcon(item.priority)}
                          <span className="text-xs font-semibold">{item.priority}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div style={{ width: `${item.progress}%` }} className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"></div>
                          </div>
                          <span className="text-xs font-bold text-slate-900 w-8 text-right">{item.progress}%</span>
                        </div>
                      </td>
                    </tr>
                    {expandedRows.has(item.id) && (
                      <tr className="border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                        <td colSpan={5} className="px-6 py-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                              <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">Contact</p>
                              <p className="text-sm font-medium text-slate-900">{item.name}</p>
                              <p className="text-xs text-slate-500">{item.role}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">Tags</p>
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">Actions</p>
                              <div className="flex gap-2">
                                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors font-medium">
                                  Edit
                                </button>
                                <button className="px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded-lg hover:bg-slate-300 transition-colors font-medium">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 25: Dark Minimal with Icon Indicators */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Dark Minimal with Icons</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-center text-xs font-bold text-slate-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      {item.status === 'Active' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                          <span className="text-xs font-semibold text-emerald-400">{item.status}</span>
                        </div>
                      ) : item.status === 'Away' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                          <span className="text-xs font-semibold text-amber-400">{item.status}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                          <span className="text-xs font-semibold text-gray-400">{item.status}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-white group-hover:text-blue-300 transition-colors">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">{item.role}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 26: Color-Coded Rows with Left Border */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Color-Coded Priority Rows</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 w-1"></th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Priority</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Value</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  const colorMap: Record<string, string> = {
                    'Critical': 'border-l-red-500 bg-red-50 hover:bg-red-100',
                    'High': 'border-l-amber-500 bg-amber-50 hover:bg-amber-100',
                    'Medium': 'border-l-blue-500 bg-blue-50 hover:bg-blue-100'
                  };
                  return (
                    <tr key={item.id} className={`border-b border-slate-100 border-l-4 transition-colors group cursor-pointer ${colorMap[item.priority] ?? 'border-l-slate-500'}`}>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/60 backdrop-blur-sm`}>
                          {getPriorityIcon(item.priority)}
                          {item.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-slate-900">{item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 27: Badge-Heavy with Status Workflow */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Status Workflow with Badges</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Item</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Tags</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status Flow</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 text-xs rounded-full font-semibold">
                            <Target className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {item.progress < 50 ? (
                          <>
                            <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">Pending</span>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                            <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-semibold">In Progress</span>
                          </>
                        ) : item.progress < 90 ? (
                          <>
                            <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">In Progress</span>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                            <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-semibold">Review</span>
                          </>
                        ) : (
                          <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">Complete</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 28: Code/Dev Style Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden font-mono">
          <div className="p-6 border-b border-slate-700 bg-slate-800">
            <h2 className="text-lg font-semibold text-white">Dev-Style Data Table</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-slate-300">
                  <th className="px-6 py-3 text-left font-mono text-xs">&lt;name&gt;</th>
                  <th className="px-6 py-3 text-left font-mono text-xs">&lt;type&gt;</th>
                  <th className="px-6 py-3 text-left font-mono text-xs">&lt;status&gt;</th>
                  <th className="px-6 py-3 text-left font-mono text-xs">&lt;value&gt;</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-3 text-blue-400 font-mono">
                      <span className="text-slate-500">"</span>{item.name}<span className="text-slate-500">"</span>
                    </td>
                    <td className="px-6 py-3 font-mono">
                      <span className="text-purple-400">"{item.role}"</span>
                    </td>
                    <td className="px-6 py-3 font-mono">
                      {item.status === 'Active' ? (
                        <span className="text-emerald-400">true</span>
                      ) : (
                        <span className="text-red-400">false</span>
                      )}
                    </td>
                    <td className="px-6 py-3 font-mono">
                      <span className="text-amber-400">{item.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}