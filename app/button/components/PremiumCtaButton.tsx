import React from "react";

const PremiumCtaButton = () => {
  return (
    <button className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <span className="relative z-10 flex items-center gap-2">
        ⭐ Upgrade to Premium
      </span>
      <div className="absolute top-0 right-0 bg-red-500 text-xs px-2 py-1 rounded-bl-lg text-white font-bold">
        -50%
      </div>
    </button>
  );
};

export default PremiumCtaButton;
