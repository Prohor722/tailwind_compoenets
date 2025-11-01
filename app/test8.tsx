import { useState } from "react";
import {
  ChevronRight,
  Star,
  Eye,
  EyeOff,
  CheckCircle2,
  Circle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Mail,
  Phone,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";

export default function MoreAndMoreTableDesigns() {
  const [visibleColumns, setVisibleColumns] = useState(new Set([0, 1, 2, 3]));

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

  const toggleColumn = (idx: number) => {
    const newSet = new Set(visibleColumns);
    if (newSet.has(idx)) newSet.delete(idx);
    else newSet.add(idx);
    setVisibleColumns(newSet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 mb-2">
            More Unique Tables
          </h1>
          <p className="text-slate-400">
            Advanced interactions and unique data visualizations
          </p>
        </div>

        {/* Table 29: Sidebar Actions Table */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">
              Sidebar Action Menu
            </h2>
          </div>
          <div className="overflow-x-auto"></div>
        </div>

        {/* Table 30: Column Visibility Toggle */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Column Visibility Control
              </h2>
              <div className="flex gap-2">
                {["Name", "Email", "Phone", "Tasks"].map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleColumn(idx)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      visibleColumns.has(idx)
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {visibleColumns.has(idx) ? (
                      <Eye className="w-3 h-3" />
                    ) : (
                      <EyeOff className="w-3 h-3" />
                    )}
                    {col}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Name
                  </th>
                  {visibleColumns.has(1) && (
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Email
                    </th>
                  )}
                  {visibleColumns.has(2) && (
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Phone
                    </th>
                  )}
                  {visibleColumns.has(3) && (
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                      Tasks
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-100 hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {item.name}
                    </td>
                    {visibleColumns.has(1) && (
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item.email}
                      </td>
                    )}
                    {visibleColumns.has(2) && (
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item.phone}
                      </td>
                    )}
                    {visibleColumns.has(3) && (
                      <td className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                        {item.tasks}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 31: Status Indicator Rows */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">
              Status Indicator Rows
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-700/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300"></th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      {item.verified ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-white">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-sm text-slate-300">Online</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-slate-400">
                          {item.time}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 32: Trend Visualization */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Trend Visualization
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-100 to-blue-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Tasks
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Trend
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
                    className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${(item.tasks / 31) * 100}%` }}
                            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                          ></div>
                        </div>
                        <span className="text-xs font-semibold text-slate-600 w-4">
                          {item.tasks}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {item.trend === "up" ? (
                        <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm">+12%</span>
                        </div>
                      ) : item.trend === "down" ? (
                        <div className="flex items-center gap-1 text-red-600 font-semibold">
                          <TrendingDown className="w-4 h-4" />
                          <span className="text-sm">-8%</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-slate-600 font-semibold">
                          <span className="text-sm">—</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {item.alerts > 0 ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                          <AlertTriangle className="w-3 h-3" />
                          {item.alerts} alerts
                        </span>
                      ) : (
                        <span className="inline-flex px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">
                          Healthy
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 33: Contact Card Layout */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Contact Card Layout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800 rounded-xl border border-slate-700 p-5 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-400">{item.dept}</p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.verified ? "bg-emerald-500" : "bg-slate-500"
                    }`}
                  ></div>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <a
                      href={`mailto:${item.email}`}
                      className="hover:text-blue-400 transition-colors truncate"
                    >
                      {item.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Phone className="w-4 h-4 text-slate-500" />
                    {item.phone}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(item.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  <button className="text-slate-400 hover:text-slate-200 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
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
