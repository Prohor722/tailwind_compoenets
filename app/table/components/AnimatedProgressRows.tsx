import React from "react";

const AnimatedProgressRows = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Member
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Progress
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Target
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {item.name}
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      style={{
                        width: `${item.score}%`,
                        animation: `slideIn 1.5s ease-out ${
                          idx * 0.1
                        }s forwards`,
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-slate-900">
                    {item.score}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
            @keyframes slideIn {
              from { width: 0; }
            }
          `}</style>
    </div>
  );
};

export default AnimatedProgressRows;
