import React from "react";

const Isometric3DCardsTable = () => {

  const tableData = [
    { id: 1, name: 'Acme Corp', revenue: 12.5, growth: 24.5, status: 'active', score: 92, change: '+2.1%' },
    { id: 2, name: 'TechStart Inc', revenue: 8.3, growth: -5.2, status: 'active', score: 78, change: '-1.3%' },
    { id: 3, name: 'Design Studio', revenue: 5.1, growth: 18.7, status: 'pending', score: 85, change: '+3.2%' },
    { id: 4, name: 'Cloud Services', revenue: 15.2, growth: 32.1, status: 'active', score: 95, change: '+4.5%' },
    { id: 5, name: 'Data Analytics', revenue: 3.8, growth: 11.3, status: 'inactive', score: 71, change: '+1.8%' },
  ];

  return (
    <div className="min-w-md max-w-lg grid grid-cols-1 md:grid-cols-2 gap-2">
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
            <div className="inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 shadow-2xl group-hover:shadow-blue-500/50 transition-shadow duration-300">
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

            <div className="-bottom-4 -right-4 w-full h-full bg-black/30 rounded-xl z-0"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Isometric3DCardsTable;
