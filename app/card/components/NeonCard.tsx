import { Play } from "lucide-react";
import React from "react";

const NeonCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-black border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
      <div className="relative p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
            <Play className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Neon Vibes</h3>
            <p className="text-cyan-400 text-sm">Cyberpunk Style</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          Embrace the future with glowing neon accents and dark themes.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-cyan-400 font-mono text-sm">2024.09.25</span>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            Explore
          </button>
        </div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default NeonCard;
