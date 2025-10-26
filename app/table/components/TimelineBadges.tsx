import React from "react";

const TimelineBadges = () => {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      revenue: "$12,500",
      views: 1240,
      engagement: 84,
      location: "San Francisco",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      revenue: "$9,200",
      views: 892,
      engagement: 76,
      location: "New York",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      revenue: "$8,100",
      views: 756,
      engagement: 68,
      location: "London",
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      revenue: "$11,300",
      views: 1056,
      engagement: 91,
      location: "Austin",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      revenue: "$15,600",
      views: 1523,
      engagement: 95,
      location: "Toronto",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {data.map((item, idx) => (
        <div key={item.id} className="flex gap-4 group">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ring-4 ring-slate-800 group-hover:ring-purple-500/50 transition-all"></div>
            {idx !== data.length - 1 && (
              <div className="w-1 h-16 bg-gradient-to-b from-slate-600 to-transparent mt-2"></div>
            )}
          </div>
          <div className="flex-1 pb-4 group-hover:translate-x-2 transition-transform">
            <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-600">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">{item.revenue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-300">
                    {item.views} views
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineBadges;
