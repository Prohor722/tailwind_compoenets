import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export const SelectInput = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex gap-5 flex-wrap items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4">
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
        <label className="text-sm font-medium text-gray-600 mb-2 block">
          Language
        </label>
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
        <label className="block text-white text-sm font-medium mb-2">
          Choose Plan
        </label>
        <select className="w-full px-4 py-2 text-white bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300">
          <option>Free</option>
          <option>Pro</option>
          <option>Enterprise</option>
        </select>
      </div>

      <div className="relative w-72">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className={`peer w-full bg-white border border-gray-300 rounded-md px-4 pt-6 pb-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
        >
          <option value="" disabled>
            -- Choose --
          </option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </select>
        <label
          className={`absolute left-4 top-2 text-gray-500 text-sm transition-all ${
            selected
              ? "text-sm top-2 text-blue-500"
              : "peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 top-4 text-base text-gray-400"
          }`}
        >
          Programming Language
        </label>
      </div>

      <div className="relative w-72">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full border-b-2 border-gray-300 bg-transparent py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 transition-all duration-300"
        >
          <option value="" disabled>
            -- Select your skill --
          </option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
      </div>

      <div className="relative w-72">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
        >
          <option value="" disabled>
            -- Choose a framework --
          </option>
          <option value="nextjs">Next.js</option>
          <option value="svelte">Svelte</option>
          <option value="remix">Remix</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      <div className="relative w-72">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="backdrop-blur-md bg-white/30 border border-white/50 rounded-lg w-full py-3 px-4 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        >
          <option value="" disabled>
            -- Select a design style --
          </option>
          <option value="glass">Glassmorphism</option>
          <option value="neon">Neon</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>

      <div className="relative w-72">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-black text-green-400 border border-green-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-300"
        >
          <option value="" disabled>
            -- Choose neon color --
          </option>
          <option value="cyan">Cyan</option>
          <option value="lime">Lime</option>
          <option value="magenta">Magenta</option>
        </select>
      </div>

      <div className="relative w-72">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="peer w-full border border-gray-400 rounded-lg px-4 pt-6 pb-2 text-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        >
          <option value="" hidden></option>
          <option value="ai">AI</option>
          <option value="web">Web Dev</option>
          <option value="ml">Machine Learning</option>
        </select>
        <label
          className={`absolute left-4 top-3 text-sm text-gray-500 transform transition-all duration-300 ${
            selected
              ? "scale-75 -translate-y-4 text-blue-500"
              : "peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-500"
          }`}
        >
          Choose your field
        </label>
      </div>
    </div>
  );
};
