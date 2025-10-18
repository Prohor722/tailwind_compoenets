import { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';

export default function ModernTables() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  
  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', revenue: '$12,500', email: 'sarah@company.com' },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', revenue: '$9,200', email: 'mike@company.com' },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', revenue: '$8,100', email: 'emma@company.com' },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', revenue: '$11,300', email: 'james@company.com' },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', revenue: '$15,600', email: 'lisa@company.com' },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'bg-emerald-100 text-emerald-800',
      'Away': 'bg-amber-100 text-amber-800',
      'Offline': 'bg-gray-100 text-gray-800',
    };
    return colors[status as keyof typeof colors] || colors['Offline'];
  };

  const getStatusDot = (status: string) => {
    const colors = {
      'Active': 'bg-emerald-500',
      'Away': 'bg-amber-500',
      'Offline': 'bg-gray-400',
    };
    return colors[status as keyof typeof colors] || colors['Offline'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">



        {/* Table 6: Colorful Headers */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Colorful Headers</h2>
          </div>
          
        </div>

        {/* Table 7: With Status Indicators */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">With Live Status Indicators</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusDot(item.status)} animate-pulse`}></div>
                        <span className="text-sm font-medium text-slate-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 8: Expandable Rows */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Expandable Rows</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 w-8"></th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <>
                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setExpandedRow(expandedRow === item.id ? null : item.id)}>
                      <td className="px-6 py-4">
                        <button className="text-slate-400 hover:text-slate-600">
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedRow === item.id ? 'rotate-180' : ''}`} />
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.revenue}</td>
                    </tr>
                    {expandedRow === item.id && (
                      <tr className="bg-blue-50 border-b border-slate-100">
                        <td colSpan={4} className="px-6 py-4">
                          <div className="space-y-2">
                            <p><span className="font-semibold text-slate-700">Email:</span> <span className="text-slate-600">{item.email}</span></p>
                            <p><span className="font-semibold text-slate-700">Status:</span> <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>{item.status}</span></p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 9: Vertical Timeline Style */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Timeline Style</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {data.map((item, idx) => (
                <div key={item.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${getStatusDot(item.status)}`}></div>
                    {idx !== data.length - 1 && <div className="w-1 h-12 bg-slate-200 mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                      <h3 className="font-semibold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.role}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                        <span className="text-sm font-semibold text-slate-900">{item.revenue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table 10: Shadowed Cards */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Shadowed Card Grid</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item) => (
                <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                      <p className="text-sm text-slate-600">{item.role}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getStatusDot(item.status)}`}></div>
                  </div>
                  <div className="space-y-2 mb-4 pb-4 border-b border-slate-100">
                    <p className="text-sm text-slate-600">{item.email}</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">{item.revenue}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}