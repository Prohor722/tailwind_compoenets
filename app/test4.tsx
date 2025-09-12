import React, { useState } from 'react';
import { X, Star, Heart, MessageCircle, Share2, ChevronRight, Camera, Upload, Zap } from 'lucide-react';

export default function UniqueModalDesigns() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  // Floating Action Modal
  const FloatingActionModal = () => (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/40"
        onClick={closeModal}
      />
      <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 w-80 shadow-2xl transform transition-all duration-300 animate-in slide-in-from-bottom-4">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Actions</h3>
          <p className="text-gray-600">Choose an action to get started</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group">
            <Camera size={32} className="text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-blue-700">Take Photo</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group">
            <Upload size={32} className="text-green-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-green-700">Upload File</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group">
            <Share2 size={32} className="text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-purple-700">Share Link</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition-colors group">
            <Zap size={32} className="text-yellow-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-yellow-700">Quick Edit</span>
          </button>
        </div>
      </div>
    </div>
  );

  const modalComponents = {
    glassmorphism: GlassmorphismModal,
    neumorphism: NeumorphismModal,
    cardstack: CardStackModal,
    upload: AnimatedUploadModal,
    floating: FloatingActionModal
  };

  const ActiveModalComponent = modalComponents[activeModal];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Unique Modal Designs</h1>
          <p className="text-xl text-gray-600">Modern, interactive modal components built with Tailwind CSS</p>
        </div>

          

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Floating Action</h3>
            <p className="text-gray-600 mb-4">Bottom-right positioned modal with quick action buttons and smooth animations.</p>
            <button
              onClick={() => openModal('floating')}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              Preview
            </button>
          </div>
        </div>
      </div>

      {ActiveModalComponent && <ActiveModalComponent />}
    </div>
  );
}