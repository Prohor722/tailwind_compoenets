import { Bell, Lock, Settings, User, X } from "lucide-react";
import { useState } from "react";

const FloatingActionModal2 = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <div className={`fixed bottom-6 right-6 z-50
        ${activeModal === "floating" ? "block" : "hidden"}`}>
        <div className="bg-white rounded-2xl shadow-2xl border p-4 w-64 transform origin-bottom-right animate-scale-up">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
          <h4 className="font-semibold text-gray-900 mb-3">Quick Actions</h4>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Bell className="text-blue-500" size={16} />
              <span className="text-sm text-gray-700">Notifications</span>
            </button>
            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Lock className="text-orange-500" size={16} />
              <span className="text-sm text-gray-700">Privacy</span>
            </button>
            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Settings className="text-gray-500" size={16} />
              <span className="text-sm text-gray-700">Settings</span>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => openModal("floating")}
        className="flex justify-center items-center gap-2 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200 rounded-2xl p-2 text-left transition-all duration-200 hover:scale-105"
      >
        <div className="bg-gray-800 rounded-xl p-2">
          <User className="text-white" size={20} />
        </div>
        <h3 className="font-semibold text-gray-800">Floating Action Modal 2</h3>
      </button>
    </div>
  );
};

export default FloatingActionModal2;
