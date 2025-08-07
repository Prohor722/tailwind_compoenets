import React from "react";
import {
  ArrowRight,
  Loader2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

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

        {/* Shield Pop-in Button */}
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:scale-105 transition-transform duration-200">
          <ShieldCheck className="animate-pulse" />
          Secure
        </button>

        {/* Neon Border Button */}
        <button className="relative px-6 py-3 text-white border border-cyan-400 rounded-md transition hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#22d3ee] duration-300">
          Neon Border
        </button>

        {/* Neon Pulse Button */}
        <button className="relative px-6 py-3 font-semibold text-cyan-300 border border-cyan-400 rounded-lg bg-black shadow-md hover:shadow-[0_0_25px_#22d3ee] transition-all duration-300">
          <span className="absolute -inset-px rounded-lg opacity-20 blur-md bg-cyan-400 animate-pulse"></span>
          Neon Pulse
        </button>

        {/* Fill Slide Button */}
        <button className="group relative px-6 py-3 overflow-hidden border border-lime-400 text-lime-400 rounded-md hover:text-black transition duration-300">
          <span className="absolute inset-0 bg-lime-400 w-0 group-hover:w-full transition-all duration-300"></span>
          <span className="relative z-10">Slide Fill</span>
        </button>

        {/* Icon Reveal Button */}
        <button className="group flex items-center gap-2 px-6 py-3 bg-indigo-700 rounded-lg hover:bg-indigo-800 transition-all duration-300">
          <span>Reveal Icon</span>
          <ArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Bouncy Confirm Button */}
        <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition transform hover:scale-105 duration-300">
          <CheckCircle2 className="animate-bounce" />
          Confirm
        </button>

        {/* Glow On Hover Button */}
        <button className="relative px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md transition duration-300 overflow-hidden">
          <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-lg"></span>
          Glow Hover
        </button>

        {/* Lock with Pulse Icon */}
        <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white transition duration-300">
          <Lock className="animate-pulse" />
          Lock
        </button>

        {/* Sparkling Glassmorphism */}
        <button className="relative px-6 py-3 rounded-xl border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition text-white flex items-center gap-2">
          <Sparkles className="text-yellow-400 animate-ping" />
          Magic Glass
        </button>

        <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 shadow-lg group">
          <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform scale-0 bg-white opacity-10 group-hover:scale-100" />
          Click Me
        </button>

        <button className="px-6 py-3 bg-white border border-gray-300 shadow-inner rounded-xl text-gray-800 font-semibold transition-all duration-200 active:scale-95 hover:shadow-md hover:border-blue-400 backdrop-blur-md">
          Glassy Button
        </button>

        <button className="relative px-6 py-3 bg-indigo-600 text-white rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300">
          Ripple
          <span className="absolute inset-0 bg-white opacity-10 rounded-lg group-hover:animate-ping" />
        </button>

        <button className="group relative px-6 py-3 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer">
          <span className="absolute left-[-2px] translate-x-[-100%] group-hover:translate-x-4 transition-all duration-500 ease-in-out">
            🚀
          </span>
          <span className="transition-all duration-500 ease-in-out group-hover:ml-6">
            Launch
          </span>
        </button>

        <button className="px-6 py-3 text-white font-bold bg-black border border-white hover:border-gray-400 rounded-lg shadow-lg transition-all duration-300 hover:text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">
          Neon Glow
        </button>

        <button className="relative px-6 py-3 text-white bg-black group overflow-hidden rounded-lg">
          <span className="absolute inset-0 w-full h-full bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 group-hover:text-black transition-all duration-500">
            Slide Up
          </span>
        </button>

        <button className="relative px-5 py-2 text-blue-600 font-medium group">
          Hover Me
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full duration-300"></span>
        </button>

        <button className="group px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:gap-4 transition-all duration-500 ease-in-out">
          <span className="transform -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            🚀
          </span>
          <span>Launch</span>
        </button>

        
      </div>
    </div>
  );
};
