'use client';
import { useState } from "react";
import { ChevronDown } from 'lucide-react';

const NestedHierarchyTable = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      position: "Senior PM",
      salary: "$145,000",
      start: "2021-03-15",
      team: 8,
      performance: 94,
      department: "Product",
      badge: "Lead",
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "Senior Developer",
      salary: "$165,000",
      start: "2020-07-20",
      team: 6,
      performance: 88,
      department: "Engineering",
      badge: "Expert",
    },
    {
      id: 3,
      name: "Emma Wilson",
      position: "Designer",
      salary: "$125,000",
      start: "2022-01-10",
      team: 3,
      performance: 91,
      department: "Design",
      badge: "Contributor",
    },
    {
      id: 4,
      name: "James Johnson",
      position: "Data Analyst",
      salary: "$135,000",
      start: "2021-11-05",
      team: 4,
      performance: 85,
      department: "Analytics",
      badge: "Rising",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      position: "Director",
      salary: "$185,000",
      start: "2019-05-01",
      team: 15,
      performance: 96,
      department: "Operations",
      badge: "Executive",
    },
  ];
  return (
    <table className="max-w-md bg-gray-700 rounded-lg shadow-lg overflow-hidden">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300"></th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Role
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Team Size
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-4">
              <button
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
                className="text-slate-400 hover:text-slate-200"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
            </td>
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.name}
            </td>
            <td className="px-6 py-4 text-sm text-slate-400">
              {item.position}
            </td>
            <td className="px-6 py-4 text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold">
                {item.team}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NestedHierarchyTable;
