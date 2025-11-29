import React from "react";

const BubbleNetworkTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="relative h-40 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group animate-pop overflow-hidden"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-white font-bold mb-3 group-hover:text-blue-300 transition-colors">
              {row.name}
            </h3>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 text-center hover:bg-blue-500/30 transition-all duration-300">
                <p className="text-blue-300 text-xs">Revenue</p>
                <p className="text-white font-bold text-sm">${row.revenue}M</p>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-2 text-center hover:bg-purple-500/30 transition-all duration-300">
                <p className="text-purple-300 text-xs">Growth</p>
                <p className="text-white font-bold text-sm">{row.growth}%</p>
              </div>
              <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-2 text-center hover:bg-pink-500/30 transition-all duration-300">
                <p className="text-pink-300 text-xs">Score</p>
                <p className="text-white font-bold text-sm">{row.score}</p>
              </div>
            </div>

            <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bar-fill"
                style={{
                  ["--bar-width" as string]: `${row.score}%`,
                  animationDelay: `${idx * 0.1 + 0.2}s`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BubbleNetworkTable;
