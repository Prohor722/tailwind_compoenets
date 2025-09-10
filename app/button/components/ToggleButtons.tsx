import { useState } from "react";

export const ToggleButtons = () => {
  const [toggles, setToggles] = useState({
    switch1: false,
    switch2: true,
    switch3: false,
    theme: 'light'
  });

  const updateToggle = (key: keyof typeof toggles, value: boolean | string) => {
    setToggles(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Toggle & Switch Buttons</h3>
      <div className="flex flex-wrap gap-6 items-center">
        {/* iOS Style Toggle */}
        <button
          onClick={() => updateToggle('switch1', !toggles.switch1)}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
            toggles.switch1 ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            toggles.switch1 ? 'translate-x-8' : 'translate-x-1'
          }`}></div>
        </button>

        {/* Neon Toggle */}
        <button
          onClick={() => updateToggle('switch2', !toggles.switch2)}
          className={`relative w-20 h-10 rounded-full border-2 transition-all duration-300 ${
            toggles.switch2 
              ? 'bg-purple-500 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)]' 
              : 'bg-gray-800 border-gray-600'
          }`}
        >
          <div className={`absolute top-1 w-7 h-7 bg-white rounded-full transform transition-all duration-500 ${
            toggles.switch2 ? 'translate-x-9 bg-purple-100' : 'translate-x-1'
          }`}></div>
          {toggles.switch2 && (
            <div className="absolute inset-0 rounded-full bg-purple-400 opacity-50 animate-pulse"></div>
          )}
        </button>

      </div>
    </div>
  );
};