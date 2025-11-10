import React from "react";

const RealTimeActivityFeed = () => {
  return (
    <div className="divide-y divide-slate-800 max-h-96 overflow-y-auto">
      {[
        {
          action: "Deploy completed",
          user: "Sarah",
          time: "2 min ago",
          status: "success",
        },
        {
          action: "Build started",
          user: "Mike",
          time: "5 min ago",
          status: "loading",
        },
        {
          action: "Test failed",
          user: "Emma",
          time: "12 min ago",
          status: "error",
        },
        {
          action: "Review approved",
          user: "James",
          time: "18 min ago",
          status: "success",
        },
        {
          action: "Commit pushed",
          user: "Lisa",
          time: "24 min ago",
          status: "success",
        },
      ].map((activity, idx) => (
        <div
          key={idx}
          className="p-4 hover:bg-slate-800/50 transition-colors flex items-center gap-3"
        >
          <div
            className={`w-3 h-3 rounded-full ${
              activity.status === "success"
                ? "bg-emerald-500"
                : activity.status === "error"
                ? "bg-red-500"
                : "bg-blue-500 animate-pulse"
            }`}
          ></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white font-medium">{activity.action}</p>
            <p className="text-xs text-slate-400">
              {activity.user} • {activity.time}
            </p>
          </div>
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default RealTimeActivityFeed;
