import React from "react";

const AnimatedGradientCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Live Status</h3>
        <p className="text-gray-300 mb-4">
          Monitor your system's health in real-time with our advanced dashboard.
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">CPU Usage</span>
            <span className="text-white">78%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-yellow-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
          </div>
          <div className="flex justify-between text-sm mt-4">
            <span className="text-gray-400">Memory</span>
            <span className="text-white">45%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-1/2 transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGradientCard;
