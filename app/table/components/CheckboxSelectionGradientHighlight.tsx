"use client";
import React, { useState } from "react";

const CheckboxSelectionGradientHighlight = () => {
  const [selectedRows, setSelectedRows] = useState(new Set());
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

  const toggleRow = (id: number) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedRows(newSet);
  };

  return (
    <div className="overflow-x-auto">
      <table className="max-w-md">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-left w-8">
              <input type="checkbox" className="rounded border-slate-300" />
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Role
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={`border-b border-slate-100 cursor-pointer transition-all ${
                selectedRows.has(item.id)
                  ? "bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"
                  : "hover:bg-slate-50"
              }`}
              onClick={() => toggleRow(item.id)}
            >
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={selectedRows.has(item.id)}
                  onChange={() => {}}
                  className="rounded border-slate-300"
                />
              </td>
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
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

export default CheckboxSelectionGradientHighlight;
