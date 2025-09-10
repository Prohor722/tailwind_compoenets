import React from "react";

const FreeTrailButton = () => {
  return (
    <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <span className="relative z-10 flex items-center gap-2">
        🚀 Start Free Trial
      </span>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
    </button>
  );
};

export default FreeTrailButton;
