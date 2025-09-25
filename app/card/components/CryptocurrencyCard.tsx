import React from "react";

const CryptocurrencyCard = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-rotate-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">₿</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Bitcoin</h3>
            <p className="text-yellow-100 text-sm">BTC</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">$43,250</p>
          <p className="text-green-200 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            +5.67%
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-yellow-100">24h Volume</span>
          <span>$28.9B</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-yellow-100">Market Cap</span>
          <span>$847.2B</span>
        </div>
        <div className="h-16 flex items-end space-x-1 mt-4">
          <div className="flex-1 bg-white/30 rounded-sm h-8"></div>
          <div className="flex-1 bg-white/40 rounded-sm h-12"></div>
          <div className="flex-1 bg-white/50 rounded-sm h-16"></div>
          <div className="flex-1 bg-white/60 rounded-sm h-10"></div>
          <div className="flex-1 bg-white/70 rounded-sm h-14"></div>
          <div className="flex-1 bg-white/80 rounded-sm h-12"></div>
          <div className="flex-1 bg-white rounded-sm h-16"></div>
        </div>
      </div>
    </div>
  );
};

export default CryptocurrencyCard;
