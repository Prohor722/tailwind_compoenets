"use client";
import { Upload, X } from "lucide-react";
import { useState } from "react";

const AnimatedUploadModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);
  return (
    <div>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4
        ${
          activeModal === "upload"
            ? "visible opacity-100 block"
            : "invisible opacity-0 pointer-events-none hidden"
        } transition-opacity duration-300
        `}
      >
        <div
          className="cursor-pointer absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"
          onClick={closeModal}
        />
        <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl">
          <button
            onClick={closeModal}
            className="cursor-pointer absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Upload Files
            </h2>
            <p className="text-gray-600">
              Drag and drop your files or click to browse
            </p>
          </div>

          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
              isDragOver
                ? "border-indigo-500 bg-indigo-50 scale-105"
                : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
            }}
          >
            <div
              className={`transition-all duration-300 ${
                isDragOver ? "scale-110" : ""
              }`}
            >
              <Upload
                size={48}
                className={`mx-auto mb-4 ${
                  isDragOver ? "text-indigo-500" : "text-gray-400"
                }`}
              />
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {isDragOver ? "Drop files here!" : "Choose files to upload"}
              </p>
              <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="cursor-pointer flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button className="cursor-pointer flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Upload
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => openModal("upload")}
        className="flex justify-center items-center gap-2 cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all"
      >
        <Upload className="text-white" size={20} />
        <span>Animated Upload Modal</span>
      </button>
    </div>
  );
};

export default AnimatedUploadModal;
