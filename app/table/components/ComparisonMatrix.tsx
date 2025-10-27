import { Eye, Zap, TrendingUp } from "lucide-react";

const ComparisonMatrix = () => {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      revenue: "$12,500",
      views: 1240,
      engagement: 84,
      location: "San Francisco",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      revenue: "$9,200",
      views: 892,
      engagement: 76,
      location: "New York",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      revenue: "$8,100",
      views: 756,
      engagement: 68,
      location: "London",
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      revenue: "$11,300",
      views: 1056,
      engagement: 91,
      location: "Austin",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      revenue: "$15,600",
      views: 1523,
      engagement: 95,
      location: "Toronto",
    },
  ];

  return (
    <table className="max-w-md">
      <thead>
        <tr className="border-b border-slate-700 bg-slate-700/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200 sticky left-0 bg-slate-700/50">
            Member
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">
            <div className="flex items-center justify-center gap-1">
              <Eye className="w-4 h-4" />
              Views
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">
            <div className="flex items-center justify-center gap-1">
              <Zap className="w-4 h-4" />
              Engagement
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4" />
              Growth
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-200">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr
            key={item.id}
            className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-medium text-white sticky left-0 bg-slate-800 group-hover:bg-slate-700/50">
              {item.name}
            </td>
            <td className="px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-300">
                    {Math.floor(item.views / 100)}
                  </span>
                </div>
                <span className="text-xs text-slate-400">{item.views}</span>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 rounded-full border-2 border-slate-600"></div>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-purple-400"
                    style={{
                      transform: `rotate(${item.engagement * 3.6}deg)`,
                    }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-purple-300">
                  {item.engagement}%
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <TrendingUp className="w-3 h-3" />+{18 + idx}%
              </span>
            </td>
            <td className="px-6 py-4 text-center">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {85 + idx * 2}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonMatrix;
