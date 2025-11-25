"use client";
import { useState } from "react";

const MinimalistBlocksTable = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
      
      const tableData = [
        { id: 1, name: 'Acme Corp', revenue: 12.5, growth: 24.5, status: 'active', score: 92 },
        { id: 2, name: 'TechStart Inc', revenue: 8.3, growth: -5.2, status: 'active', score: 78 },
        { id: 3, name: 'Design Studio', revenue: 5.1, growth: 18.7, status: 'pending', score: 85 },
        { id: 4, name: 'Cloud Services', revenue: 15.2, growth: 32.1, status: 'active', score: 95 },
        { id: 5, name: 'Data Analytics', revenue: 3.8, growth: 11.3, status: 'inactive', score: 71 },
      ];
    
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="bg-slate-800/50 aspect-square rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group p-4 animate-slide-up"
          style={{ animationDelay: `${idx * 0.1}s` }}
          onMouseEnter={() => setHoveredId(row.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300"></div>

          <div className="relative z-10 text-center">
            <div className="text-xs text-slate-400 mb-2 line-clamp-2">
              {row.name}
            </div>
            <div className="text-white font-bold text-lg mb-1">
              ${row.revenue}M
            </div>
            <div
              className={`text-xs font-semibold ${
                row.growth >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {row.growth > 0 ? "↑" : "↓"} {Math.abs(row.growth)}%
            </div>
            <div className="mt-2 h-1 w-6 bg-slate-600 rounded-full mx-auto group-hover:bg-blue-500 transition-colors"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MinimalistBlocksTable;
