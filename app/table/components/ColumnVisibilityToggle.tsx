import React from "react";

const ColumnVisibilityToggle = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Column Visibility Control
          </h2>
          <div className="flex gap-2">
            {["Name", "Email", "Phone", "Tasks"].map((col, idx) => (
              <button
                key={idx}
                onClick={() => toggleColumn(idx)}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  visibleColumns.has(idx)
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {visibleColumns.has(idx) ? (
                  <Eye className="w-3 h-3" />
                ) : (
                  <EyeOff className="w-3 h-3" />
                )}
                {col}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Name
              </th>
              {visibleColumns.has(1) && (
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Email
                </th>
              )}
              {visibleColumns.has(2) && (
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Phone
                </th>
              )}
              {visibleColumns.has(3) && (
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                  Tasks
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {item.name}
                </td>
                {visibleColumns.has(1) && (
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.email}
                  </td>
                )}
                {visibleColumns.has(2) && (
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.phone}
                  </td>
                )}
                {visibleColumns.has(3) && (
                  <td className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                    {item.tasks}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ColumnVisibilityToggle;
