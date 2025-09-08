import { useState } from "react";

const PulseRingButton = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 2000);
  };
  return (
    <button
      onClick={() => handleClick("pulse")}
      className={`cursor-pointer relative px-8 py-3 text-white font-semibold rounded-lg transition-colors duration-200
      ${ clickedButton === "pulse" ? "bg-gray-400 border-2 border-gray-700" : "bg-indigo-600 hover:bg-indigo-700" }`}
    >
      <span className="relative z-10">Pulse Ring Button</span>
      <div className={`absolute inset-0 rounded-lg animate-ping opacity-75
        ${ clickedButton === "pulse" ?
         "border-3 border-gray-300" 
         :
         "border-2 border-indigo-400"}`}></div>
    </button>
  );
};

export default PulseRingButton;
