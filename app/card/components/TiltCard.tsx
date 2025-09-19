import { ShoppingCart } from "lucide-react";
import React from "react";

const TiltCard = () => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 p-6 transform transition-all duration-300 hover:rotate-2 hover:scale-105 shadow-lg hover:shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      <div className="relative">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-45 transition-transform duration-300">
          <ShoppingCart className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">E-Commerce</h3>
        <p className="text-white/90 mb-4">
          Modern shopping experience with smooth animations.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-white/80">24 Products</span>
          <button className="cursor-pointer px-3 py-1 bg-white/20 rounded-full text-sm text-white hover:bg-white/30 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
