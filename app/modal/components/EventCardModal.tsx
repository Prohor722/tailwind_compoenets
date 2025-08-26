import { Award, Calendar, Clock, Heart, MapPin, Users, X } from 'lucide-react'
import { useState } from 'react'

const EventCardModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const closeModal = () => setActiveModal(null);
  
  return (
    <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-50 p-4 z-50
        ${activeModal === "event_card" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              <button onClick={closeModal} className="cursor-pointer absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-25 rounded-full p-2">
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Design Conference 2024</h3>
                <p className="text-sm opacity-90">The future of digital design</p>
              </div>
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 backdrop-blur-sm rounded-xl px-3 py-1">
                <span className="text-white text-xs font-semibold">PREMIUM EVENT</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span className="text-sm">March 15-16, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">San Francisco</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-gray-500" />
                <span className="text-sm text-gray-600">9:00 AM - 6:00 PM PST</span>
              </div>

              <p className="text-gray-600 mb-6 text-sm">
                Join industry leaders for two days of inspiring talks, workshops, and networking opportunities focused on the latest trends in digital design and user experience.
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Users size={16} className="cursor-pointer text-gray-500" />
                  <span className="text-sm text-gray-600">245 attending</span>
                </div>
                <div className="cursor-pointer flex items-center gap-2">
                  <Award size={16} className="text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">4.9 rating</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl transition-all duration-300 flex-1 font-medium">
                  Register Now - $299
                </button>
                <button className="cursor-pointer border border-gray-300 hover:bg-gray-50 text-gray-700 p-3 rounded-xl transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Button  */}
        <button
          onClick={() => setActiveModal('event_card')}
          className="cursor-pointer bg-white dark:bg-gray-900 dark:text-white
           rounded-xl shadow-2xl p-4"
        >
          Event Card Modal
        </button>

      </div>
  )
}

export default EventCardModal