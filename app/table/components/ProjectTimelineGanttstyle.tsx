import React from "react";

const ProjectTimelineGanttstyle = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-100 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 w-32">
            Project
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Timeline
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: "Phase 1", start: 10, width: 30, status: "completed" },
          { name: "Phase 2", start: 35, width: 35, status: "in-progress" },
          { name: "Phase 3", start: 65, width: 25, status: "pending" },
          { name: "Phase 4", start: 85, width: 15, status: "pending" },
        ].map((phase, idx) => (
          <tr
            key={idx}
            className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <td className="px-6 py-4 text-sm font-semibold text-slate-900">
              {phase.name}
            </td>
            <td className="px-6 py-4">
              <div className="w-full h-10 bg-slate-100 rounded-lg relative overflow-hidden">
                <div
                  style={{ left: `${phase.start}%`, width: `${phase.width}%` }}
                  className={`absolute h-full rounded-lg flex items-center justify-center text-white text-xs font-bold ${
                    phase.status === "completed"
                      ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                      : phase.status === "in-progress"
                      ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                      : "bg-gradient-to-r from-slate-300 to-slate-400"
                  }`}
                >
                  {phase.width}%
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTimelineGanttstyle;
