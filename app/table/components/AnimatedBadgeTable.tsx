import React from "react";

const AnimatedBadgeTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Employee
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Position
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Badge
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Performance
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.name}
            </td>
            <td className="px-6 py-4 text-sm text-slate-400">
              {item.position}
            </td>
            <td className="px-6 py-4">
              <div className="relative inline-block">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getBadgeColor(
                    item.badge
                  )} rounded-full blur-lg opacity-50 animate-pulse`}
                ></div>
                <span
                  className={`relative inline-flex items-center px-4 py-2 bg-gradient-to-r ${getBadgeColor(
                    item.badge
                  )} text-white text-xs font-bold rounded-full shadow-lg`}
                >
                  {item.badge}
                </span>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${item.performance}%` }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  ></div>
                </div>
                <span className="text-xs font-bold text-emerald-400">
                  {item.performance}%
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimatedBadgeTable;
