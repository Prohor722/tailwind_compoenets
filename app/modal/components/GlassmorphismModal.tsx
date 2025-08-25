import { X } from 'lucide-react';
import { useState } from 'react'

const GlassmorphismModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const closeModal = () => setActiveModal(null);

    return (
        <div>
            <div className={`fixed inset-0 bg-black bg-opacity-30 
          backdrop-blur-sm flex items-center justify-center 
          p-4 z-50 
          ${activeModal === 'glassmorphism' ? 'flex items-center justify-center' : 'hidden'}
          `}>
                <div className="bg-white bg-opacity-20 backdrop-blur-xl border border-white border-opacity-30 rounded-3xl p-8 max-w-md w-full shadow-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-white">Glassmorphism</h3>
                        <button onClick={closeModal} className="text-white hover:text-gray-300 transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                    <p className="text-white text-opacity-90 mb-6">
                        This modal uses glassmorphism design with backdrop blur and transparency effects for a modern, elegant look.
                    </p>
                    <div className="flex gap-3">
                        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm">
                            Action
                        </button>
                        <button onClick={closeModal} className="bg-transparent border border-white border-opacity-50 hover:border-opacity-100 text-white px-6 py-3 rounded-full transition-all duration-300">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>


            <button
                onClick={() => setActiveModal('glassmorphism')}
                className="p-4 bg-white bg-opacity-20 
                backdrop-blur-xl border border-white 
                border-opacity-30 rounded-xl"
            >
                Glassmorphism Modal
            </button>

        </div>
    )
}

export default GlassmorphismModal