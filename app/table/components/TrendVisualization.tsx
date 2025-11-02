import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

const TrendVisualization = () => {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      dept: "Product",
      email: "sarah@company.com",
      phone: "+1-555-0101",
      rating: 4.8,
      tasks: 24,
      time: "3:45 PM",
      trend: "up",
      alerts: 2,
      verified: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      dept: "Engineering",
      email: "mike@company.com",
      phone: "+1-555-0102",
      rating: 4.5,
      tasks: 18,
      time: "4:20 PM",
      trend: "up",
      alerts: 0,
      verified: true,
    },
    {
      id: 3,
      name: "Emma Wilson",
      dept: "Design",
      email: "emma@company.com",
      phone: "+1-555-0103",
      rating: 4.9,
      tasks: 31,
      time: "2:15 PM",
      trend: "down",
      alerts: 1,
      verified: false,
    },
    {
      id: 4,
      name: "James Johnson",
      dept: "Analytics",
      email: "james@company.com",
      phone: "+1-555-0104",
      rating: 4.6,
      tasks: 22,
      time: "5:30 PM",
      trend: "up",
      alerts: 3,
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Garcia",
      dept: "Management",
      email: "lisa@company.com",
      phone: "+1-555-0105",
      rating: 4.7,
      tasks: 28,
      time: "1:00 PM",
      trend: "stable",
      alerts: 0,
      verified: true,
    },
  ];

  return (
    <table className="max-w-md ">
      <thead>
        <tr className="bg-gradient-to-r from-slate-100 to-blue-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Tasks
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Trend
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group cursor-pointer"
          >
            <td className="px-6 py-4 text-sm font-semibold text-slate-900 group-hover:text-blue-600">
              {item.name}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(item.tasks / 31) * 100}%` }}
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                  ></div>
                </div>
                <span className="text-xs font-semibold text-slate-600 w-4">
                  {item.tasks}
                </span>
              </div>
            </td>
            <td className="px-6 py-4">
              {item.trend === "up" ? (
                <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+12%</span>
                </div>
              ) : item.trend === "down" ? (
                <div className="flex items-center gap-1 text-red-600 font-semibold">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm">-8%</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-slate-600 font-semibold">
                  <span className="text-sm">—</span>
                </div>
              )}
            </td>
            <td className="px-6 py-4">
              {item.alerts > 0 ? (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                  <AlertTriangle className="w-3 h-3" />
                  {item.alerts} alerts
                </span>
              ) : (
                <span className="inline-flex px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">
                  Healthy
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrendVisualization;
