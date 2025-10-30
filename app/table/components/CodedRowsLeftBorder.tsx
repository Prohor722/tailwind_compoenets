import { Zap, Flame, Lightbulb } from 'lucide-react';

const CodedRowsLeftBorder = () => {
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

  const getPriorityIcon = (priority: string) => {
    if (priority === "Critical")
      return <Flame className="w-4 h-4 text-red-500" />;
    if (priority === "High") return <Zap className="w-4 h-4 text-amber-500" />;
    return <Lightbulb className="w-4 h-4 text-blue-500" />;
  };

  return (
    <table className="max-w-md shadow-lg border border-slate-100">
      <thead>
        <tr className="bg-slate-100 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 w-1"></th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Role
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Priority
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const colorMap: Record<string, string> = {
            Critical: "border-l-red-500 bg-red-50 hover:bg-red-100",
            High: "border-l-amber-500 bg-amber-50 hover:bg-amber-100",
            Medium: "border-l-blue-500 bg-blue-50 hover:bg-blue-100",
          };
          return (
            <tr
              key={item.id}
              className={`border-b border-slate-100 border-l-4 transition-colors group cursor-pointer ${
                colorMap[item.priority] ?? "border-l-slate-500"
              }`}
            >
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-600 text-white backdrop-blur-sm`}
                >
                  {getPriorityIcon(item.priority)}
                  {item.priority}
                </span>
              </td>
              <td className="px-6 py-4 text-right font-bold text-slate-900">
                {item.price}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CodedRowsLeftBorder;
