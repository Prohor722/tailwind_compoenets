import React, { useState } from "react";

const CardStackEffect = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
    const tableData = [
    { id: 1, name: 'Acme Corp', revenue: 12.5, growth: 24.5, status: 'active', score: 92 },
    { id: 2, name: 'TechStart Inc', revenue: 8.3, growth: -5.2, status: 'active', score: 78 },
    { id: 3, name: 'Design Studio', revenue: 5.1, growth: 18.7, status: 'pending', score: 85 },
    { id: 4, name: 'Cloud Services', revenue: 15.2, growth: 32.1, status: 'active', score: 95 },
    { id: 5, name: 'Data Analytics', revenue: 3.8, growth: 11.3, status: 'inactive', score: 71 },
  ]
  return (
    <div className="space-y-2">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group animate-slide-up"
          style={{
            animationDelay: `${idx * 0.08}s`,
            transform: `translateY(${hoveredId === row.id ? -5 : 0}px)`,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHoveredId(row.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white font-bold mb-1 group-hover:text-blue-300 transition-colors">
                {row.name}
              </h3>
              <div className="flex gap-6 text-sm">
                <span className="text-slate-400">
                  Revenue:{" "}
                  <span className="text-blue-400 font-mono">
                    ${row.revenue}M
                  </span>
                </span>
                <span className="text-slate-400">
                  Growth:{" "}
                  <span
                    className={
                      row.growth >= 0 ? "text-emerald-400" : "text-red-400"
                    }
                    style={{ fontWeight: "bold" }}
                  >
                    {row.growth > 0 ? "+" : ""}
                    {row.growth}%
                  </span>
                </span>
              </div>
            </div>
            <div className="text-right">
              <Star
                className={`w-5 h-5 transition-all duration-300 ${
                  hoveredId === row.id
                    ? "text-yellow-400 animate-bounce"
                    : "text-slate-600"
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStackEffect;
