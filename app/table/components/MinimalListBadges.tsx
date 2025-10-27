import React from "react";

const MinimalListBadges = () => {
  return (
    <div className="divide-y divide-slate-200">
      {data.map((item) => (
        <div
          key={item.id}
          className="px-6 py-4 hover:bg-slate-50 transition-colors group flex items-center justify-between cursor-pointer"
        >
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
              {item.name}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium">
                {item.role}
              </span>
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">
                {item.revenue}
              </span>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0">
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MinimalListBadges;
