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
        


        {/* Table 4: Compact with Left Accent */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Compact with Accent</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
}