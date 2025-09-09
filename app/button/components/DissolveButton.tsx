import { useState } from "react";

const DissolveButton = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const anotherHandleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 1000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-white text-lg font-semibold">Dissolve</h3>
      <button
        onClick={() => anotherHandleClick("dissolve")}
        className={`px-8 py-4 bg-red-600 text-white font-bold rounded-lg transition-all duration-500 ${
          activeButton === "dissolve"
            ? "opacity-20 blur-sm scale-90"
            : "hover:opacity-90"
        }`}
      >
        Dissolve Button
      </button>
    </div>
  );
};

export default DissolveButton;
