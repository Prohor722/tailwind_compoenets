import React from "react";

const CompactActionMenu = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Item
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            Type
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 4).map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.title}
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-medium">
                {item.status}
              </span>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleCopy(item.id)}
                  className={`p-2 rounded-lg transition-all ${
                    copiedId === item.id
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "hover:bg-slate-700 text-slate-400"
                  }`}
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <Link2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompactActionMenu;
