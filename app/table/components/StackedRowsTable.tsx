import React from "react";

const StackedRowsTable = () => {
  return (
    <div className="space-y-2">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="group cursor-pointer animate-slide-right"
          style={{ animationDelay: `${idx * 0.08}s` }}
        >
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 hover:from-blue-600/20 hover:to-purple-600/20 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-white font-bold group-hover:text-blue-300 transition-colors">
                    {row.name}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {row.status === "active"
                      ? "🟢 Active"
                      : row.status === "pending"
                      ? "🟡 Pending"
                      : "⚪ Inactive"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-400">
                    ${row.revenue}M
                  </p>
                  <p
                    className={`text-sm ${
                      row.growth >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {row.growth > 0 ? "↑" : "↓"} {Math.abs(row.growth)}%
                  </p>
                </div>
              </div>

              <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 bar-fill"
                  style={{
                    ["--bar-width" as string]: `${row.score}%`,
                    animationDelay: `${idx * 0.1}s`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedRowsTable;
