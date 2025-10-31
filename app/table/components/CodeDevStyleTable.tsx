import React from "react";

const CodeDevStyleTable = () => {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      status: "Active",
      price: "$12,500",
      priority: "High",
      category: "PM",
      tags: ["Leadership", "Strategy"],
      progress: 85,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      status: "Active",
      price: "$9,200",
      priority: "Medium",
      category: "Dev",
      tags: ["Backend", "Frontend"],
      progress: 72,
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Designer",
      status: "Away",
      price: "$8,100",
      priority: "High",
      category: "Design",
      tags: ["UI/UX", "Branding"],
      progress: 68,
    },
    {
      id: 4,
      name: "James Johnson",
      role: "Analyst",
      status: "Active",
      price: "$11,300",
      priority: "Medium",
      category: "Analytics",
      tags: ["Data", "Insights"],
      progress: 91,
    },
    {
      id: 5,
      name: "Lisa Garcia",
      role: "Manager",
      status: "Offline",
      price: "$15,600",
      priority: "Critical",
      category: "Management",
      tags: ["Team", "Planning"],
      progress: 95,
    },
  ];
  return (
    <table className="max-w-md text-sm bg-gray-700">
      <thead>
        <tr className="border-b border-slate-700 text-slate-300">
          <th className="px-6 py-3 text-left font-mono text-xs">
            &lt;name&gt;
          </th>
          <th className="px-6 py-3 text-left font-mono text-xs">
            &lt;type&gt;
          </th>
          <th className="px-6 py-3 text-left font-mono text-xs">
            &lt;status&gt;
          </th>
          <th className="px-6 py-3 text-left font-mono text-xs">
            &lt;value&gt;
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-3 text-blue-400 font-mono">
              <span className="text-slate-500">"</span>
              {item.name}
              <span className="text-slate-500">"</span>
            </td>
            <td className="px-6 py-3 font-mono">
              <span className="text-purple-400">"{item.role}"</span>
            </td>
            <td className="px-6 py-3 font-mono">
              {item.status === "Active" ? (
                <span className="text-emerald-400">true</span>
              ) : (
                <span className="text-red-400">false</span>
              )}
            </td>
            <td className="px-6 py-3 font-mono">
              <span className="text-amber-400">{item.price}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CodeDevStyleTable;
