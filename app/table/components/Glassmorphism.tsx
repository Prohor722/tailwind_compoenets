import React from "react";

const Glassmorphism = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Role
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <td className="px-6 py-4 text-sm font-medium text-white">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-slate-300">{item.role}</td>
              <td className="px-6 py-4 text-sm">
                <div className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <span className="text-slate-300">{item.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-white">
                {item.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Glassmorphism;
