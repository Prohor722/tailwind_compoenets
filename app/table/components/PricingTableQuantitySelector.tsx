import React from "react";
import { Plus, Minus, Briefcase } from 'lucide-react';

const PricingTableQuantitySelector = () => {
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
