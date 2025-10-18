import React from 'react'

const CardStyle = () => {
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