import React from 'react'

export const AnimarionButtons = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center gap-10">
      <h1 className="text-2xl font-bold text-gray-800">Animated Button Designs</h1>

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
      </div>
    </div>
  )
}
