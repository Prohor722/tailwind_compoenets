import React from "react";

const RetroArcadeButton = () => {
  return (
    <div>
      {/* Retro Arcade Button */}
      <button
        className="cursor-pointer px-8 py-4 bg-black border-4 border-green-400 text-green-400 font-mono font-bold hover:bg-green-400 hover:text-black transition-all duration-200 transform hover:translate-y-1"
        style={{
          boxShadow: "0 6px 0 #16a34a, 0 8px 8px rgba(0,0,0,0.3)",
          textShadow: "0 0 10px currentColor",
        }}
      >
        [START]
      </button>
    </div>
  );
};

export default RetroArcadeButton;
