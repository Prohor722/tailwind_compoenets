import React from "react";

const MinimalHoverEffect = () => {
  const statusList = ["Active", "Away", "Offline"] as const;
  type StatusType = (typeof statusList)[number];

  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      revenue: "$12,500",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      revenue: "$9,200",
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      revenue: "$8,100",
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      revenue: "$11,300",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      revenue: "$15,600",
    },
  ];
  const getStatusColor = (status: string) => {
    const colors: Record<StatusType, string> = {
      Active: "bg-emerald-100 text-emerald-800",
      Away: "bg-amber-100 text-amber-800",
      Offline: "bg-gray-100 text-gray-800",
    };
    return colors[status as StatusType] || colors["Offline"];
  };

  return (
    <div className="w-full overflow-scroll max-w-lg p-2">
      <table>
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Role
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
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

export default MinimalHoverEffect;
