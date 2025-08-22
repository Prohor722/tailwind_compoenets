'use client';
import React from "react";
import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [activeModal, setActiveModal] = useState(null);


  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex items-center justify-center gap-5">
      {/* Modal 1  */}
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-8">
        {/* Open Modal Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg"
        >
          Open Modal
        </button>

        {/* Modal Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative animate-fade-in-up">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome!
              </h2>
              <p className="text-gray-600">
                This is a modern animated modal using Tailwind and React in
                Next.js.
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal 2  */}
      <div className="flex items-center justify-center bg-gradient-to-r from-sky-100 to-indigo-100 p-6">
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Open Fade Modal
        </button>

        {open && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative animate-fade-in-up">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Fade Modal</h2>
              <p className="text-gray-600">This modal uses a fade and scale animation.</p>
            </div>
          </div>
        )}
      </div>

      {/* Modal 3  */}
      <div className="text-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Show Success Modal
        </button>

        {open2 && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl text-center max-w-sm w-full shadow-2xl animate-fade-in-up relative">
              <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-1">Success!</h2>
              <p className="text-gray-600 mb-4">Your action was completed successfully.</p>
              <button
                onClick={() => setOpen2(false)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Close
              </button>
              <X className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => setOpen(false)} />
            </div>
          </div>
        )}
      </div>

      {/* Modal 4  */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white bg-opacity-20 backdrop-blur-xl border border-white border-opacity-30 rounded-3xl p-8 max-w-md w-full shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Glassmorphism</h3>
            <button onClick={closeModal} className="text-white hover:text-gray-300 transition-colors">
              <X size={24} />
            </button>
          </div>
          <p className="text-white text-opacity-90 mb-6">
            This modal uses glassmorphism design with backdrop blur and transparency effects for a modern, elegant look.
          </p>
          <div className="flex gap-3">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm">
              Action
            </button>
            <button onClick={closeModal} className="bg-transparent border border-white border-opacity-50 hover:border-opacity-100 text-white px-6 py-3 rounded-full transition-all duration-300">
              Cancel
            </button>
          </div>
        </div>
      </div>


      {/* Modal 4,5,6 buttons  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modals.map((modal) => (
          <div key={modal.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{modal.name}</h3>
            <p className="text-gray-600 text-sm mb-4">
              {modal.id === 'glassmorphism' && 'Transparent backdrop with blur effects'}
              {modal.id === 'neumorphism' && 'Soft UI with subtle shadow depth'}
              {modal.id === 'cyberpunk' && 'Futuristic neon-accented design'}
              {modal.id === 'cardstack' && 'Layered cards with rotation effect'}
              {modal.id === 'sliding' && 'Side panel with smooth animations'}
              {modal.id === 'media' && 'Image-focused with social features'}
            </p>
            <button
              onClick={() => setActiveModal(modal.id)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Preview {modal.name}
            </button>
          </div>
        ))}
      </div>


    </div>
  );
};

