import { useState } from 'react';

export default function ModernTables() {

  
  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', revenue: '$12,500', email: 'sarah@company.com' },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', revenue: '$9,200', email: 'mike@company.com' },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', revenue: '$8,100', email: 'emma@company.com' },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', revenue: '$11,300', email: 'james@company.com' },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', revenue: '$15,600', email: 'lisa@company.com' },
  ];

  



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Table 10: Shadowed Cards */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Shadowed Card Grid</h2>
          </div>
          <div className="p-6">
            
          </div>
        </div>
      </div>
    </div>
  );
}