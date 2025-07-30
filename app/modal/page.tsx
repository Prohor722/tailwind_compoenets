'use client';
import React from "react";
import { useState } from 'react';
import { X } from 'lucide-react';

export default function ModalPage(){
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    
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

    </div>
  );
};

