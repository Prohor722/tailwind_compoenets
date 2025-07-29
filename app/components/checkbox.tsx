import React from "react";

export const CheckBox = () => {
  return (
    <div>
      <h1 className="text-blue-500 text-2xl font-semibold text-center">
        Checkbox
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input type="checkbox" className="peer hidden" />
          <div className="w-5 h-5 rounded border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:ring-2 peer-checked:ring-offset-1 peer-checked:ring-blue-300 transition-all" />
          <span className="text-gray-700 font-medium">
            Enable Notifications
          </span>
        </label>

        <label className="relative flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="peer hidden" />
          <div className="w-6 h-6 border-2 border-white/40 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all peer-checked:bg-blue-500 peer-checked:border-blue-500">
            <svg
              className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-white">Accept Terms</span>
        </label>

        
      </div>
    </div>
  );
};
