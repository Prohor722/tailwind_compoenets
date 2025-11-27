import React from "react";

const Isometric3DCardsTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="h-64 group cursor-pointer animate-pop"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div
            className="relative w-full h-full transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(5deg) rotateY(-5deg) rotateZ(2deg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 shadow-2xl group-hover:shadow-blue-500/50 transition-shadow duration-300">
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-4">
                  {row.name}
                </h3>

                <div className="space-y-4">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur">
                    <p className="text-white/70 text-xs mb-1">Revenue</p>
                    <p className="text-white font-bold text-xl">
                      ${row.revenue}M
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 bg-white/10 p-3 rounded-lg backdrop-blur">
                      <p className="text-white/70 text-xs mb-1">Score</p>
                      <p className="text-white font-bold">{row.score}</p>
                    </div>
                    <div className="flex-1 bg-white/10 p-3 rounded-lg backdrop-blur">
                      <p className="text-white/70 text-xs mb-1">Growth</p>
                      <p className="text-white font-bold">{row.growth}%</p>
                    </div>
                  </div>

                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white/80 bar-fill"
                      style={{
                        ["--bar-width" as string]: `${row.score}%`,
                        animationDelay: `${idx * 0.1 + 0.3}s`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/30 rounded-xl z-0"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Isometric3DCardsTable;
