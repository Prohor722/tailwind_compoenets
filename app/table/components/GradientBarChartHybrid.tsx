const GradientBarChartHybrid = () => {
  const tableData = [
    {
      id: 1,
      name: "Acme Corp",
      revenue: 12.5,
      growth: 24.5,
      status: "active",
      score: 92,
      change: "+2.1%",
    },
    {
      id: 2,
      name: "TechStart Inc",
      revenue: 8.3,
      growth: -5.2,
      status: "active",
      score: 78,
      change: "-1.3%",
    },
    {
      id: 3,
      name: "Design Studio",
      revenue: 5.1,
      growth: 18.7,
      status: "pending",
      score: 85,
      change: "+3.2%",
    },
    {
      id: 4,
      name: "Cloud Services",
      revenue: 15.2,
      growth: 32.1,
      status: "active",
      score: 95,
      change: "+4.5%",
    },
    {
      id: 5,
      name: "Data Analytics",
      revenue: 3.8,
      growth: 11.3,
      status: "inactive",
      score: 71,
      change: "+1.8%",
    },
  ];

  return (
    <div className="space-y-5">
      {tableData.map((row, idx) => (
        <div
          key={row.id}
          className="animate-slide-left"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold text-sm">{row.name}</span>
            <span className="text-blue-400 font-mono text-sm">
              ${row.revenue}M
            </span>
          </div>
          <div className="relative h-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg overflow-hidden border border-slate-700">
              <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg bar-fill flex items-center justify-end pr-3"
              style={
                {
                  ["--bar-width" as any]: `${(row.revenue / 15.2) * 100}%`,
                  animationDelay: `${idx * 0.15}s`,
                } as React.CSSProperties
              }
            >
              <span className="text-white font-bold text-xs">{row.score}%</span>
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-slate-500 text-xs">Growth</span>
            <span
              className={`text-xs font-semibold ${
                row.growth >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {row.growth > 0 ? "↑" : "↓"} {Math.abs(row.growth)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradientBarChartHybrid;
