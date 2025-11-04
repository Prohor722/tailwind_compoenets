import React from "react";
import { Radio, Settings } from 'lucide-react';


const InlineEditTable = () => {
    
  const data = [
    { id: 1, name: 'Sarah Anderson', position: 'Senior PM', salary: '$145,000', start: '2021-03-15', team: 8, performance: 94, department: 'Product', badge: 'Lead' },
    { id: 2, name: 'Mike Chen', position: 'Senior Developer', salary: '$165,000', start: '2020-07-20', team: 6, performance: 88, department: 'Engineering', badge: 'Expert' },
    { id: 3, name: 'Emma Wilson', position: 'Designer', salary: '$125,000', start: '2022-01-10', team: 3, performance: 91, department: 'Design', badge: 'Contributor' },
    { id: 4, name: 'James Johnson', position: 'Data Analyst', salary: '$135,000', start: '2021-11-05', team: 4, performance: 85, department: 'Analytics', badge: 'Rising' },
    { id: 5, name: 'Lisa Garcia', position: 'Director', salary: '$185,000', start: '2019-05-01', team: 15, performance: 96, department: 'Operations', badge: 'Executive' },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Department
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-100 hover:bg-blue-50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-slate-900">
              {item.name}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2 group/edit">
                <span className="text-sm text-slate-600">
                  {item.department}
                </span>
                <button className="p-1 opacity-0 group-hover/edit:opacity-100 hover:bg-slate-200 rounded transition-all">
                  <Settings className="w-3 h-3 text-slate-500" />
                </button>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold group/badge hover:bg-emerald-200 cursor-pointer transition-colors">
                <Radio className="w-2 h-2 fill-emerald-700" />
                Active
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InlineEditTable;
