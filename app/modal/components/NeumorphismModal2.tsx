"use client";
import { Heart, Star, X } from "lucide-react";
import { useState } from "react";

const NeumorphismModal2 = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4
        ${
          activeModal
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }
        transition-all duration-300
      `}
      >
        <div className="absolute inset-0 bg-gray-200" onClick={closeModal} />
        <div className="relative bg-gray-200 rounded-3xl p-8 max-w-md w-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <button
            onClick={closeModal}
            className="cursor-pointer absolute top-4 right-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] hover:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all"
          >
            <X size={20} className="text-gray-600" />
          </button>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]">
              <Heart className="text-red-500" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Neumorphism Style
            </h2>
            <p className="text-gray-600 mb-6">
              Soft, extruded shapes that appear to emerge from the background
              with subtle shadows and highlights.
            </p>
            <button className="cursor-pointer bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => openModal("neumorphism")}
          className="cursor-pointer flex jusity-center items-center gap-2 bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all"
        >
          <Heart className="text-red-500" size={20} />
          <span>Neumorphism Modal 2</span>
        </button>
      </div>
    </div>
  );
};

export default NeumorphismModal2;
