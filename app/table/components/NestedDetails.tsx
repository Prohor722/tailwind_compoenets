import React, { useState } from "react";
import { TrendingUp, Zap, BarChart3 } from 'lucide-react';

const NestedDetails = () => {
  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', revenue: '$12,500', growth: '+24%', score: 92 },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', revenue: '$9,200', growth: '+18%', score: 85 },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', revenue: '$8,100', growth: '+12%', score: 78 },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', revenue: '$11,300', growth: '+31%', score: 88 },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', revenue: '$15,600', growth: '+9%', score: 95 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Team Member
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Metrics
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-purple-100 hover:bg-white/50 transition-colors"
            >
              <td className="px-6 py-4">
                <p className="font-semibold text-slate-900">{item.name}</p>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                  <Zap className="w-3 h-3" />
                  {item.role}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-semibold text-slate-900">
                      {item.revenue}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-emerald-600">
                      {item.growth}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NestedDetails;
