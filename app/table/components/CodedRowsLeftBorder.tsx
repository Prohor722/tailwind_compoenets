import React from "react";

const CodedRowsLeftBorder = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-100 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 w-1"></th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Role
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Priority
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const colorMap: Record<string, string> = {
            Critical: "border-l-red-500 bg-red-50 hover:bg-red-100",
            High: "border-l-amber-500 bg-amber-50 hover:bg-amber-100",
            Medium: "border-l-blue-500 bg-blue-50 hover:bg-blue-100",
          };
          return (
            <tr
              key={item.id}
              className={`border-b border-slate-100 border-l-4 transition-colors group cursor-pointer ${
                colorMap[item.priority] ?? "border-l-slate-500"
              }`}
            >
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/60 backdrop-blur-sm`}
                >
                  {getPriorityIcon(item.priority)}
                  {item.priority}
                </span>
              </td>
              <td className="px-6 py-4 text-right font-bold text-slate-900">
                {item.price}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CodedRowsLeftBorder;
