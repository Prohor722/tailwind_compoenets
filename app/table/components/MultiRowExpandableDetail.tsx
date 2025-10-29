import React from "react";
import { ChevronRight } from "lucide-react";

const MultiRowExpandableDetail = () => {
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
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left w-8"></th>
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
            Progress
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <>
            <tr
              key={item.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group"
              onClick={() => toggleRow(item.id)}
            >
              <td className="px-6 py-4">
                <button className="text-slate-400 hover:text-slate-600 transition-all transform group-hover:scale-110">
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      expandedRows.has(item.id) ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.role}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  {getPriorityIcon(item.priority)}
                  <span className="text-xs font-semibold">{item.priority}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${item.progress}%` }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 w-8 text-right">
                    {item.progress}%
                  </span>
                </div>
              </td>
            </tr>
            {expandedRows.has(item.id) && (
              <tr className="border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                <td colSpan={5} className="px-6 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">
                        Contact
                      </p>
                      <p className="text-sm font-medium text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">
                        Tags
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-2 uppercase">
                        Actions
                      </p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors font-medium">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded-lg hover:bg-slate-300 transition-colors font-medium">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default MultiRowExpandableDetail;
