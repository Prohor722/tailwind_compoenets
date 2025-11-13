import React from "react";

const TeamPerformanceMatrix = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-100 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Team Member
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            <div className="flex items-center justify-center gap-1">
              <Award className="w-4 h-4" />
              Quality
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            <div className="flex items-center justify-center gap-1">
              <Zap className="w-4 h-4" />
              Speed
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            <div className="flex items-center justify-center gap-1">
              <Users className="w-4 h-4" />
              Collaboration
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            Overall
          </th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 4).map((item) => {
          const scores = [92, 78, 85, 88];
          const idx = data.indexOf(item);
          const score = scores[idx];
          return (
            <tr
              key={item.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                {item.name}
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center">
                  <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${88 + Math.random() * 10}%` }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center">
                  <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${75 + Math.random() * 20}%` }}
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center">
                  <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${82 + Math.random() * 15}%` }}
                      className="h-full bg-gradient-to-r from-pink-400 to-rose-400"
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 font-bold text-slate-900">
                  {score}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TeamPerformanceMatrix;
