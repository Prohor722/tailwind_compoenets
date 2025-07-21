import React from "react";
import { ArrowRight, Loader2, Sparkles, ShieldCheck } from "lucide-react";

export const AnimarionButtons = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center gap-10">
      <h1 className="text-2xl text-blue-500 font-bold">
        Animated Button Designs
      </h1>

      <div className="flex flex-wrap gap-6 justify-center w-full max-w-4xl">
        {/* Basic Hover Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          Hover Me
        </button>

        {/* Scale on Hover */}
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg transform hover:scale-110 transition-transform duration-300">
          Scale Hover
        </button>

        {/* Shadow & Translate Animation */}
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Lift Effect
        </button>

        {/* Gradient Background Slide Animation */}
        <button className="relative overflow-hidden text-white px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 transition-all duration-500">
          Gradient Shift
        </button>

        {/* Border Animation */}
        <button className="relative px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
          Border Flip
        </button>

        {/* Ripple Style Animation (Pseudo-Effect) */}
        <button className="relative bg-indigo-600 text-white px-6 py-2 rounded-lg group overflow-hidden">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white opacity-20 rounded-full group-hover:w-32 group-hover:h-32 group-hover:top-[-16px] group-hover:left-[-16px]" />
          <span className="relative z-10">Ripple</span>
        </button>

        <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
          {/* Glow Button */}
          <button className="relative px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg hover:shadow-indigo-500/50 transition duration-300">
            <span className="absolute inset-0 bg-indigo-500 blur opacity-40 rounded-lg"></span>
            Glow Effect
          </button>

          {/* Slide-In Arrow Button */}
          <button className="group px-6 py-3 bg-blue-600 rounded-full flex items-center gap-2 font-medium hover:pl-8 transition-all duration-300">
            <span>Next</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Glassmorphism Button */}
          <button className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition">
            Glass Effect
          </button>

          {/* Loading Spinner Button */}
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition">
            <Loader2 className="w-5 h-5 animate-spin" />
            Loading...
          </button>

          {/* Bounce Icon Button */}
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-pink-700 transition">
            <Sparkles className="w-5 h-5 animate-bounce" />
            Magic
          </button>

          {/* Shield Pop-in Button */}
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:scale-105 transition-transform duration-200">
            <ShieldCheck className="animate-pulse" />
            Secure
          </button>

          {/* Neon Border Button */}
          <button className="relative px-6 py-3 text-white border border-cyan-400 rounded-md transition hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#22d3ee] duration-300">
            Neon Border
          </button>
        </div>
      </div>
    </div>
  );
};
