import { Star, X } from "lucide-react";
import { useState } from "react";

const GlassmorphismModal2 = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);
  return (
    <div>
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4
        ${activeModal === "glassmorphism2" ? "visible" : "invisible"}`}>
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-md"
          onClick={closeModal}
        />
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Glassmorphism Style
            </h3>
            <p className="text-white/80 mb-6">
              Beautiful translucent design with backdrop blur effects
            </p>
            <div className="flex gap-3">
              <button className="flex-1 bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-xl transition-all duration-200">
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 rounded-xl transition-all duration-200">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => openModal("glassmorphism2")}
        className="border-4 border-pink-600 hover:border-pink-800 cursor-pointer bg-pink-600 hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        Glassmorphism Modal 2
      </button>
    </div>
  );
};

export default GlassmorphismModal2;
