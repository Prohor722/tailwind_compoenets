import { useState } from "react";

const SlideFillButton = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 600);
  };
  return (
    <button
      onClick={() => handleClick("slide")}
      className="cursor-pointer relative px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg overflow-hidden group transition-colors duration-300 hover:text-gray-900"
    >
      <span className="relative z-10">Slide Fill Button</span>
      <div className="absolute top-0 left-0 w-0 h-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
    </button>
  );
};

export default SlideFillButton;
