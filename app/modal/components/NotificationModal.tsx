import { Check, X } from "lucide-react";
import React, { useState } from "react";

const NotificationModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  // Handle backdrop click (clicking outside the modal)
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if the click target is the backdrop itself
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Prevent modal from closing when clicking inside the modal content
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div>
      {/* Modal Backdrop */}
      <div
        className={`fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black bg-opacity-50
          ${activeModal === "notification" ? "block" : "hidden"}`}
        onClick={handleBackdropClick}
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-sm w-full border transform animate-bounce"
          onClick={handleModalClick}
        >
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-600" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Success!</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Your changes have been saved successfully.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={closeModal}
                    className="cursor-pointer text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    Dismiss
                  </button>
                  <button className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                    View Details
                  </button>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl" />
        </div>
      </div>

      {/* Trigger Button */}
      <button
        onClick={() => openModal("notification")}
        className="cursor-pointer flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-300 rounded-2xl p-2 text-left transition-all duration-200 hover:scale-105"
      >
        <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
          <Check className="text-green-600" size={20} />
        </div>
        <h3 className="font-semibold text-gray-800">Notification</h3>
      </button>
    </div>
  );
};

export default NotificationModal;
