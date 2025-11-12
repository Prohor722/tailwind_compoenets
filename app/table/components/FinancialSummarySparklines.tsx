import React from "react";

const FinancialSummarySparklines = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-700 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Quarter
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
            Revenue
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
            Change
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Trend
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          { q: "Q1 2024", rev: "$2.4M", change: "+12%", trend: "up" },
          { q: "Q2 2024", rev: "$2.8M", change: "+18%", trend: "up" },
          { q: "Q3 2024", rev: "$3.1M", change: "+24%", trend: "up" },
          { q: "Q4 2024", rev: "$3.8M", change: "+31%", trend: "up" },
          { q: "Q1 2025", rev: "$4.2M", change: "+39%", trend: "up" },
        ].map((row, idx) => (
          <tr
            key={idx}
            className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {row.q}
            </td>
            <td className="px-6 py-4 text-right text-lg font-bold text-emerald-400">
              {row.rev}
            </td>
            <td className="px-6 py-4 text-right">
              <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                <TrendingUp className="w-4 h-4" />
                {row.change}
              </span>
            </td>
            <td className="px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{ height: `${20 + i * 15}px` }}
                    className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm"
                  ></div>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FinancialSummarySparklines;
