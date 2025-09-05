import React from 'react'

const LaunchButton = () => {
    return (
        <button className="group relative px-6 py-3 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer">
            <span className="absolute left-[-2px] translate-x-[-100%] group-hover:translate-x-4 transition-all duration-500 ease-in-out">
                🚀
            </span>
            <span className="transition-all duration-500 ease-in-out group-hover:ml-6">
                Launch Button
            </span>
        </button>
    )
}

export default LaunchButton
