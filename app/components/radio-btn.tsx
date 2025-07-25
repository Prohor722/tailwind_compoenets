'use client';
import { Sun, Moon } from 'lucide-react';

export default function RadioBtn() {
  return (
    <div className="flex gap-4 items-center justify-center bg-slate-50 px-4">
      <div className="space-y-4">
        <p className="text-gray-700 font-semibold">Choose a theme:</p>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="theme"
            className="peer hidden"
            value="light"
            defaultChecked
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all duration-300" />
          <span className="text-gray-800 peer-checked:font-semibold peer-checked:text-blue-600">Light</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="theme"
            className="peer hidden"
            value="dark"
          />
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-purple-600 peer-checked:bg-purple-600 transition-all duration-300" />
          <span className="text-gray-800 peer-checked:font-semibold peer-checked:text-purple-600">Dark</span>
        </label>
      </div>

      <div className="flex gap-6">
        <label className="relative cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="light"
            className="peer hidden"
            defaultChecked
          />
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md peer-checked:border-yellow-500 peer-checked:ring-2 peer-checked:ring-yellow-200 transition-all">
            <Sun className="text-yellow-500" size={24} />
            <span className="text-sm font-medium text-gray-700">Light</span>
          </div>
        </label>
        <label className="relative cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="dark"
            className="peer hidden"
          />
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md peer-checked:border-indigo-600 peer-checked:ring-2 peer-checked:ring-indigo-300 transition-all">
            <Moon className="text-indigo-600" size={24} />
            <span className="text-sm font-medium text-gray-700">Dark</span>
          </div>
        </label>
      </div>
    </div>
  );
}
