import React from "react";

const GlassmorphicCard = () => {
  return (
    <div className="w-80 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 transition-transform hover:scale-105 duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Glassmorphic Card
      </h3>
      <p className="text-gray-600">
        A smooth frosted-glass look using Tailwind’s backdrop blur utility.
      </p>
    </div>
  );
};

export default GlassmorphicCard;
