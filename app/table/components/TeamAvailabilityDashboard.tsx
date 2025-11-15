import React from "react";

const TeamAvailabilityDashboard = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Team Member
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Status
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Response Time
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Timezone
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Rating
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm relative`}
                >
                  {item.avatar}
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900 ${getStatusColor(
                      item.status
                    )}`}
                  ></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">{item.title}</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                  item.status === "online"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : item.status === "busy"
                    ? "bg-red-500/20 text-red-300"
                    : "bg-amber-500/20 text-amber-300"
                }`}
              >
                {item.availability}
              </span>
            </td>
            <td className="px-6 py-4 text-sm text-slate-300">
              {item.responseTime}
            </td>
            <td className="px-6 py-4 text-sm text-slate-300">
              {item.timezone}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(item.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-600"
                    }`}
                  />
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamAvailabilityDashboard;
