import React from 'react'

const CardStyle = () => {
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

  return (
    <div className="p-6">
            <div className="space-y-3">
              {data.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-lg border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                    <span className="font-semibold text-slate-900">{item.revenue}</span>
                  </div>
                  <button className="ml-4 p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
  )
}

export default CardStyle