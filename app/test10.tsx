import { useState } from 'react';
import { ChevronRight, Pin, ThumbsUp, MessageSquare, Share2, Link2, Copy, Check, AlertCircle, CheckCircle2, Zap, Flame, MoreHorizontal, GitCommit, GitPullRequest, GitBranch, Code2, Database, Cloud, Server, Wifi } from 'lucide-react';

export default function MoreMoreMoreTableDesigns() {
  const [pinnedRows, setPinnedRows] = useState(new Set());
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [likedRows, setLikedRows] = useState(new Set());
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const data = [
    { id: 1, title: 'Critical Bug Fix', author: 'Sarah', status: 'Merged', commits: 12, changes: 342, likes: 45, comments: 8, timestamp: '2 hours ago', priority: 'Critical', branch: 'hotfix/auth-issue' },
    { id: 2, title: 'Feature: Dark Mode', author: 'Mike', status: 'Open', commits: 8, changes: 156, likes: 23, comments: 12, timestamp: '4 hours ago', priority: 'Medium', branch: 'feature/dark-mode' },
    { id: 3, title: 'Performance Optimization', author: 'Emma', status: 'In Review', commits: 15, changes: 567, likes: 34, comments: 6, timestamp: '1 day ago', priority: 'High', branch: 'perf/optimize-bundle' },
    { id: 4, title: 'Documentation Update', author: 'James', status: 'Merged', commits: 3, changes: 89, likes: 12, comments: 2, timestamp: '2 days ago', priority: 'Low', branch: 'docs/api-reference' },
    { id: 5, title: 'Refactor Components', author: 'Lisa', status: 'In Review', commits: 22, changes: 891, likes: 56, comments: 18, timestamp: '3 days ago', priority: 'High', branch: 'refactor/components' },
  ];

  const togglePin = (id: number) => {
    const newSet = new Set(pinnedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setPinnedRows(newSet);
  };

  const toggleLike = (id: number) => {
    const newSet = new Set(likedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setLikedRows(newSet);
  };

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'Critical') return <Flame className="w-4 h-4 text-red-500" />;
    if (priority === 'High') return <Zap className="w-4 h-4 text-amber-500" />;
    return <AlertCircle className="w-4 h-4 text-blue-500" />;
  };

  const getStatusColor = (status: string) => {
    if (status === 'Merged') return 'from-purple-500 to-pink-500';
    if (status === 'Open') return 'from-green-500 to-emerald-500';
    return 'from-yellow-500 to-amber-500';
  };

  const sortedData = [...data].sort((a, b) => {
    if (pinnedRows.has(a.id) && !pinnedRows.has(b.id)) return -1;
    if (!pinnedRows.has(a.id) && pinnedRows.has(b.id)) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Table 42: Pull Request Style Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <GitPullRequest className="w-5 h-5 text-blue-400" />
              Pull Requests
            </h2>
          </div>
          
        </div>

        {/* Table 43: Infrastructure Status Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600" />
              Infrastructure Status
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-100 to-blue-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Uptime</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Response Time</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">CPU</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'API Server', status: 'Healthy', uptime: 99.98, response: 45, cpu: 35 },
                  { name: 'Database', status: 'Healthy', uptime: 99.95, response: 12, cpu: 42 },
                  { name: 'Cache Layer', status: 'Warning', uptime: 99.85, response: 8, cpu: 68 },
                  { name: 'CDN', status: 'Healthy', uptime: 99.99, response: 23, cpu: 28 },
                  { name: 'Message Queue', status: 'Healthy', uptime: 99.92, response: 34, cpu: 51 },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {item.status === 'Healthy' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-600" />
                        )}
                        <span className={`text-sm font-semibold ${item.status === 'Healthy' ? 'text-emerald-700' : 'text-amber-700'}`}>
                          {item.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div style={{ width: `${item.uptime}%` }} className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700 w-10 text-right">{item.uptime}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                        {item.response}ms
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center relative">
                          <span className="text-xs font-bold text-blue-700">{item.cpu}%</span>
                          <div className="absolute inset-0 rounded-lg border-2 border-transparent" style={{ borderRightColor: '#06b6d4', borderTopColor: '#06b6d4', transform: `rotate(${item.cpu * 3.6}deg)` }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 44: Compact Action Menu */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Quick Actions Menu</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Item</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Type</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, 4).map((item) => (
                  <tr key={item.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4 text-sm font-semibold text-white">{item.title}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-medium">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleCopy(item.id)} className={`p-2 rounded-lg transition-all ${copiedId === item.id ? 'bg-emerald-500/20 text-emerald-400' : 'hover:bg-slate-700 text-slate-400'}`}>
                          {copiedId === item.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                          <Link2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 45: Technology Stack Display */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Technology Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            {[
              { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'], icon: Code2, color: 'blue' },
              { name: 'Backend', items: ['Node.js', 'Express', 'Python'], icon: Server, color: 'purple' },
              { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'], icon: Database, color: 'emerald' },
              { name: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes'], icon: Cloud, color: 'orange' },
            ].map((stack, idx) => (
              <div key={idx} className={`p-4 rounded-lg border-2 border-${stack.color}-200 bg-${stack.color}-50 hover:shadow-lg transition-all group cursor-pointer`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-${stack.color}-200`}>
                    <stack.icon className={`w-5 h-5 text-${stack.color}-700`} />
                  </div>
                  <h3 className={`font-semibold text-${stack.color}-900`}>{stack.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span key={i} className={`px-2 py-1 bg-${stack.color}-200 text-${stack.color}-700 text-xs rounded font-medium`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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