import React from "react";

const MinimalDotsConnectionTable = () => {
  return (
    <div className="space-y-8">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="animate-slide-up"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="flex items-center gap-8">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex-shrink-0 animate-ring-pulse"></div>

            <div className="flex-1">
              <h3 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors">
                {row.name}
              </h3>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-slate-500">Revenue</span>
                  <p className="text-blue-400 font-mono">${row.revenue}M</p>
                </div>
                <div>
                  <span className="text-slate-500">Status</span>
                  <p className="text-white capitalize">{row.status}</p>
                </div>
                <div>
                  <span className="text-slate-500">Score</span>
                  <p className="text-white font-bold">{row.score}/100</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 text-right">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.1)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="2"
                    style={{
                      strokeDasharray: `${(row.score / 100) * 282.7} 282.7`,
                      animation: `barFill 1s ease-out forwards`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {row.score}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MinimalDotsConnectionTable;
