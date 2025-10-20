import React from "react";

const ShadowedCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-slate-600">{item.role}</p>
            </div>
            <div
              className={`w-3 h-3 rounded-full ${getStatusDot(item.status)}`}
            ></div>
          </div>
          <div className="space-y-2 mb-4 pb-4 border-b border-slate-100">
            <p className="text-sm text-slate-600">{item.email}</p>
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                item.status
              )}`}
            >
              {item.status}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-900">
              {item.revenue}
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShadowedCards;
