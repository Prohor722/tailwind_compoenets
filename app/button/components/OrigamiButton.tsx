import React from "react";

const OrigamiButton = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-white text-lg font-semibold">Origami Fold</h3>
      <button
        className="relative px-8 py-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white font-bold transition-all duration-500 hover:from-pink-500 hover:to-purple-600 transform-gpu hover:rotate-3 hover:scale-105"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
        }}
      >
        Origami Button
      </button>
    </div>
  );
};

export default OrigamiButton;
