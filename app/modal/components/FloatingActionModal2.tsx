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
        className="bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200 rounded-2xl p-6 text-left transition-all duration-200 hover:scale-105"
      >
        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
          <User className="text-white" size={20} />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Floating Action</h3>
        <p className="text-gray-600 text-sm">Context menu style</p>
      </button>
    </div>
  );
};

export default FloatingActionModal2;
