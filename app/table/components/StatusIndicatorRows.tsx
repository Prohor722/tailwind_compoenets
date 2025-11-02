import React from "react";

const StatusIndicatorRows = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-700 bg-slate-700/30">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300"></th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Status
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Activity
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors"
          >
            <td className="px-6 py-4">
              {item.verified ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <Circle className="w-5 h-5 text-slate-500" />
              )}
            </td>
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.name}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-sm text-slate-300">Online</span>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-400">{item.time}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatusIndicatorRows;
