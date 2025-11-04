import React from "react";

const InlineEditTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Department
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-100 hover:bg-blue-50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-slate-900">
              {item.name}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2 group/edit">
                <span className="text-sm text-slate-600">
                  {item.department}
                </span>
                <button className="p-1 opacity-0 group-hover/edit:opacity-100 hover:bg-slate-200 rounded transition-all">
                  <Settings className="w-3 h-3 text-slate-500" />
                </button>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold group/badge hover:bg-emerald-200 cursor-pointer transition-colors">
                <Radio className="w-2 h-2 fill-emerald-700" />
                Active
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InlineEditTable;
