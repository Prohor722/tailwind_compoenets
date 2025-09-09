import { useState } from "react";

const LightningStrikeButton = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const anotherHandleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 1000);
  };

  return (
    <button
      onClick={() => anotherHandleClick("lightning")}
      className="relative px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg overflow-hidden group hover:bg-yellow-400 transition-colors duration-200"
    >
      <span className="relative z-10">⚡ Lightning Strike Button</span>
      {activeButton === "lightning" && (
        <div className="absolute inset-0 bg-white animate-pulse opacity-60"></div>
      )}
    </button>
  );
};

export default LightningStrikeButton;
