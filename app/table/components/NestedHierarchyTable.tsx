import React from "react";

const NestedHierarchyTable = () => {
  return (
    <table className="w-full">
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
