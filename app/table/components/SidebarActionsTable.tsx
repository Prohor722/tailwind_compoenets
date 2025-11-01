import React from "react";

const SidebarActionsTable = () => {
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

  const toggleFavorite = (id: number) => {
    const newSet = new Set(favorites);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setFavorites(newSet);
  };
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-700 bg-slate-700/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Name
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Department
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Rating
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-700 hover:bg-slate-700/30 transition-all group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.name}
            </td>
            <td className="px-6 py-4 text-sm text-slate-400">{item.dept}</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(item.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-600"
                    }`}
                  />
                ))}
                <span className="text-xs text-slate-400 ml-1">
                  {item.rating}
                </span>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="p-2 hover:bg-slate-600 rounded-lg transition-colors text-slate-400 hover:text-yellow-400"
                >
                  <Star
                    className={`w-4 h-4 ${
                      favorites.has(item.id)
                        ? "fill-yellow-400 text-yellow-400"
                        : ""
                    }`}
                  />
                </button>
                <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors text-slate-400 hover:text-blue-400">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors text-slate-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SidebarActionsTable;
