import { useState } from 'react';
import { ChevronRight, Eye, Zap, MapPin, Award, TrendingUp, Edit2, Trash2, Copy } from 'lucide-react';

export default function MoreUniqueTableDesigns() {

  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', revenue: '$12,500', views: 1240, engagement: 84, location: 'San Francisco' },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', revenue: '$9,200', views: 892, engagement: 76, location: 'New York' },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', revenue: '$8,100', views: 756, engagement: 68, location: 'London' },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', revenue: '$11,300', views: 1056, engagement: 91, location: 'Austin' },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', revenue: '$15,600', views: 1523, engagement: 95, location: 'Toronto' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">More Unique Designs</h1>
          <p className="text-slate-400">Even more creative and advanced table layouts</p>
        </div>


        {/* Table 20: Grid with Hover Overlay */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Grid with Hover Overlay</h2>
          
        </div>

        {/* Table 21: Comparison Matrix */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">Comparison Matrix</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-700/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200 sticky left-0 bg-slate-700/50">Member</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">
                    <div className="flex items-center justify-center gap-1">
                      <Eye className="w-4 h-4" />
                      Views
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4" />
                      Engagement
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Growth
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">Score</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={item.id} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-white sticky left-0 bg-slate-800 group-hover:bg-slate-700/50">{item.name}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-xs font-semibold text-blue-300">{Math.floor(item.views / 100)}</span>
                        </div>
                        <span className="text-xs text-slate-400">{item.views}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="relative w-8 h-8">
                          <div className="absolute inset-0 rounded-full border-2 border-slate-600"></div>
                          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-purple-400" style={{ transform: `rotate(${item.engagement * 3.6}deg)` }}></div>
                        </div>
                        <span className="text-xs font-semibold text-purple-300">{item.engagement}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        +{18 + idx}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{85 + idx * 2}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 22: Minimal List with Badges */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Minimal List with Badges</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {data.map((item) => (
              <div key={item.id} className="px-6 py-4 hover:bg-slate-50 transition-colors group flex items-center justify-between cursor-pointer">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium">{item.role}</span>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">{item.revenue}</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}