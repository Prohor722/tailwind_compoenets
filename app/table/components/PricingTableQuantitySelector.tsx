import React from "react";
import { Plus, Minus, Briefcase } from "lucide-react";

const PricingTableQuantitySelector = () => {
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
        <tr className="bg-slate-100 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Item
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Category
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Price
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            Quantity
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-100 hover:bg-blue-50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-medium text-slate-900">
              {item.name}
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                <Briefcase className="w-3 h-3" />
                {item.category}
              </span>
            </td>
            <td className="px-6 py-4 text-sm font-semibold text-slate-900">
              {item.price}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-center gap-2 bg-slate-100 rounded-lg w-fit mx-auto">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="p-1 hover:bg-slate-200 transition-colors rounded"
                >
                  <Minus className="w-4 h-4 text-slate-600" />
                </button>
                <span className="w-8 text-center font-semibold text-slate-900">
                  {quantities[item.id] || 1}
                </span>
                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="p-1 hover:bg-slate-200 transition-colors rounded"
                >
                  <Plus className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </td>
            <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
              $
              {parseInt(item.price.replace("$", "").replace(",", "")) *
                (quantities[item.id] || 1)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PricingTableQuantitySelector;
