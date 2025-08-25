import { useState } from "react";
import { X } from 'lucide-react';


const SimpleModal = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-8">
        {/* Open Modal Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg"
        >
          Simple Modal
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
    )
}

export default SimpleModal;