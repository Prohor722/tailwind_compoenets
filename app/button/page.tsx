//use client
import React from 'react'
import { AnimarionButtons } from '../components/animarion-buttons'
import PrimaryButton from './components/PrimaryButton'
import OutlineButton from './components/OutlineButton'
import GradientButton from './components/GradientButton'
import RoundedFullButton from './components/RoundedFullButton'
import IconButton from './components/IconButton'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-8">
      <h1 className="text-2xl font-bold text-blue-500">Tailwind Button Showcase</h1>

      <div className="flex flex-wrap justify-center gap-4">

        <PrimaryButton />

        <OutlineButton />

        <GradientButton />
        
        <RoundedFullButton />

        {/* Icon Button */}
        <IconButton />

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