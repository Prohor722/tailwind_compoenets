import React from "react";

const AnimatedProgressRows = () => {
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
    <div>
      <div className="overflow-x-auto">
        <table className="max-w-md">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Member
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Progress
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Target
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {item.name}
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      style={{
                        width: `${item.score}%`,
                        animation: `slideIn 1.5s ease-out ${
                          idx * 0.1
                        }s forwards`,
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-slate-900">
                    {item.score}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>
        {`
            @keyframes slideIn {
              from { width: 0; }
            }
        `}
      </style>
    </div>
  );
};

export default AnimatedProgressRows;
