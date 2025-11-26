import React from "react";

const TimelineViewTable = () => {
  const tableData = [
    { id: 1, name: 'Acme Corp', revenue: 12.5, growth: 24.5, status: 'active', score: 92 },
    { id: 2, name: 'TechStart Inc', revenue: 8.3, growth: -5.2, status: 'active', score: 78 },
    { id: 3, name: 'Design Studio', revenue: 5.1, growth: 18.7, status: 'pending', score: 85 },
    { id: 4, name: 'Cloud Services', revenue: 15.2, growth: 32.1, status: 'active', score: 95 },
    { id: 5, name: 'Data Analytics', revenue: 3.8, growth: 11.3, status: 'inactive', score: 71 },
  ];

  return (
    <div className="space-y-6">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="pl-20 animate-slide-left"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="absolute left-0 top-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-950 group hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xs">{idx + 1}</span>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-white font-bold mb-2">{row.name}</h3>
            <p className="text-slate-400 text-sm mb-3">
              Revenue:{" "}
              <span className="text-blue-400 font-mono">${row.revenue}M</span> •
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
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${row.score}%` }}
                ></div>
              </div>
              <span className="text-slate-400 text-xs font-mono">
                {row.score}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineViewTable;
