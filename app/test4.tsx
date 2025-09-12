import React, { useState } from 'react';
import { X, Star, Heart, MessageCircle, Share2, ChevronRight, Camera, Upload, Zap } from 'lucide-react';

export default function UniqueModalDesigns() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);


  // Neumorphism Modal
  const NeumorphismModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-200"
        onClick={closeModal}
      />
      <div className="relative bg-gray-200 rounded-3xl p-8 max-w-md w-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] hover:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all"
        >
          <X size={20} className="text-gray-600" />
        </button>
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]">
            <Heart className="text-red-500" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Neumorphism Style</h2>
          <p className="text-gray-600 mb-6">Soft, extruded shapes that appear to emerge from the background with subtle shadows and highlights.</p>
          <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );

  // Card Stack Modal
  const CardStackModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={closeModal}
      />
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
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Card Stack Effect</h2>
            <p className="text-gray-600">Multiple layered cards create depth and visual hierarchy in your interface.</p>
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
    </div>
  );

  // Animated Upload Modal
  const AnimatedUploadModal = () => {
    const [isDragOver, setIsDragOver] = useState(false);
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"
          onClick={closeModal}
        />
        <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Upload Files</h2>
            <p className="text-gray-600">Drag and drop your files or click to browse</p>
          </div>
          
          <div 
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
              isDragOver 
                ? 'border-indigo-500 bg-indigo-50 scale-105' 
                : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
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
            <div className={`transition-all duration-300 ${isDragOver ? 'scale-110' : ''}`}>
              <Upload size={48} className={`mx-auto mb-4 ${isDragOver ? 'text-indigo-500' : 'text-gray-400'}`} />
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {isDragOver ? 'Drop files here!' : 'Choose files to upload'}
              </p>
              <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  };

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mb-4 flex items-center justify-center">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Glassmorphism</h3>
            <p className="text-gray-600 mb-4">Translucent design with backdrop blur effects for a modern, glass-like appearance.</p>
            <button
              onClick={() => openModal('glassmorphism')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Preview
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4 flex items-center justify-center shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
              <Heart className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Neumorphism</h3>
            <p className="text-gray-600 mb-4">Soft UI design with subtle shadows that create an extruded, tactile feeling.</p>
            <button
              onClick={() => openModal('neumorphism')}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Preview
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-4 flex items-center justify-center">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Card Stack</h3>
            <p className="text-gray-600 mb-4">Layered cards that create depth and visual hierarchy with stacking effects.</p>
            <button
              onClick={() => openModal('cardstack')}
              className="w-full bg-gradient-to-br from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
            >
              Preview
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
              <Upload className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Animated Upload</h3>
            <p className="text-gray-600 mb-4">Interactive file upload modal with drag & drop animations and hover effects.</p>
            <button
              onClick={() => openModal('upload')}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all"
            >
              Preview
            </button>
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