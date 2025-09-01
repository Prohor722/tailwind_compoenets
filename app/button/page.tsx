//use client
import React from 'react'
import { AnimarionButtons } from '../components/animarion-buttons'
import PrimaryButton from './components/PrimaryButton'
import OutlineButton from './components/OutlineButton'
import GradientButton from './components/GradientButton'
import RoundedFullButton from './components/RoundedFullButton'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-8">
      <h1 className="text-2xl font-bold text-blue-500">Tailwind Button Showcase</h1>

      <div className="flex flex-wrap justify-center gap-4">

        <PrimaryButton />

        <OutlineButton />

        <GradientButton />
        

        {/* Rounded Full */}
        <RoundedFullButton />

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

      <AnimarionButtons />
    </div>
  )
}

export default page