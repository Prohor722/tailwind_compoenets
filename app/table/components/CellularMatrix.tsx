import React from "react";

const CellularMatrix = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-800/80 border-b-2 border-blue-500/50">
          <th className="px-6 py-4 text-left text-xs font-bold text-blue-400 uppercase tracking-widest">
            Entity
          </th>
          <th className="px-6 py-4 text-left text-xs font-bold text-blue-400 uppercase tracking-widest">
            Value
          </th>
          <th className="px-6 py-4 text-left text-xs font-bold text-blue-400 uppercase tracking-widest">
            Trend
          </th>
          <th className="px-6 py-4 text-left text-xs font-bold text-blue-400 uppercase tracking-widest">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700/50">
        {tableData.map((row, idx) => (
          <tr
            key={row.id}
            className="hover:bg-slate-800/50 transition-all duration-300 group animate-slide-right"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <td className="px-6 py-4">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse-dot absolute -left-4"></div>
                <span className="text-cyan-300 font-mono text-sm">
                  {row.name}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 font-mono text-green-400">
              ${row.revenue.toFixed(1)}M
            </td>
            <td className="px-6 py-4">
              <span
                className={`font-mono text-sm ${
                  row.growth >= 0 ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {row.growth > 0 ? "↑" : "↓"} {Math.abs(row.growth)}%
              </span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    row.status === "active"
                      ? "bg-emerald-500 animate-pulse-dot"
                      : "bg-slate-500"
                  }`}
                ></div>
                <span className="text-slate-300 text-sm capitalize">
                  {row.status}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CellularMatrix;
