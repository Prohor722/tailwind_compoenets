import React from "react";

const KanbanBoardStyle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {["Active", "Away", "Offline"].map((status) => (
        <div
          key={status}
          className="bg-slate-800 rounded-xl border border-slate-700 p-4 min-h-96"
        >
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
            <div
              className={`w-3 h-3 rounded-full ${
                status === "Active"
                  ? "bg-emerald-500"
                  : status === "Away"
                  ? "bg-amber-500"
                  : "bg-gray-500"
              }`}
            ></div>
            <h3 className="text-white font-semibold">{status}</h3>
            <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
              {data.filter((d) => d.status === status).length}
            </span>
          </div>
          <div className="space-y-3">
            {data
              .filter((d) => d.status === status)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 border border-slate-600 hover:border-slate-500 transition-all cursor-move hover:shadow-lg hover:shadow-purple-500/10 group"
                >
                  <p className="text-white font-semibold text-sm mb-2 group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400 mb-2">{item.role}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-purple-300">
                      {item.revenue}
                    </span>
                    <Eye className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoardStyle;
