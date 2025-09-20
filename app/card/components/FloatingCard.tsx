import { Zap } from "lucide-react";
import React from "react";

const FloatingCard = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
      <div className="relative bg-white rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Performance
        </h3>
        <p className="text-gray-600 mb-4">
          Lightning fast load times and smooth animations.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-sm text-green-600 font-medium">Online</span>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
