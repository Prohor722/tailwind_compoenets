"use client";
import React, { useState } from "react";

const WithSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      revenue: "$12,500",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      revenue: "$9,200",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      revenue: "$8,100",
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      revenue: "$11,300",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      revenue: "$15,600",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Role
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {item.role}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {item.revenue}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WithSearchFilter;
