import React from "react";

const SalaryTransparencyTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          Salary Bands & Compensation
        </h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 font-medium text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Employee
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Start Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Salary
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Growth
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-blue-50/50 transition-all group"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">{item.department}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {item.start}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900">
                      {item.salary}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    {idx % 2 === 0 ? (
                      <>
                        <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-600">
                          +8%
                        </span>
                      </>
                    ) : (
                      <>
                        <ArrowDownLeft className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-semibold text-slate-600">
                          Stable
                        </span>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryTransparencyTable;
