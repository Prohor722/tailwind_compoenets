import React from "react";

const NeumorphismStatsCard = () => {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff] transition-all duration-500 cursor-pointer">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            // stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
            //   stroke-linecap="round"
            //   stroke-linejoin="round"
            //   stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            ></path>
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">12,847</h3>
        <p className="text-gray-600 font-medium">Total Sales</p>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <span className="text-green-500 text-sm">↗ +12.5%</span>
          <span className="text-gray-500 text-sm">from last month</span>
        </div>
      </div>
    </div>
  );
};

export default NeumorphismStatsCard;
