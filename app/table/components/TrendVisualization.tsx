import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

const TrendVisualization = () => {
  return (
    <table className="w-full">
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
