import {
  ChevronRight,
  Star,
  Mail,
  Phone,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";

export default function MoreAndMoreTableDesigns() {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      dept: "Product",
      email: "sarah@company.com",
      phone: "+1-555-0101",
      rating: 4.8,
      tasks: 24,
      time: "3:45 PM",
      trend: "up",
      alerts: 2,
      verified: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      dept: "Engineering",
      email: "mike@company.com",
      phone: "+1-555-0102",
      rating: 4.5,
      tasks: 18,
      time: "4:20 PM",
      trend: "up",
      alerts: 0,
      verified: true,
    },
    {
      id: 3,
      name: "Emma Wilson",
      dept: "Design",
      email: "emma@company.com",
      phone: "+1-555-0103",
      rating: 4.9,
      tasks: 31,
      time: "2:15 PM",
      trend: "down",
      alerts: 1,
      verified: false,
    },
    {
      id: 4,
      name: "James Johnson",
      dept: "Analytics",
      email: "james@company.com",
      phone: "+1-555-0104",
      rating: 4.6,
      tasks: 22,
      time: "5:30 PM",
      trend: "up",
      alerts: 3,
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Garcia",
      dept: "Management",
      email: "lisa@company.com",
      phone: "+1-555-0105",
      rating: 4.7,
      tasks: 28,
      time: "1:00 PM",
      trend: "stable",
      alerts: 0,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Table 33: Contact Card Layout */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Contact Card Layout
          </h2>
          
        </div>

        {/* Table 34: Icon-Rich Data Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Icon-Rich Metrics
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Member
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <BarChart3 className="w-4 h-4" />
                      Tasks
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <PieChart className="w-4 h-4" />
                      Rating
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-1">
                      <Activity className="w-4 h-4" />
                      Status
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-700 rounded-lg font-bold text-sm">
                        {item.tasks}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 flex items-center justify-center relative">
                          <span className="text-white font-bold text-sm">
                            {Math.round(item.rating * 10)}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="relative w-12 h-12">
                          <svg
                            className="w-12 h-12 transform -rotate-90"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="2"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="2"
                              strokeDasharray={`${
                                (item.rating / 5) * 62.8
                              } 62.8`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-700">
                            {Math.round((item.rating / 5) * 100)}%
                          </span>
                        </div>
                      </div>
                    </td>
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
