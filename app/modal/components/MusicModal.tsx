import { Minus, Pause, Play, Plus, Volume2, X } from 'lucide-react'
import { useState } from 'react'

const MusicModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const closeModal = () => setActiveModal(null);

  return (
    <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-80 p-4 z-50
        ${activeModal === "music" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-700">
            <button onClick={closeModal} className="cursor-pointer float-right text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>

            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className={`w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }}>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-20"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">Midnight Dreams</h3>
              <p className="text-gray-400 mb-6">The Synthwave Collective</p>

              <div className="mb-6">
                <div className="bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1:23</span>
                  <span>3:45</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button className="cursor-pointer text-gray-400 hover:text-white transition-colors">
                  <Minus size={20} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="cursor-pointer w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white ml-1" />}
                </button>
                <button className="cursor-pointer text-gray-400 hover:text-white transition-colors">
                  <Plus size={20} />
                </button>
                <button className="cursor-pointer text-gray-400 hover:text-white transition-colors">
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
            onClick={() => setActiveModal('music')}
            className="cursor-pointer p-4 bg-gradient-to-br 
            from-gray-900 to-black rounded-xl shadow-2xl 
            border border-gray-700"
          >
            Music Modal
          </button>

      </div>
  )
}

export default MusicModal