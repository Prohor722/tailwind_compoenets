import { X } from 'lucide-react';
import { useState } from 'react'

const CyberpunkModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const closeModal = () => setActiveModal(null);

    return (
        <div>

            <div className={`fixed inset-0 bg-black 
        bg-opacity-90 flex items-center justify-center 
        p-4 z-50
        ${activeModal === "cyberpunk" ? 'flex items-center justify-center' : 'hidden'}
        `}>
                <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-8 max-w-md w-full shadow-2xl shadow-cyan-400/25 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-cyan-400 font-mono tracking-wider">CYBERPUNK_MODAL</h3>
                            <button onClick={closeModal} className="cursor-pointer text-cyan-400 hover:text-purple-400 transition-colors border border-cyan-400 hover:border-purple-400 p-1 rounded">
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-gray-300 mb-6 font-mono text-sm">
                            [SYSTEM_MSG]: Futuristic interface design with neon accents and grid patterns. Access level: AUTHENTICATED.
                        </p>
                        <div className="flex gap-3">
                            <button className="cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black px-6 py-3 rounded font-bold transition-all duration-300 transform hover:scale-105">
                                EXECUTE
                            </button>
                            <button onClick={closeModal} className="cursor-pointer border border-purple-400 hover:bg-purple-400/20 text-purple-400 px-6 py-3 rounded transition-all duration-300">
                                ABORT
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button  */}

            <button
                onClick={() => setActiveModal('cyberpunk')}
                className="p-4 font-bold text-cyan-400 font-mono 
                tracking-wider bg-gray-900 border-2 border-cyan-400 
                rounded-lg shadow-2xl shadow-cyan-400/25 cursor-pointer
                hover:bg-cyan-950"
            >
                Preview Cyberpunk
            </button>


        </div>
    )
}

export default CyberpunkModal