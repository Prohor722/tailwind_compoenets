import { ExternalLink } from 'lucide-react';

const EventLogSeverity = () => {
  return (
    <div className="max-w-md bg-white shadow border divide-y divide-slate-200 max-h-96 overflow-y-auto">
      {[
        {
          timestamp: "2025-10-13 14:32",
          event: "User login successful",
          severity: "info",
          user: "sarah@company.com",
        },
        {
          timestamp: "2025-10-13 14:15",
          event: "Database backup completed",
          severity: "success",
          user: "system",
        },
        {
          timestamp: "2025-10-13 13:58",
          event: "Failed authentication attempt",
          severity: "warning",
          user: "unknown",
        },
        {
          timestamp: "2025-10-13 13:42",
          event: "Deployment started",
          severity: "info",
          user: "devops-bot",
        },
        {
          timestamp: "2025-10-13 12:30",
          event: "Critical error in API",
          severity: "error",
          user: "system",
        },
        {
          timestamp: "2025-10-13 11:15",
          event: "Configuration updated",
          severity: "info",
          user: "admin",
        },
      ].map((log, idx) => (
        <div
          key={idx}
          className="px-6 py-4 hover:bg-slate-50 transition-colors flex items-start gap-4 group"
        >
          <div
            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
              log.severity === "error"
                ? "bg-red-500"
                : log.severity === "warning"
                ? "bg-amber-500"
                : log.severity === "success"
                ? "bg-emerald-500"
                : "bg-blue-500"
            }`}
          ></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900">{log.event}</p>
            <p className="text-xs text-slate-500">
              {log.timestamp} • {log.user}
            </p>
          </div>
          <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-slate-200 rounded-lg transition-all text-slate-600">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventLogSeverity;
