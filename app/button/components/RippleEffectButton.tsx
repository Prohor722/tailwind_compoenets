import React from 'react'

const RippleEffectButton = () => {
    return (
        <button className="relative px-6 py-3 cursor-pointer bg-indigo-600 text-white rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300">
            Ripple Effect Button
            <span className="absolute inset-0 bg-white opacity-10 rounded-lg group-hover:animate-ping" />
        </button>
    )
}

export default RippleEffectButton
