"use client";
import { Share2, Link2, Copy, Check } from 'lucide-react';
import { useState } from 'react';


const CompactActionMenu = () => {  
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const data = [
    { id: 1, title: 'Critical Bug Fix', author: 'Sarah', status: 'Merged', commits: 12, changes: 342, likes: 45, comments: 8, timestamp: '2 hours ago', priority: 'Critical', branch: 'hotfix/auth-issue' },
    { id: 2, title: 'Feature: Dark Mode', author: 'Mike', status: 'Open', commits: 8, changes: 156, likes: 23, comments: 12, timestamp: '4 hours ago', priority: 'Medium', branch: 'feature/dark-mode' },
    { id: 3, title: 'Performance Optimization', author: 'Emma', status: 'In Review', commits: 15, changes: 567, likes: 34, comments: 6, timestamp: '1 day ago', priority: 'High', branch: 'perf/optimize-bundle' },
    { id: 4, title: 'Documentation Update', author: 'James', status: 'Merged', commits: 3, changes: 89, likes: 12, comments: 2, timestamp: '2 days ago', priority: 'Low', branch: 'docs/api-reference' },
    { id: 5, title: 'Refactor Components', author: 'Lisa', status: 'In Review', commits: 22, changes: 891, likes: 56, comments: 18, timestamp: '3 days ago', priority: 'High', branch: 'refactor/components' },
  ];
  
  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <table className="max-w-md bg-gray-700 rounded-2xl overflow-hidden shadow-2xl">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Item
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Type
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 4).map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.title}
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-medium">
                {item.status}
              </span>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleCopy(item.id)}
                  className={`cursor-pointer p-2 rounded-lg transition-all ${
                    copiedId === item.id
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "hover:bg-slate-700 text-slate-400"
                  }`}
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <button className="cursor-pointer p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <Link2 className="w-4 h-4" />
                </button>
                <button className="cursor-pointer p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompactActionMenu;
