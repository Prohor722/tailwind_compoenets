import { X } from 'lucide-react';
import React, { useState } from 'react'

const NeumorphismModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const closeModal = () => setActiveModal(null);

    return (
        <div>
            {/* Neumorphism Modal */}
            <div className={`fixed inset-0 bg-gray-300 flex
         items-center justify-center p-4 z-50
         ${activeModal === 'neumorphism' ? 'flex items-center justify-center' : 'hidden'}
         `}>
                <div className="bg-gray-300 rounded-3xl p-8 max-w-md w-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800">Neumorphism</h3>
                        <button onClick={closeModal} className="text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-full shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
                            <X size={20} />
                        </button>
                    </div>
                    <p className="text-gray-700 mb-6">
                        A soft UI approach with subtle shadows that create the illusion of elements extruding from or being pressed into the background.
                    </p>
                    <div className="flex gap-3">
                        <button className="bg-gray-300 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-gray-800 px-6 py-3 rounded-2xl transition-all duration-300">
                            Confirm
                        </button>
                        <button onClick={closeModal} className="bg-gray-300 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-gray-800 px-6 py-3 rounded-2xl transition-all duration-300">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            {/* Button  */}

            <button
                onClick={() => setActiveModal('neumorphism')}
                className="bg-gray-300 rounded-xl p-4 max-w-md w-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-200"
            >
                Preview Neumorphism
            </button>
        </div>
    )
}

export default NeumorphismModal