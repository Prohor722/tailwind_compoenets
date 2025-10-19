import React from "react";

const ExpandableRows = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 w-8"></th>
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
            <>
              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() =>
                  setExpandedRow(expandedRow === item.id ? null : item.id)
                }
              >
                <td className="px-6 py-4">
                  <button className="text-slate-400 hover:text-slate-600">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedRow === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {item.role}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {item.revenue}
                </td>
              </tr>
              {expandedRow === item.id && (
                <tr className="bg-blue-50 border-b border-slate-100">
                  <td colSpan={4} className="px-6 py-4">
                    <div className="space-y-2">
                      <p>
                        <span className="font-semibold text-slate-700">
                          Email:
                        </span>{" "}
                        <span className="text-slate-600">{item.email}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-slate-700">
                          Status:
                        </span>{" "}
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableRows;
