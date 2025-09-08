import { useState } from "react";

const GradientShiftButton2 = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 600);
  };
  return (
    <button
      onClick={() => handleClick("gradient")}
      className="p-3 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105"
      style={{
        background: "linear-gradient(45deg, #a855f7, #ec4899, #ef4444)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 3s ease infinite",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.animationDuration = "1s"; // Speed up on hover
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.animationDuration = "3s"; // Back to normal speed
      }}
    >
      Gradient Shift 2
    </button>
  );
};

export default GradientShiftButton2;
