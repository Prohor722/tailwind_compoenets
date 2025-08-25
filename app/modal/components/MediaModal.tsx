import { Camera, Download, Heart, Share2, X } from 'lucide-react';
import { useState } from 'react'

const MediaModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const closeModal = () => setActiveModal(null);

    return (
        <div>

            <div className={`fixed inset-0 bg-black 
      bg-opacity-90 flex items-center justify-center 
      p-4 z-50
      ${activeModal === "media" ? 'flex items-center justify-center' : 'hidden'}
        `}>
                <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop"
                            alt="Sample"
                            className="w-full h-64 object-cover"
                        />
                        <button onClick={closeModal} className="cursor-pointer absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold mb-1">Beautiful Landscape</h3>
                            <p className="text-sm opacity-90">Captured in the mountains</p>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <Camera size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">John Photographer</p>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Heart size={18} className="text-gray-400 hover:text-red-500" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Share2 size={18} className="text-gray-400" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Download size={18} className="text-gray-400" />
                                </button>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                            A stunning view from the mountain peak during golden hour. The interplay of light and shadow creates a magical atmosphere.
                        </p>

                        <div className="flex gap-3">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex-1">
                                View Full Size
                            </button>
                            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg transition-colors">
                                Save to Album
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button  */}
            <button
                onClick={() => setActiveModal('media')}
                className="cursor-pointer p-4 text-black border
                dark:bg-gray-700 dark:text-white 
                bg-white rounded-xl shadow-2xl"
            >
                Media Modal
            </button>

        </div>
    )
}

export default MediaModal