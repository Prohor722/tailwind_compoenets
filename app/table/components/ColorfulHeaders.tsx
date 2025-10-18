import React from "react";

const ColorfulHeaders = () => {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      revenue: "$12,500",
      email: "sarah@company.com",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      revenue: "$9,200",
      email: "mike@company.com",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      revenue: "$8,100",
      email: "emma@company.com",
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      revenue: "$11,300",
      email: "james@company.com",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      revenue: "$15,600",
      email: "lisa@company.com",
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      Active: "bg-emerald-100 text-emerald-800",
      Away: "bg-amber-100 text-amber-800",
      Offline: "bg-gray-100 text-gray-800",
    };
    return colors[status as keyof typeof colors] || colors["Offline"];
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                {item.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColorfulHeaders;
