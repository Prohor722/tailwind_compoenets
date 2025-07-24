import React from "react";
import { Globe } from 'lucide-react';

export const SelectInput = () => {
  return (
    <div className="flex gap-5 items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4">
      <div className="relative z-0 w-full group">
        <select
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          defaultValue=""
        >
          <option disabled value="">
            Choose a category
          </option>
          <option>Technology</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">
          Category
        </label>
      </div>

      <div className="relative w-80">
        <label className="text-sm font-medium text-gray-600 mb-2 block">Language</label>
        <div className="relative group">
          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
          <select className="pl-10 pr-4 py-2 w-full bg-transparent border-b-2 border-blue-200 text-gray-800 focus:outline-none focus:border-blue-600 transition duration-300">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-focus-within:w-full"></span>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/30 p-6 rounded-2xl shadow-lg max-w-sm w-full">
        <label className="block text-white text-sm font-medium mb-2">Choose Plan</label>
        <select className="w-full px-4 py-2 text-white bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300">
          <option>Free</option>
          <option>Pro</option>
          <option>Enterprise</option>
        </select>
      </div>
    </div>
  );
};
