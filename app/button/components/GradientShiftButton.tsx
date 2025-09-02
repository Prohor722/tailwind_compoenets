import React from 'react'

const GradientShiftButton = () => {
  return (
    <button className="relative cursor-pointer overflow-hidden text-white px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 transition-all duration-500">
      Gradient Shift Button
    </button>
  )
}

export default GradientShiftButton
