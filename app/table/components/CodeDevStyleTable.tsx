import React from "react";

const CodeDevStyleTable = () => {
  return (
    <table className="w-full text-sm">
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
