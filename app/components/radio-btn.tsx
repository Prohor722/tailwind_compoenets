'use client';

export default function RadioBtn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
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
    </div>
  );
}
