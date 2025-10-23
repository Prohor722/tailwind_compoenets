"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const DualColumnHover = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      revenue: "$12,500",
      growth: "+24%",
      score: 92,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      revenue: "$9,200",
      growth: "+18%",
      score: 85,
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      revenue: "$8,100",
      growth: "+12%",
      score: 78,
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      revenue: "$11,300",
      growth: "+31%",
      score: 88,
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      revenue: "$15,600",
      growth: "+9%",
      score: 95,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="max-w-md">
        <thead>
          <tr className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Employee
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Details
            </th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <p className="text-sm text-slate-600">{item.revenue}</p>
                  <p className="text-xs text-slate-400">{item.status}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  className={`p-2 rounded-lg transition-all transform ${
                    hoveredId === item.id
                      ? "bg-blue-500 text-white scale-110"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DualColumnHover;
