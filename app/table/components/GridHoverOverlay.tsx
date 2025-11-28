"use client";
import { useState } from "react";
import { MapPin, TrendingUp, Edit2, Trash2, Copy } from 'lucide-react';

const GridHoverOverlay = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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
    <div className="max-w-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative group rounded-xl overflow-hidden"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 p-6 rounded-xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  #{item.id}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                {item.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{item.role}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  {item.location}
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  {item.revenue}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-600">
              <div className="text-xs text-slate-400">
                {item.engagement}% engagement
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2 mt-2 overflow-hidden">
                <div
                  style={{ width: `${item.engagement}%` }}
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                ></div>
              </div>
            </div>
          </div>

          {hoveredId === item.id && (
            <div className="inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl flex items-end justify-between p-4 animate-in fade-in duration-200">
              <div>
                <p className="text-white text-xs font-semibold mb-1">
                  Quick Actions
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-blue-500/80 hover:bg-blue-500 rounded-lg transition-colors text-white">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2 bg-amber-500/80 hover:bg-amber-500 rounded-lg transition-colors text-white">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors text-white">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridHoverOverlay;
