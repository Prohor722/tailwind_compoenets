import React from "react";

const GradientBorderProductCard = () => {
  return (
    <div className="gradient-border rounded-2xl">
      <div className="bg-gray-900 rounded-2xl p-6 h-full">
        <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-white"
            fill="none"
            // stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
            //   stroke-linecap="round"
            //   stroke-linejoin="round"
            //   stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Smart Light Bulb</h3>
        <p className="text-gray-400 mb-4">
          Control your home lighting with voice commands and smartphone app.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">$29.99</span>
          <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradientBorderProductCard;
