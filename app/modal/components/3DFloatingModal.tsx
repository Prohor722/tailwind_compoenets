import { Gift, X } from 'lucide-react'
import { useState } from 'react'

const FloatingModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const closeModal = () => setActiveModal(null);

  return (
    <div>
        <div className={`fixed inset-0 bg-gradient-to-br 
        from-indigo-900/50 to-purple-900/50 backdrop-blur-sm 
        p-4 z-50
        ${activeModal === "floating" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform hover:rotate-1 transition-transform duration-500 hover:scale-105"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)'
              }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <button onClick={closeModal} className="cursor-pointer text-white">
                  <X size={16} />
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <Gift className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">3D Floating</h3>
                <p className="text-gray-600 mb-6">
                  This modal floats in 3D space with perspective transforms and hover effects that create depth.
                </p>

                <div className="flex gap-3">
                  <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex-1">
                    Accept
                  </button>
                  <button onClick={closeModal} className="cursor-pointer border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50">
                    Decline
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-6 -right-6 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -left-12 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('floating')}
          className="cursor-pointer p-4 border border-[#00a9c2]
          bg-white rounded-2xl max-w-md w-full shadow-2xl transform hover:rotate-1 transition-transform duration-500 hover:scale-105;"
        >
          3D Floating Modal
        </button>
      </div>
  )
}

export default FloatingModal