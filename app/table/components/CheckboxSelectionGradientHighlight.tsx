import React from "react";

const CheckboxSelectionGradientHighlight = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
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
