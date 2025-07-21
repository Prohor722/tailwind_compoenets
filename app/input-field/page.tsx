"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import ImageInput from "../components/image-input";

const InputField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState({ name: false, email: false });

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center gap-10">
      <h1 className="text-2xl font-bold text-gray-800">
        Tailwind Input Showcase
      </h1>

      <div className="flex flex-wrap gap-8 justify-center max-w-6xl w-full">
        {/* Basic Input */}
        <div className="flex flex-col gap-1 w-64">
          <label className="font-medium text-gray-700">Basic Input</label>
          <input
            type="text"
            placeholder="Enter name"
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Input with Icon */}
        <div className="flex flex-col gap-1 w-64">
          <label className="font-medium text-gray-700">Input with Icon</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="you@example.com"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Password Input with Icon */}
        <div className="flex flex-col gap-1 w-64">
          <label className="font-medium text-gray-700">Password Input</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="••••••••"
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Success State Input */}
        <div className="flex flex-col gap-1 w-64">
          <label className="font-medium text-gray-700">Success Input</label>
          <input
            type="text"
            defaultValue="Valid"
            className="px-4 py-2 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span className="text-sm text-green-600">Looks good!</span>
        </div>

        {/* Error State Input */}
        <div className="flex flex-col gap-1 w-64">
          <label className="font-medium text-gray-700">Error Input</label>
          <input
            type="text"
            defaultValue="Invalid email"
            className="px-4 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <span className="text-sm text-red-600">Invalid email format</span>
        </div>

        {/* Floating Label Input */}
        <div className="relative w-64">
          <input
            type="text"
            id="floating"
            className="peer px-4 pt-6 pb-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=" "
          />
          <label
            htmlFor="floating"
            className="absolute text-gray-500 text-sm left-4 top-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
          >
            Floating Label
          </label>
        </div>

        {/* Disabled Input */}
        <div className="flex flex-col gap-1 w-64">
          <label className="font-medium text-gray-700">Disabled Input</label>
          <input
            type="text"
            value="Not editable"
            disabled
            className="px-4 py-2 bg-gray-200 text-gray-500 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="flex w-full gap-5 bg-gray-100 wrap items-center justify-center p-6 space-y-10">
        {/* Floating Label Input */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            name="name"
            onFocus={() => setFocused({ ...focused, name: true })}
            onBlur={(e) => setFocused({ ...focused, name: !!e.target.value })}
            className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Your Name"
          />
          <label
            htmlFor="name"
            className={`absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500`}
          >
            Your Name
          </label>
        </div>

        {/* Glowing Focus Ring Input */}
        <div className="w-full max-w-sm">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
          />
        </div>

        {/* Animated Border Input */}
        <div className="relative w-full max-w-sm group">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none"
          />
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-focus-within:w-full"></span>
        </div>

        {/* Border Grow on Focus */}
        <div className="relative w-full max-w-sm group">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-blue-500" />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 py-2 border-b-2 border-gray-300 focus:border-blue-500 transition-all outline-none"
          />
        </div>
      </div>

      <ImageInput />
    </div>
  );
};

export default InputField;
