import { useState } from "react";

const RippleEffectButton3 = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  
  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 600);
  };

  return (
    <button
        onClick={() => handleClick("ripple")}
        className="cursor-pointer relative px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg overflow-hidden transition-colors duration-200"
      >
        <span className="relative z-10">Ripple Effect Button 3</span>
        {clickedButton === "ripple" && (
          <div className="absolute inset-0 bg-white opacity-25 rounded-full animate-ping"></div>
        )}
      </button>
  );
};

export default RippleEffectButton3;
