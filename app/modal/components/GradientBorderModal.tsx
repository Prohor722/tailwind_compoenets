import { AlertTriangle, X } from "lucide-react";
import React, { useState } from "react";

const GradientBorderModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4
      ${activeModal === "gradient" ? "" : "hidden"}`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        />
        <div className="relative max-w-lg w-full">
          <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl">
            <div className="bg-gray-900 rounded-2xl p-8">
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Gradient Border
                </h3>
                <p className="text-gray-300 mb-6">
                  Eye-catching gradient borders with dark theme design
                </p>
                <div className="flex gap-3">
                  <button onClick={closeModal} className="cursor-pointer flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-xl transition-colors">
                    Cancel
                  </button>
                  <button className="cursor-pointer flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl transition-all duration-200">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => openModal("gradient")}
        className="cursor-pointer bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-2xl p-[2px] text-left transition-all duration-200 hover:scale-105"
      >
        <div className="flex items-center justify-center text-orange-400 gap-2 bg-gray-900 rounded-2xl p-3">
          <AlertTriangle size={20} />
          <h3 className="font-semibold">
            Gradient Border Modal
          </h3>
        </div>
      </button>
    </div>
  );
};

export default GradientBorderModal;
