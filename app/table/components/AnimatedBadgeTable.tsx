const AnimatedBadgeTable = () => {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      position: "Senior PM",
      salary: "$145,000",
      start: "2021-03-15",
      team: 8,
      performance: 94,
      department: "Product",
      badge: "Lead",
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "Senior Developer",
      salary: "$165,000",
      start: "2020-07-20",
      team: 6,
      performance: 88,
      department: "Engineering",
      badge: "Expert",
    },
    {
      id: 3,
      name: "Emma Wilson",
      position: "Designer",
      salary: "$125,000",
      start: "2022-01-10",
      team: 3,
      performance: 91,
      department: "Design",
      badge: "Contributor",
    },
    {
      id: 4,
      name: "James Johnson",
      position: "Data Analyst",
      salary: "$135,000",
      start: "2021-11-05",
      team: 4,
      performance: 85,
      department: "Analytics",
      badge: "Rising",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      position: "Director",
      salary: "$185,000",
      start: "2019-05-01",
      team: 15,
      performance: 96,
      department: "Operations",
      badge: "Executive",
    },
  ];

  const getBadgeColor = (badge: string) => {
    const colors: Record<string, string> = {
      Lead: "from-purple-500 to-blue-500",
      Expert: "from-red-500 to-pink-500",
      Contributor: "from-blue-500 to-cyan-500",
      Rising: "from-amber-500 to-orange-500",
      Executive: "from-indigo-500 to-purple-500",
    };
    return colors[badge] || "from-slate-500 to-slate-600";
  };
  
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Employee
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Position
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Badge
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Performance
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.name}
            </td>
            <td className="px-6 py-4 text-sm text-slate-400">
              {item.position}
            </td>
            <td className="px-6 py-4">
              <div className="relative inline-block">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getBadgeColor(
                    item.badge
                  )} rounded-full blur-lg opacity-50 animate-pulse`}
                ></div>
                <span
                  className={`relative inline-flex items-center px-4 py-2 bg-gradient-to-r ${getBadgeColor(
                    item.badge
                  )} text-white text-xs font-bold rounded-full shadow-lg`}
                >
                  {item.badge}
                </span>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${item.performance}%` }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  ></div>
                </div>
                <span className="text-xs font-bold text-emerald-400">
                  {item.performance}%
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimatedBadgeTable;
