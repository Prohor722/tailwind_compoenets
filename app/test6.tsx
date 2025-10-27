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


        {/* Table 22: Minimal List with Badges */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Minimal List with Badges</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
}