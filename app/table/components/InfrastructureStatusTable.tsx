import { AlertCircle, CheckCircle2 } from 'lucide-react';


const InfrastructureStatusTable = () => {
  
  const data = [
    { id: 1, title: 'Critical Bug Fix', author: 'Sarah', status: 'Merged', commits: 12, changes: 342, likes: 45, comments: 8, timestamp: '2 hours ago', priority: 'Critical', branch: 'hotfix/auth-issue' },
    { id: 2, title: 'Feature: Dark Mode', author: 'Mike', status: 'Open', commits: 8, changes: 156, likes: 23, comments: 12, timestamp: '4 hours ago', priority: 'Medium', branch: 'feature/dark-mode' },
    { id: 3, title: 'Performance Optimization', author: 'Emma', status: 'In Review', commits: 15, changes: 567, likes: 34, comments: 6, timestamp: '1 day ago', priority: 'High', branch: 'perf/optimize-bundle' },
    { id: 4, title: 'Documentation Update', author: 'James', status: 'Merged', commits: 3, changes: 89, likes: 12, comments: 2, timestamp: '2 days ago', priority: 'Low', branch: 'docs/api-reference' },
    { id: 5, title: 'Refactor Components', author: 'Lisa', status: 'In Review', commits: 22, changes: 891, likes: 56, comments: 18, timestamp: '3 days ago', priority: 'High', branch: 'refactor/components' },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-slate-100 to-blue-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Service
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Status
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            Uptime
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            Response Time
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            CPU
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: "API Server",
            status: "Healthy",
            uptime: 99.98,
            response: 45,
            cpu: 35,
          },
          {
            name: "Database",
            status: "Healthy",
            uptime: 99.95,
            response: 12,
            cpu: 42,
          },
          {
            name: "Cache Layer",
            status: "Warning",
            uptime: 99.85,
            response: 8,
            cpu: 68,
          },
          {
            name: "CDN",
            status: "Healthy",
            uptime: 99.99,
            response: 23,
            cpu: 28,
          },
          {
            name: "Message Queue",
            status: "Healthy",
            uptime: 99.92,
            response: 34,
            cpu: 51,
          },
        ].map((item, idx) => (
          <tr
            key={idx}
            className="border-b border-slate-100 hover:bg-blue-50 transition-colors"
          >
            <td className="px-6 py-4 text-sm font-semibold text-slate-900">
              {item.name}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                {item.status === "Healthy" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                )}
                <span
                  className={`text-sm font-semibold ${
                    item.status === "Healthy"
                      ? "text-emerald-700"
                      : "text-amber-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${item.uptime}%` }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  ></div>
                </div>
                <span className="text-xs font-bold text-slate-700 w-10 text-right">
                  {item.uptime}%
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                {item.response}ms
              </span>
            </td>
            <td className="px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center relative">
                  <span className="text-xs font-bold text-blue-700">
                    {item.cpu}%
                  </span>
                  <div
                    className="absolute inset-0 rounded-lg border-2 border-transparent"
                    style={{
                      borderRightColor: "#06b6d4",
                      borderTopColor: "#06b6d4",
                      transform: `rotate(${item.cpu * 3.6}deg)`,
                    }}
                  ></div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfrastructureStatusTable;
