import { ChevronRight, Clock, Eye, Heart, Star, Layers } from 'lucide-react';

export default function MoreMoreMoreMoreTableDesigns() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">


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