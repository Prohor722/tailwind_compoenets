import React from "react";

const ContactCardLayout = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-slate-800 rounded-xl border border-slate-700 p-5 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all group cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-slate-400">{item.dept}</p>
            </div>
            <div
              className={`w-3 h-3 rounded-full ${
                item.verified ? "bg-emerald-500" : "bg-slate-500"
              }`}
            ></div>
          </div>

          <div className="space-y-2 mb-4 pb-4 border-b border-slate-700">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Mail className="w-4 h-4 text-slate-500" />
              <a
                href={`mailto:${item.email}`}
                className="hover:text-blue-400 transition-colors truncate"
              >
                {item.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Phone className="w-4 h-4 text-slate-500" />
              {item.phone}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(item.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-slate-600"
                  }`}
                />
              ))}
            </div>
            <button className="text-slate-400 hover:text-slate-200 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCardLayout;
