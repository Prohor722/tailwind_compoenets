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

      </div>
    </div>
  );
};