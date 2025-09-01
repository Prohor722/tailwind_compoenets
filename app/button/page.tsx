//use client
import React from 'react'
import { AnimarionButtons } from '../components/animarion-buttons'
import PrimaryButton from './components/PrimaryButton'
import OutlineButton from './components/OutlineButton'
import GradientButton from './components/GradientButton'
import RoundedFullButton from './components/RoundedFullButton'
import IconButton from './components/IconButton'
import DisabledButton from './components/DisabledButton'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10 space-y-8">
      <h1 className="text-2xl font-bold text-blue-500">Tailwind Button Showcase</h1>

      <div className="flex flex-wrap justify-center gap-4">

        <PrimaryButton />

        <OutlineButton />

        <GradientButton />
        
        <RoundedFullButton />

        <IconButton />

        <DisabledButton />
      </div>

      <AnimarionButtons />
    </div>
  )
}

export default page