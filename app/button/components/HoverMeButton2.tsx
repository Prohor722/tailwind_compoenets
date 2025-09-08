import { useState } from "react";

const HoverMeButton2 = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 600);
  };

  return (
    <div className="relative w-40 h-12" style={{ perspective: "1000px" }}>
      <button
        onClick={() => handleClick("flip")}
        className="w-full h-full relative group"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotateY(180deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg)";
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 bg-orange-500 text-white font-semibold rounded-lg flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden", // Safari support
          }}
        >
          Hover Me Button
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 bg-orange-600 text-white font-semibold rounded-lg flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden", // Safari support
            transform: "rotateY(180deg)",
          }}
        >
          Flipped!
        </div>
      </button>
    </div>
  );
};

export default HoverMeButton2;
