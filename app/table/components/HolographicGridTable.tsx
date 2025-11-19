import React from "react";

const HolographicGridTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="hologram-effect border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/80 transition-all duration-300 group animate-slide-up"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-blue-300 font-bold text-lg group-hover:text-blue-200">
                {row.name}
              </h3>
              <Zap className="w-5 h-5 text-yellow-400 group-hover:animate-bounce" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20">
                <p className="text-blue-400 text-xs mb-1">Revenue</p>
                <p className="text-white font-bold text-lg">${row.revenue}M</p>
              </div>
              <div className="bg-purple-500/10 p-3 rounded border border-purple-500/20">
                <p className="text-purple-400 text-xs mb-1">Growth</p>
                <p
                  className={`font-bold text-lg ${
                    row.growth >= 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {row.growth > 0 ? "+" : ""}
                  {row.growth}%
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
              <p className="text-slate-400 text-xs mb-2">Performance Score</p>
              <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{
                    width: `${row.score}%`,
                    animation: "slideInLeft 0.8s ease-out forwards",
                  }}
                ></div>
              </div>
              <p className="text-blue-400 text-sm mt-2 font-mono">
                {row.score}/100
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HolographicGridTable;
