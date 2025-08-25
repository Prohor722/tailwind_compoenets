import { Bell, Settings, X } from 'lucide-react'
import { useState } from 'react'

const SlidingPanelModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const closeModal = () => setActiveModal(null);

  return (
    <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-50 z-50
        ${activeModal === "sliding" ? 'flex items-center justify-center' : 'hidden'}
        `}>
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out animate-in slide-in-from-right">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Settings Panel</h3>
                <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Bell size={18} className="text-blue-500" />
                    Notifications
                  </h4>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Email notifications</span>
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Push notifications</span>
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Settings size={18} className="text-green-500" />
                    Preferences
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Theme</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                        <option>Light</option>
                        <option>Dark</option>
                        <option>Auto</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Language</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex gap-3">
                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex-1">
                  Save Changes
                </button>
                <button onClick={closeModal} className="cursor-pointer border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
          <button
            onClick={() => setActiveModal('sliding')}
            className="p-4 cursor-pointer bg-white shadow-2xl"
          >
            Sliding Panel Modal
          </button>


      </div>
  )
}

export default SlidingPanelModal