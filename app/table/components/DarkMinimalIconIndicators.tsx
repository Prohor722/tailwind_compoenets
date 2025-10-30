import React from "react";

const DarkMinimalIconIndicators = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-3 text-left text-xs font-bold text-slate-300 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-slate-300 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-slate-300 uppercase tracking-wider">
            Role
          </th>
          <th className="px-6 py-3 text-center text-xs font-bold text-slate-300 uppercase tracking-wider">
            Actions
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
              {item.status === "Active" ? (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-emerald-400">
                    {item.status}
                  </span>
                </div>
              ) : item.status === "Away" ? (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-xs font-semibold text-amber-400">
                    {item.status}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <span className="text-xs font-semibold text-gray-400">
                    {item.status}
                  </span>
                </div>
              )}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
              {item.name}
            </td>
            <td className="px-6 py-4 text-sm text-slate-400">{item.role}</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DarkMinimalIconIndicators;
