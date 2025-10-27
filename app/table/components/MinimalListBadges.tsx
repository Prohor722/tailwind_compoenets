import React from "react";
import { ChevronRight } from 'lucide-react';

const MinimalListBadges = () => {
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
    <div className="max-w-md divide-y divide-slate-200 bg-gray-100 shadow">
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
