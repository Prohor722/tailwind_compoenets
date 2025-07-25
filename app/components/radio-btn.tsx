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

      <div className="flex border-b border-gray-300 space-x-6">
        {['Home', 'About', 'Contact'].map((label, i) => (
          <label key={i} className="relative cursor-pointer">
            <input
              type="radio"
              name="nav"
              value={label}
              className="peer hidden"
              defaultChecked={i === 0}
            />
            <span className="text-gray-600 peer-checked:text-blue-600 transition">
              {label}
            </span>
            <div className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 peer-checked:scale-x-100 bg-blue-500 transition-transform origin-left" />
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {['Small', 'Medium', 'Large'].map((size, i) => (
          <label key={i} className="flex items-center gap-4 cursor-pointer">
            <input type="radio" name="size" value={size} className="peer hidden" defaultChecked={i === 1} />
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-green-500 relative">
              <div className="absolute inset-0 rounded-full bg-green-300 opacity-0 scale-50 peer-checked:scale-100 peer-checked:opacity-100 transition duration-300" />
            </div>
            <span className="text-gray-700 peer-checked:text-green-600 font-medium">{size}</span>
          </label>
        ))}
      </div>

    </div>
  );
}
