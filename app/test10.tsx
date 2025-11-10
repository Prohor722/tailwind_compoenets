import { useState } from 'react';
import { ChevronRight, Share2, Link2, Copy, Check, Code2, Database, Cloud, Server, Wifi } from 'lucide-react';

export default function MoreMoreMoreTableDesigns() {

  const data = [
    { id: 1, title: 'Critical Bug Fix', author: 'Sarah', status: 'Merged', commits: 12, changes: 342, likes: 45, comments: 8, timestamp: '2 hours ago', priority: 'Critical', branch: 'hotfix/auth-issue' },
    { id: 2, title: 'Feature: Dark Mode', author: 'Mike', status: 'Open', commits: 8, changes: 156, likes: 23, comments: 12, timestamp: '4 hours ago', priority: 'Medium', branch: 'feature/dark-mode' },
    { id: 3, title: 'Performance Optimization', author: 'Emma', status: 'In Review', commits: 15, changes: 567, likes: 34, comments: 6, timestamp: '1 day ago', priority: 'High', branch: 'perf/optimize-bundle' },
    { id: 4, title: 'Documentation Update', author: 'James', status: 'Merged', commits: 3, changes: 89, likes: 12, comments: 2, timestamp: '2 days ago', priority: 'Low', branch: 'docs/api-reference' },
    { id: 5, title: 'Refactor Components', author: 'Lisa', status: 'In Review', commits: 22, changes: 891, likes: 56, comments: 18, timestamp: '3 days ago', priority: 'High', branch: 'refactor/components' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">


        {/* Table 45: Technology Stack Display */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Technology Stack</h2>
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