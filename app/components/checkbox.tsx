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
      </div>
    </div>
  );
};
