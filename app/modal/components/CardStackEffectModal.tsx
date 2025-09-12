"use client";
import { ChevronRight, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const CardStackEffectModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);
  return (
    <div>
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4
        ${activeModal === "cardstack" ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
        <div className="relative max-w-sm w-full">
          {/* Background cards for stacking effect */}
          <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 scale-95 opacity-30" />
          <div className="absolute inset-0 bg-white rounded-2xl transform rotate-1 scale-98 opacity-60" />

          {/* Main card */}
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform rotate-3">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Card Stack Effect
              </h2>
              <p className="text-gray-600">
                Multiple layered cards create depth and visual hierarchy in your
                interface.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="font-medium text-gray-700">Feature One</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="font-medium text-gray-700">Feature Two</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="font-medium text-gray-700">Feature Three</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-4 flex items-center justify-center">
            <MessageCircle className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Card Stack</h3>
          <p className="text-gray-600 mb-4">
            Layered cards that create depth and visual hierarchy with stacking
            effects.
          </p>
          <button
            onClick={() => openModal("cardstack")}
            className="w-full bg-gradient-to-br from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardStackEffectModal;
