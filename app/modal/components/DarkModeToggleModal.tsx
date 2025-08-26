import { Moon, Sun, X } from 'lucide-react';
import React, { useState } from 'react'

const DarkModeToggleModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(false);

    const closeModal = () => setActiveModal(null);


    return (
        <div>

            <div className={`fixed inset-0 bg-black 
        bg-opacity-50 p-4 z-50
        ${activeModal === "dark_mode_toggle" ? "flex items-center justify-center" : "hidden"}
        `}>
                <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl transition-all duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
                    }`}>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Theme Preferences</h3>
                        <button onClick={closeModal} className={`cursor-pointer ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors`}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="text-center mb-8">
                        <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                            }`}>
                            {isDark ? <Moon size={32} /> : <Sun size={32} />}
                        </div>

                        <h4 className="text-lg font-semibold mb-2">
                            {isDark ? 'Dark Mode' : 'Light Mode'}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {isDark ? 'Easy on the eyes, perfect for night time' : 'Clean and bright, great for daytime'}
                        </p>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`relative w-16 h-8 rounded-full transition-all duration-300 ${isDark ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                        >
                            <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${isDark ? 'translate-x-9' : 'translate-x-1'
                                }`} />
                        </button>
                    </div>

                    <div className="flex gap-3">
                        <button
                            className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${isDark
                                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                        >
                            Apply Theme
                        </button>
                        <button
                            onClick={closeModal}
                            className={`cursor-pointer px-6 py-3 rounded-xl transition-all duration-300 ${isDark
                                ? 'border border-gray-600 hover:bg-gray-800 text-gray-300'
                                : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                                }`}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            {/* Button  */}
            <button
                onClick={() => setActiveModal('dark_mode_toggle')}
                className={`cursor-pointer p-4 rounded-xl
                    shadow-2xl transition-all duration-500
                ${isDark 
                    ? 
                    "bg-gray-900 text-white"
                    :
                    "bg-yellow-100 text-yellow-600"
                }`}>
                Dark Mode Toggle Modal
            </button>

        </div>
    )
}

export default DarkModeToggleModal