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

        {/* Segmented Control */}
        <div className="flex bg-gray-200 rounded-lg p-1">
          {['light', 'dark'].map(theme => (
            <button
              key={theme}
              onClick={() => updateToggle('theme', theme)}
              className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                toggles.theme === theme
                  ? 'bg-white text-gray-900 shadow-sm transform scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {theme === 'light' ? '☀️' : '🌙'} {theme}
            </button>
          ))}
        </div>

        {/* Checkbox Style Toggle */}
        <button
          onClick={() => updateToggle('switch3', !toggles.switch3)}
          className={`cursor-pointer w-10 h-10 border-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
            toggles.switch3
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-white border-gray-300 hover:border-gray-400'
          }`}
        >
          {toggles.switch3 ? '✓' : ''}
        </button>
      </div>
    </div>
  );
};