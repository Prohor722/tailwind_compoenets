import { useState } from 'react';

export default function ModernTables() {
  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', revenue: '$12,500' },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', revenue: '$9,200' },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', revenue: '$8,100' },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', revenue: '$11,300' },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', revenue: '$15,600' },
  ];

  const statusList = ['Active', 'Away', 'Offline'] as const;
  type StatusType = typeof statusList[number];

  const getStatusColor = (status: string) => {
    const colors: Record<StatusType, string> = {
      'Active': 'bg-emerald-100 text-emerald-800',
      'Away': 'bg-amber-100 text-amber-800',
      'Offline': 'bg-gray-100 text-gray-800',
    };
    return colors[status as StatusType] || colors['Offline'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        

        {/* Table 3: Striped with Dark Accent */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Striped Design</h2>
          </div>
          <div className="overflow-x-auto">
            
          </div>
        </div>

        {/* Table 4: Compact with Left Accent */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Compact with Accent</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-blue-200">
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wide">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wide">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wide">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wide">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-3 text-sm font-medium text-slate-900 border-l-4 border-transparent group-hover:border-blue-500 transition-colors">{item.name}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{item.role}</td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex px-2 py-1 rounded text-xs font-semibold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm font-semibold text-slate-900">{item.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}