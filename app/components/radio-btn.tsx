"use client";
import { Sun, Moon } from "lucide-react";

export default function RadioBtn() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-500 text-center my-3">
        Radio Buttons
      </h1>
      <div className="flex flex-wrap gap-4 items-center justify-center bg-slate-50 px-4">
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
            <span className="text-gray-800 peer-checked:font-semibold peer-checked:text-blue-600">
              Light
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="theme"
              className="peer hidden"
              value="dark"
            />
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-purple-600 peer-checked:bg-purple-600 transition-all duration-300" />
            <span className="text-gray-800 peer-checked:font-semibold peer-checked:text-purple-600">
              Dark
            </span>
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
          {["Home", "About", "Contact"].map((label, i) => (
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
          {["Small", "Medium", "Large"].map((size, i) => (
            <label key={i} className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="size"
                value={size}
                className="peer hidden"
                defaultChecked={i === 1}
              />
              <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-green-500 relative">
                <div className="absolute inset-0 rounded-full bg-green-300 opacity-0 scale-50 peer-checked:scale-100 peer-checked:opacity-100 transition duration-300" />
              </div>
              <span className="text-gray-700 peer-checked:text-green-600 font-medium">
                {size}
              </span>
            </label>
          ))}
        </div>

        <div className="grid gap-4">
          {["Weekly", "Monthly", "Yearly"].map((plan, i) => (
            <label
              key={i}
              className="relative border border-gray-300 rounded-lg p-4 bg-white peer-checked:ring-2 peer-checked:ring-indigo-300 transition-all hover:shadow-md cursor-pointer"
            >
              <input
                type="radio"
                name="plan"
                value={plan}
                className="peer hidden"
                defaultChecked={i === 0}
              />
              <span className="block text-indigo-700 font-semibold text-lg">
                {plan}
              </span>
              <span className="text-sm text-gray-500">Billing cycle</span>
            </label>
          ))}
        </div>

        <div className="inline-flex p-1 bg-white rounded-full shadow-lg border border-gray-300">
          {["Left", "Center", "Right"].map((label, i) => (
            <label key={i} className="cursor-pointer">
              <input
                type="radio"
                name="align"
                value={label}
                className="peer hidden"
                defaultChecked={i === 1}
              />
              <span className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full transition-all peer-checked:bg-blue-500 peer-checked:text-white">
                {label}
              </span>
            </label>
          ))}
        </div>

        <div className="flex gap-6">
          {["Silver", "Gold", "Platinum"].map((tier, i) => (
            <label
              key={i}
              className="relative border border-gray-300 rounded-xl w-32 h-32 flex items-center justify-center cursor-pointer bg-white peer-checked:scale-105 peer-checked:shadow-xl transition-all duration-300"
            >
              <input
                type="radio"
                name="tier"
                value={tier}
                className="peer hidden"
                defaultChecked={i === 0}
              />
              <span className="text-lg font-semibold text-gray-700 peer-checked:text-blue-600">
                {tier}
              </span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["Beginner", "Intermediate", "Advanced"].map((level, idx) => (
            <label key={idx} className="cursor-pointer group">
              <input
                type="radio"
                name="level"
                className="peer hidden"
                value={level}
                defaultChecked={idx === 0}
              />
              <div className="p-4 bg-white rounded-xl border border-gray-300 shadow-sm peer-checked:border-indigo-500 peer-checked:ring-2 peer-checked:ring-indigo-200 transition-all group-hover:shadow-md">
                <h3 className="text-center font-semibold text-gray-700 peer-checked:text-indigo-600">
                  {level}
                </h3>
              </div>
            </label>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 font-medium">Select Color Scheme:</p>
          <div className="flex gap-6">
            {["blue", "green", "pink"].map((color) => (
              <label
                key={color}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="color"
                  className="peer hidden"
                  value={color}
                  id={color}
                />
                <div
                  className={`
                  w-5 h-5 rounded-full border-2 border-gray-400 transition-all
                  peer-checked:ring-2 peer-checked:ring-offset-2
                  ${
                    color === "blue" &&
                    "peer-checked:ring-blue-500 peer-checked:bg-blue-500"
                  }
                  ${
                    color === "green" &&
                    "peer-checked:ring-green-500 peer-checked:bg-green-500"
                  }
                  ${
                    color === "pink" &&
                    "peer-checked:ring-pink-500 peer-checked:bg-pink-500"
                  }
                `}
                />
                <span className="text-gray-700 capitalize">{color}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
