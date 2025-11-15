import { ChevronRight, Clock, MapPin, Eye, Heart, Star, Layers, Truck } from 'lucide-react';

export default function MoreMoreMoreMoreTableDesigns() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">


        {/* Table 56: Shipment Tracking */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Truck className="w-5 h-5 text-cyan-400" />
              Shipment Tracking
            </h2>
          </div>
          
        </div>

        {/* Table 57: Portfolio/Gallery Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              Project Portfolio
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {[
              { title: 'Dashboard Design', author: 'Sarah', views: 2450, likes: 342, rating: 4.8, thumbnail: '📊' },
              { title: 'Mobile App UI', author: 'Emma', views: 3120, likes: 521, rating: 4.9, thumbnail: '📱' },
              { title: 'Web Platform', author: 'Mike', views: 1890, likes: 234, rating: 4.6, thumbnail: '🌐' },
              { title: 'Brand Identity', author: 'Lisa', views: 2105, likes: 401, rating: 4.7, thumbnail: '🎨' },
              { title: 'Icon System', author: 'James', views: 1654, likes: 289, rating: 4.5, thumbnail: '✨' },
              { title: 'Illustration Kit', author: 'Sarah', views: 2345, likes: 445, rating: 4.8, thumbnail: '🎭' },
            ].map((project, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-6xl">
                  {project.thumbnail}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">by {project.author}</p>
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-1 text-xs text-slate-600">
                      <Eye className="w-3 h-3" />
                      {project.views}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-red-600">
                      <Heart className="w-3 h-3" />
                      {project.likes}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(project.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{project.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 58: Knowledge Base Articles */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Knowledge Base</h2>
          </div>
          <div className="divide-y divide-slate-800">
            {[
              { title: 'Getting Started with API', category: 'API', readTime: '5 min', views: 1200, helpful: 89 },
              { title: 'Authentication Methods', category: 'Security', readTime: '8 min', views: 890, helpful: 94 },
              { title: 'Rate Limiting Guide', category: 'API', readTime: '6 min', views: 654, helpful: 82 },
              { title: 'Webhook Integration', category: 'Integration', readTime: '10 min', views: 1450, helpful: 91 },
              { title: 'Error Handling Best Practices', category: 'Development', readTime: '7 min', views: 2100, helpful: 87 },
            ].map((article, idx) => (
              <div key={idx} className="px-6 py-4 hover:bg-slate-800/50 transition-colors group">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors mb-1">{article.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-slate-400">{article.views} views</p>
                      <p className="text-sm font-bold text-emerald-400">{article.helpful}% helpful</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}