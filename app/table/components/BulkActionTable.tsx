"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface DataItem {
  id: number;
  name: string;
  position: string;
  salary: string;
  start: string;
  team: number;
  performance: number;
  department: string;
  badge: string;
}
const BulkActionTable = () => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [ newData, setNewData ] = useState<DataItem[]>([]);

  useEffect(() => {
    setNewData(data);
  }, []);

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

  const deleteData = () => {
    const filteredData = newData.filter(
      (item) => !selectedRows.has(item.id)
    );
    setNewData(filteredData);
    setSelectedRows(new Set());
  }

  const toggleRow = (id: number) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedRows(newSet);
  };

  return (
    <div className="max-w-md bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Bulk Actions & Selection
        </h2>
        {selectedRows.size > 0 && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-300">
              {selectedRows.size} selected
            </span>
            <button
                onClick={deleteData} 
                className="cursor-pointer flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm font-medium transition-colors">
              <X className="w-4 h-4" />
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-800/50">
              <th className="px-6 py-4 text-left w-8">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 cursor-pointer"
                />
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Salary
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item) => (
              <tr
                key={item.id}
                className={`border-b border-slate-800 cursor-pointer transition-all ${
                  selectedRows.has(item.id)
                    ? "bg-blue-500/20 hover:bg-blue-500/30"
                    : "hover:bg-slate-800/50"
                }`}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(item.id)}
                    onChange={() => toggleRow(item.id)}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-800 cursor-pointer"
                  />
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-slate-400">
                  {item.salary}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium">
                    {item.department}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BulkActionTable;
