import { ChevronRight, Target } from 'lucide-react';

const BadgeHeavyStatusWorkflow = () => {
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
    <table className="max-w-md bg-white">
      <thead>
        <tr className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Item
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Tags
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Status Flow
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
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 text-xs rounded-full font-semibold"
                  >
                    <Target className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                {item.progress < 50 ? (
                  <>
                    <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">
                      Pending
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                    <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-semibold">
                      In Progress
                    </span>
                  </>
                ) : item.progress < 90 ? (
                  <>
                    <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">
                      In Progress
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                    <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-semibold">
                      Review
                    </span>
                  </>
                ) : (
                  <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold">
                    Complete
                  </span>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BadgeHeavyStatusWorkflow;
