import { Star } from "lucide-react";
import React from "react";

const GradientMeshCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 p-[1px] hover:scale-105 transition-transform duration-300">
      <div className="bg-gray-900 rounded-2xl p-6 h-full">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-pink-400 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Gradient Mesh</h3>
              <p className="text-gray-400">Premium Design</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            Stunning gradient borders with dark themed content for maximum
            visual impact.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full border-2 border-gray-900"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full border-2 border-gray-900"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full border-2 border-gray-900"></div>
            </div>
            <span className="text-gray-400 text-sm">+24 others</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-orange-400/20 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default GradientMeshCard;
