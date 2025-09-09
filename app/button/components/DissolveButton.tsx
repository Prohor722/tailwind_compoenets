import { useState } from "react";

const DissolveButton = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const anotherHandleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 1000);
  };

  return (
    <button
        onClick={() => anotherHandleClick("dissolve")}
        className={`cursor-pointer px-8 py-4 bg-red-600 text-white font-bold rounded-lg transition-all duration-500 ${
          activeButton === "dissolve"
            ? "opacity-20 blur-sm scale-90"
            : "hover:opacity-90"
        }`}
      >
        Dissolve Button
      </button>
  );
};

export default DissolveButton;
