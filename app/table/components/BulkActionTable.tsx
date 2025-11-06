import React from "react";

const BulkActionTable = () => {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Bulk Actions & Selection
        </h2>
        {selectedRows.size > 0 && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-300">
              {selectedRows.size} selected
            </span>
            <button className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm font-medium transition-colors">
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
            {data.map((item) => (
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
