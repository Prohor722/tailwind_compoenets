import { useState } from 'react';
import { ChevronRight, MessageCircle, Heart, Share2, BookmarkPlus, Eye, Zap, MapPin, Calendar, Users, Award, TrendingUp, Edit2, Trash2, Copy } from 'lucide-react';

export default function MoreUniqueTableDesigns() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [likedItems, setLikedItems] = useState(new Set());

  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', revenue: '$12,500', views: 1240, engagement: 84, location: 'San Francisco' },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', revenue: '$9,200', views: 892, engagement: 76, location: 'New York' },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', revenue: '$8,100', views: 756, engagement: 68, location: 'London' },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', revenue: '$11,300', views: 1056, engagement: 91, location: 'Austin' },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', revenue: '$15,600', views: 1523, engagement: 95, location: 'Toronto' },
  ];

  const toggleLike = (id: number) => {
    const newSet = new Set(likedItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setLikedItems(newSet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">More Unique Designs</h1>
          <p className="text-slate-400">Even more creative and advanced table layouts</p>
        </div>

        {/* Table 17: Social Media Feed Style */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white px-2">Social Media Feed Style</h2>
          
        </div>

        {/* Table 18: Kanban Board Style */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 px-2">Kanban Board Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Active', 'Away', 'Offline'].map((status) => (
              <div key={status} className="bg-slate-800 rounded-xl border border-slate-700 p-4 min-h-96">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
                  <div className={`w-3 h-3 rounded-full ${status === 'Active' ? 'bg-emerald-500' : status === 'Away' ? 'bg-amber-500' : 'bg-gray-500'}`}></div>
                  <h3 className="text-white font-semibold">{status}</h3>
                  <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                    {data.filter(d => d.status === status).length}
                  </span>
                </div>
                <div className="space-y-3">
                  {data.filter(d => d.status === status).map((item) => (
                    <div key={item.id} className="bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 border border-slate-600 hover:border-slate-500 transition-all cursor-move hover:shadow-lg hover:shadow-purple-500/10 group">
                      <p className="text-white font-semibold text-sm mb-2 group-hover:text-blue-300 transition-colors">{item.name}</p>
                      <p className="text-xs text-slate-400 mb-2">{item.role}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-purple-300">{item.revenue}</span>
                        <Eye className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 19: Timeline with Badges */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">Timeline with Achievement Badges</h2>
          </div>
          <div className="p-6 space-y-6">
            {data.map((item, idx) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ring-4 ring-slate-800 group-hover:ring-purple-500/50 transition-all"></div>
                  {idx !== data.length - 1 && <div className="w-1 h-16 bg-gradient-to-b from-slate-600 to-transparent mt-2"></div>}
                </div>
                <div className="flex-1 pb-4 group-hover:translate-x-2 transition-transform">
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="text-sm text-slate-400">{item.role}</p>
                      </div>
                      <Award className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-600">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-slate-300">{item.revenue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-slate-300">{item.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 20: Grid with Hover Overlay */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Grid with Hover Overlay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div key={item.id} className="relative group rounded-xl overflow-hidden" onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 p-6 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        #{item.id}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{item.role}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        {item.revenue}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-600">
                    <div className="text-xs text-slate-400">{item.engagement}% engagement</div>
                    <div className="w-full bg-slate-600 rounded-full h-2 mt-2 overflow-hidden">
                      <div style={{ width: `${item.engagement}%` }} className="h-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    </div>
                  </div>
                </div>

                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl flex items-end justify-between p-4 animate-in fade-in duration-200">
                    <div>
                      <p className="text-white text-xs font-semibold mb-1">Quick Actions</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-500/80 hover:bg-blue-500 rounded-lg transition-colors text-white">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-amber-500/80 hover:bg-amber-500 rounded-lg transition-colors text-white">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors text-white">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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