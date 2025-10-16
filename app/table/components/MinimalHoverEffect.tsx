import React from "react";

const MinimalHoverEffect = () => {
  return (
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
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <td className="px-6 py-4 text-sm font-medium text-slate-900">
              {item.name}
            </td>
            <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
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
  );
};

export default MinimalHoverEffect;
