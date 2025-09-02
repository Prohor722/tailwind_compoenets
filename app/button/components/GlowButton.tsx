import React from 'react'

const GlowButton = () => {
    return (
        <button className="relative px-6 cursor-pointer py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg hover:shadow-indigo-500/50 transition duration-300">
            <span className="absolute inset-0 bg-indigo-500 blur opacity-40 rounded-lg"></span>
            Glow Button
        </button>
    )
}

export default GlowButton
