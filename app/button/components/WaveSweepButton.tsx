import React from 'react'

const WaveSweepButton = () => {
    return (
        <button className="cursor-pointer relative px-6 py-3 bg-sky-500 text-sky-300 hover:text-white rounded-lg overflow-hidden group">
            <span className="absolute -bottom-full left-0 w-full h-full bg-sky-700 group-hover:bottom-0 transition-all duration-500 ease-out"></span>
            <span className="relative z-10">Wave Sweep Button</span>
        </button>
    )
}

export default WaveSweepButton
