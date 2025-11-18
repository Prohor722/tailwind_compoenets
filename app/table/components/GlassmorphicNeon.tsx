import React, { useState } from "react";

const GlassmorphicNeon = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
      
  const tableData = [
    { id: 1, name: 'Acme Corp', revenue: 12.5, growth: 24.5, status: 'active', score: 92 },
    { id: 2, name: 'TechStart Inc', revenue: 8.3, growth: -5.2, status: 'active', score: 78 },
    { id: 3, name: 'Design Studio', revenue: 5.1, growth: 18.7, status: 'pending', score: 85 },
    { id: 4, name: 'Cloud Services', revenue: 15.2, growth: 32.1, status: 'active', score: 95 },
    { id: 5, name: 'Data Analytics', revenue: 3.8, growth: 11.3, status: 'inactive', score: 71 },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-slate-700">
          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
            Revenue
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
            Growth
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-300">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, idx) => (
          <tr
            key={row.id}
            className="border-b border-slate-700/30 hover:bg-purple-500/10 transition-all duration-300 group animate-slide-left"
            style={{ animationDelay: `${idx * 0.08}s` }}
            onMouseEnter={() => setHoveredId(row.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <td className="px-6 py-4 text-white font-medium group-hover:text-purple-300">
              {row.name}
            </td>
            <td className="px-6 py-4 text-slate-300">${row.revenue}M</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                {row.growth >= 0 ? (
                  <>
                    <TrendingUp className="w-4 h-4 text-emerald-400 group-hover:animate-bounce" />
                    <span className="text-emerald-400">{row.growth}%</span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <span className="text-red-400">{row.growth}%</span>
                  </>
                )}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="relative w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{ width: `${row.score}%` }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GlassmorphicNeon;
