import { Lock, Unlock, X } from 'lucide-react'
import React, { useState } from 'react'

const SecurityModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [isLocked, setIsLocked] = useState(true);

    const closeModal = () => setActiveModal(null);

    return (
        <div>

            <div className={`fixed inset-0 bg-gradient-to-br 
        from-red-900/90 to-orange-900/90 p-4 z-50
        ${activeModal === "security_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
                <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>

                    <button onClick={closeModal} className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>

                    <div className="text-center">
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${isLocked ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                            }`}>
                            {isLocked ? <Lock size={32} /> : <Unlock size={32} />}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {isLocked ? 'Account Locked' : 'Access Granted'}
                        </h3>

                        <p className="text-gray-600 mb-6">
                            {isLocked
                                ? 'Your account has been temporarily locked due to suspicious activity. Please verify your identity.'
                                : 'Welcome back! Your account has been successfully unlocked.'
                            }
                        </p>

                        {isLocked && (
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <input
                                    type="text"
                                    placeholder="2FA Code"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsLocked(!isLocked)}
                                className={`cursor-pointer flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${isLocked
                                    ? 'bg-red-600 hover:bg-red-700 text-white'
                                    : 'bg-green-600 hover:bg-green-700 text-white'
                                    }`}
                            >
                                {isLocked ? 'Verify & Unlock' : 'Continue'}
                            </button>
                            <button
                                onClick={closeModal}
                                className="cursor-pointer px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button  */}
            <button
                onClick={() => setActiveModal('security_modal')}
                className="p-4 cursor-pointer bg-red-100 text-red-600 
                rounded-lg border-2 border-red-600 hover:bg-red-600 
                hover:text-red-100 hover:border-red-50"
            >
                Security Modal
            </button>

        </div>
    )
}

export default SecurityModal