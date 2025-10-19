import React from "react";

const VerticalTimelineStyle = () => {
  return (
    <div className="p-6">
      <div className="space-y-6">
        {data.map((item, idx) => (
          <div key={item.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full ${getStatusDot(item.status)}`}
              ></div>
              {idx !== data.length - 1 && (
                <div className="w-1 h-12 bg-slate-200 mt-2"></div>
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.role}</p>
                <div className="flex items-center justify-between mt-3">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.revenue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimelineStyle;
