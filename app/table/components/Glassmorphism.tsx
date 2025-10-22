import React from "react";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

const Glassmorphism = () => {
  const getStatusIcon = (status: string) => {
    if (status === "Active")
      return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    if (status === "Away") return <Clock className="w-4 h-4 text-amber-500" />;
    return <AlertCircle className="w-4 h-4 text-gray-400" />;
  };

  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      revenue: "$12,500",
      growth: "+24%",
      score: 92,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      revenue: "$9,200",
      growth: "+18%",
      score: 85,
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      revenue: "$8,100",
      growth: "+12%",
      score: 78,
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      revenue: "$11,300",
      growth: "+31%",
      score: 88,
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      revenue: "$15,600",
      growth: "+9%",
      score: 95,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="max-w-md bg-black">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Role
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <td className="px-6 py-4 text-sm font-medium text-white">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-slate-300">{item.role}</td>
              <td className="px-6 py-4 text-sm">
                <div className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <span className="text-slate-300">{item.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-white">
                {item.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Glassmorphism;
