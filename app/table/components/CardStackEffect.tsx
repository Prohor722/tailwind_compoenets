import React from "react";

const CardStackEffect = () => {
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
