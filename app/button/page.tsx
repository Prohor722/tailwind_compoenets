//use client
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-8">
      <h1 className="text-2xl font-bold text-blue-500">Tailwind Button Showcase</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Primary */}
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Primary
        </button>

        {/* Outline */}
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
          Outline
        </button>

        {/* Gradient */}
        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:opacity-90 transition">
          Gradient
        </button>

        {/* Rounded Full */}
        <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
          Rounded Full
        </button>

        {/* Icon Button */}
        <button className="flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
          <span>Download</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
        </button>

        {/* Disabled */}
        <button className="px-6 py-2 bg-gray-400 text-white rounded cursor-not-allowed" disabled>
          Disabled
        </button>
      </div>
    </div>
  )
}

export default page