import { Download, Heart, Share2, User, X } from "lucide-react";
import { useState } from "react";

const SlideUpModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <div className={`fixed inset-0 z-50 flex items-end justify-center
        ${activeModal === "slideUp" ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
        <div className="relative bg-white rounded-t-3xl w-full max-w-md p-6 transform animate-slide-up">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Share2 className="text-blue-600" size={18} />
              </div>
              <span className="font-medium text-gray-800">Share</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Download className="text-green-600" size={18} />
              </div>
              <span className="font-medium text-gray-800">Download</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="text-red-600" size={18} />
              </div>
              <span className="font-medium text-gray-800">
                Add to Favorites
              </span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="text-purple-600" size={18} />
              </div>
              <span className="font-medium text-gray-800">Profile</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => openModal("slideUp")}
        className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-2xl p-6 text-left transition-all duration-200 hover:scale-105"
      >
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
          <Share2 className="text-white" size={20} />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Slide Up Mobile</h3>
        <p className="text-gray-600 text-sm">Bottom sheet style modal</p>
      </button>
    </div>
  );
};

export default SlideUpModal;
