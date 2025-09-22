import React from "react";

const HolographicFeatureCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6 hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 animate-glow"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            // stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
            //   stroke-linecap="round"
            //   stroke-linejoin="round"
            //   stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
        <p className="text-gray-300 mb-4">
          Experience blazing fast performance with our optimized architecture.
        </p>
        <div className="flex items-center text-cyan-400 font-medium">
          <span className="cursor-pointer">Learn more</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
            //   stroke-linecap="round"
            //   stroke-linejoin="round"
            //   stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HolographicFeatureCard;
