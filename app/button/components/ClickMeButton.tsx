import React from 'react'

const ClickMeButton = () => {
    return (
        <button className="relative cursor-pointer inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 shadow-lg group">
            <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform scale-0 bg-white opacity-10 group-hover:scale-100" />
            Click Me Button
        </button>
    )
}

export default ClickMeButton
