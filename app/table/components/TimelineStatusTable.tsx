import React from "react";

const TimelineStatusTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Project
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Owner
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Timeline
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => {
          const statuses = [
            "On Track",
            "At Risk",
            "Delayed",
            "Completed",
            "In Progress",
          ];
          const colors = ["emerald", "amber", "red", "blue", "purple"];
          const status = statuses[idx];
          const color = colors[idx];

          return (
            <tr
              key={item.id}
              className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
            >
              <td className="px-6 py-4 text-sm font-semibold text-white">
                {item.department} Initiative
              </td>
              <td className="px-6 py-4 text-sm text-slate-400">{item.name}</td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 bg-${color}-500/20 text-${color}-300 text-xs font-semibold rounded-full`}
                    >
                      {status === "On Track" && (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {status === "At Risk" && (
                        <AlertCircle className="w-3 h-3" />
                      )}
                      {status === "Delayed" && <Clock className="w-3 h-3" />}
                      {status}
                    </span>
                  </div>
                  <div className="w-48 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      style={{
                        width: `${item.performance - 20 + Math.random() * 20}%`,
                      }}
                      className={`h-full bg-${color}-500 rounded-full`}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TimelineStatusTable;
