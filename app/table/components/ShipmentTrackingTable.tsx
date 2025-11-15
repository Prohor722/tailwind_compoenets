import { MapPin } from "lucide-react";
import React from "react";

const ShipmentTrackingTable = () => {
  return (
    <div className="max-w-md space-y-4 p-6">
      {[
        {
          tracking: "#SHP-001",
          status: "Delivered",
          date: "2025-10-13",
          location: "San Francisco, CA",
          progress: 100,
        },
        {
          tracking: "#SHP-002",
          status: "In Transit",
          date: "Est. 2025-10-15",
          location: "Denver, CO",
          progress: 65,
        },
        {
          tracking: "#SHP-003",
          status: "Processing",
          date: "Est. 2025-10-16",
          location: "Los Angeles, CA",
          progress: 30,
        },
        {
          tracking: "#SHP-004",
          status: "Pending",
          date: "Est. 2025-10-18",
          location: "Seattle, WA",
          progress: 0,
        },
      ].map((ship, idx) => (
        <div
          key={idx}
          className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-bold text-white">{ship.tracking}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" />
                {ship.location}
              </p>
            </div>
            <div className="text-right">
              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                  ship.status === "Delivered"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : ship.status === "In Transit"
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-amber-500/20 text-amber-300"
                }`}
              >
                {ship.status}
              </span>
              <p className="text-xs text-slate-400 mt-1">{ship.date}</p>
            </div>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              style={{ width: `${ship.progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShipmentTrackingTable;
