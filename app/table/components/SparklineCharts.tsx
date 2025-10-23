import React from "react";
import { Star, TrendingUp } from "lucide-react";

const data = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Product Manager",
    status: "Active",
    revenue: "$12,500",
    growth: "+24%",
    score: 92,
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Developer",
    status: "Active",
    revenue: "$9,200",
    growth: "+18%",
    score: 85,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Designer",
    status: "Away",
    revenue: "$8,100",
    growth: "+12%",
    score: 78,
  },
  {
    id: 4,
    name: "James Johnson",
    role: "Analyst",
    status: "Active",
    revenue: "$11,300",
    growth: "+31%",
    score: 88,
  },
  {
    id: 5,
    name: "Lisa Garcia",
    role: "Manager",
    status: "Offline",
    revenue: "$15,600",
    growth: "+9%",
    score: 95,
  },
];

const SparklineCharts = () => {
  return (
    <div className="overflow-x-auto">
      <table className="max-w-md bg-gray-900">
        <thead>
          <tr className="border-b border-slate-600 bg-slate-800/50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Performance
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Growth
            </th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-600 hover:bg-slate-700/50 transition-colors group cursor-pointer"
            >
              <td className="px-6 py-4">
                <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                  {item.name}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${item.score}%` }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                    ></div>
                  </div>
                  <span className="text-xs text-slate-400">{item.revenue}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-300">
                    {item.growth}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-lg font-bold text-white">
                    {item.score}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(item.score / 20)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SparklineCharts;
