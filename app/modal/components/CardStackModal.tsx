import { Heart, Star, Users, X, Zap } from 'lucide-react'
import { useState } from 'react'

const CardStackModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    
    const closeModal = () => setActiveModal(null);

    return (
        <div>

            <div className={`fixed inset-0 bg-black bg-opacity-50 
        flex items-center justify-center p-4 z-50
        ${activeModal === "cardstack" ? 'flex items-center justify-center' : 'hidden'}
        `}>
                <div className="relative">
                    {/* Background cards for stack effect */}
                    <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-30"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl transform rotate-1 translate-x-1 translate-y-1 opacity-60"></div>

                    {/* Main card */}
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Card Stack</h3>
                                <div className="flex items-center gap-2 text-yellow-500">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                            </div>
                            <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="mb-6">
                            <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl p-4 text-white mb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Heart className="text-white" size={20} />
                                    <span className="font-semibold">Featured Content</span>
                                </div>
                                <p className="text-sm opacity-90">This modal creates depth with layered card shadows</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Users size={16} className="text-blue-500" />
                                    <span className="text-sm">Stack effect with rotation</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Zap size={16} className="text-yellow-500" />
                                    <span className="text-sm">Multiple shadow layers</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl transition-all duration-300 flex-1 font-medium">
                                Get Started
                            </button>
                            <button onClick={closeModal} className="cursor-pointer border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300">
                                Later
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button  */}
                <button
                    onClick={() => setActiveModal('cardstack')}
                    className="bg-white text-white border p-4 rounded-xl 
                    transform rotate-3 translate-x-2 translate-y-2 opacity-30
                    cursor-pointer"
                >
                    Card Stack Modal
                </button>


        </div>
    )
}

export default CardStackModal