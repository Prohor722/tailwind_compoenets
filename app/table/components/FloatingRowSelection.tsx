import React from "react";

const FloatingRowSelection = () => {
  return (
    <div className="space-y-2 bg-slate-900/30 p-6 rounded-xl border border-slate-800">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="group cursor-pointer animate-slide-up"
          style={{ animationDelay: `${idx * 0.08}s` }}
          onClick={() => setSelectedId(selectedId === row.id ? null : row.id)}
        >
          <div
            className={`p-4 rounded-lg transition-all duration-300 transform ${
              selectedId === row.id
                ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-blue-500/50 scale-102"
                : "bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {row.name}
                </h3>
                <div className="flex gap-4 text-sm text-slate-400">
                  <span>
                    Revenue:{" "}
                    <span className="text-blue-400 font-mono">
                      ${row.revenue}M
                    </span>
                  </span>
                  <span>
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
                <div
                  className={`text-lg font-bold transition-all duration-300 ${
                    selectedId === row.id
                      ? "text-blue-400 scale-125"
                      : "text-slate-500"
                  }`}
                >
                  ●
                </div>
              </div>
            </div>

            {selectedId === row.id && (
              <div className="mt-4 pt-4 border-t border-slate-700/50 animate-slide-down">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500/10 p-3 rounded">
                    <p className="text-blue-400 text-xs mb-1">Score</p>
                    <p className="text-white font-bold text-xl">
                      {row.score}/100
                    </p>
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-400 text-xs mb-1">Change</p>
                    <p className="text-white font-bold text-xl">{row.change}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingRowSelection;
