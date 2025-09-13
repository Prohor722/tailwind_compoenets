import React, { useState } from 'react';
import { X, Check, AlertTriangle, Star, Heart, Share2, Download, Settings, User, Bell, Lock } from 'lucide-react';

const ModernModals = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  // Glassmorphism Modal
  const GlassmorphismModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" onClick={closeModal} />
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Glassmorphism Style</h3>
          <p className="text-white/80 mb-6">Beautiful translucent design with backdrop blur effects</p>
          <div className="flex gap-3">
            <button className="flex-1 bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-xl transition-all duration-200">
              Cancel
            </button>
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 rounded-xl transition-all duration-200">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Neumorphism Modal
  const NeumorphismModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-100">
      <div className="absolute inset-0 bg-gray-100/80" onClick={closeModal} />
      <div className="relative bg-gray-100 rounded-3xl p-8 max-w-md w-full shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <X size={16} />
        </button>
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] flex items-center justify-center mx-auto mb-6">
            <Settings className="text-gray-600" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Neumorphism Design</h3>
          <p className="text-gray-600 mb-6">Soft, extruded shapes that appear to emerge from the background</p>
          <div className="flex gap-4">
            <button className="flex-1 bg-gray-100 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-gray-700 font-medium py-3 rounded-xl transition-all duration-200">
              Cancel
            </button>
            <button className="flex-1 bg-blue-500 shadow-[5px_5px_10px_#4285d1,-5px_-5px_10px_#5ca5ff] hover:shadow-[inset_5px_5px_10px_#4285d1,inset_-5px_-5px_10px_#5ca5ff] text-white font-medium py-3 rounded-xl transition-all duration-200">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Slide Up Mobile Modal
  const SlideUpModal = () => (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
      <div className="relative bg-white rounded-t-3xl w-full max-w-md p-6 transform animate-slide-up">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Share2 className="text-blue-600" size={18} />
            </div>
            <span className="font-medium text-gray-800">Share</span>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Download className="text-green-600" size={18} />
            </div>
            <span className="font-medium text-gray-800">Download</span>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Heart className="text-red-600" size={18} />
            </div>
            <span className="font-medium text-gray-800">Add to Favorites</span>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="text-purple-600" size={18} />
            </div>
            <span className="font-medium text-gray-800">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Gradient Border Modal
  const GradientBorderModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative max-w-lg w-full">
        <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl">
          <div className="bg-gray-900 rounded-2xl p-8">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Gradient Border</h3>
              <p className="text-gray-300 mb-6">Eye-catching gradient borders with dark theme design</p>
              <div className="flex gap-3">
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-xl transition-colors">
                  Cancel
                </button>
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl transition-all duration-200">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Notification Modal
  const NotificationModal = () => (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full border transform animate-bounce">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="text-green-600" size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">Success!</h4>
              <p className="text-gray-600 text-sm mb-4">Your changes have been saved successfully.</p>
              <div className="flex gap-2">
                <button 
                  onClick={closeModal}
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Dismiss
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  View Details
                </button>
              </div>
            </div>
            <button 
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl" />
      </div>
    </div>
  );

  // Floating Action Modal
  const FloatingActionModal = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border p-4 w-64 transform origin-bottom-right animate-scale-up">
        <button 
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={16} />
        </button>
        <h4 className="font-semibold text-gray-900 mb-3">Quick Actions</h4>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Bell className="text-blue-500" size={16} />
            <span className="text-sm text-gray-700">Notifications</span>
          </button>
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Lock className="text-orange-500" size={16} />
            <span className="text-sm text-gray-700">Privacy</span>
          </button>
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Settings className="text-gray-500" size={16} />
            <span className="text-sm text-gray-700">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Modern Modal Collection</h1>
        <p className="text-gray-600 text-center mb-12">Click any button to preview different modal styles</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            onClick={() => openModal('glassmorphism')}
            className="bg-white/30 backdrop-blur-md hover:bg-white/40 border border-white/20 rounded-2xl p-6 text-left transition-all duration-200 hover:scale-105"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Star className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Glassmorphism</h3>
            <p className="text-gray-600 text-sm">Translucent design with backdrop blur</p>
          </button>

          <button 
            onClick={() => openModal('neumorphism')}
            className="bg-gray-100 hover:bg-gray-200 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] rounded-2xl p-6 text-left transition-all duration-200"
          >
            <div className="w-12 h-12 bg-gray-100 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] rounded-xl flex items-center justify-center mb-4">
              <Settings className="text-gray-600" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Neumorphism</h3>
            <p className="text-gray-600 text-sm">Soft extruded shapes</p>
          </button>

          <button 
            onClick={() => openModal('slideUp')}
            className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-2xl p-6 text-left transition-all duration-200 hover:scale-105"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Share2 className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Slide Up Mobile</h3>
            <p className="text-gray-600 text-sm">Bottom sheet style modal</p>
          </button>

          <button 
            onClick={() => openModal('gradient')}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-2xl p-[2px] text-left transition-all duration-200 hover:scale-105"
          >
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gradient Border</h3>
              <p className="text-gray-600 text-sm">Vibrant gradient borders</p>
            </div>
          </button>

          <button 
            onClick={() => openModal('notification')}
            className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-300 rounded-2xl p-6 text-left transition-all duration-200 hover:scale-105"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Check className="text-green-600" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Notification</h3>
            <p className="text-gray-600 text-sm">Toast-style notifications</p>
          </button>

          <button 
            onClick={() => openModal('floating')}
            className="bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200 rounded-2xl p-6 text-left transition-all duration-200 hover:scale-105"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
              <User className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Floating Action</h3>
            <p className="text-gray-600 text-sm">Context menu style</p>
          </button>
        </div>
      </div>

      {/* Render Active Modal */}
      {activeModal === 'glassmorphism' && <GlassmorphismModal />}
      {activeModal === 'neumorphism' && <NeumorphismModal />}
      {activeModal === 'slideUp' && <SlideUpModal />}
      {activeModal === 'gradient' && <GradientBorderModal />}
      {activeModal === 'notification' && <NotificationModal />}
      {activeModal === 'floating' && <FloatingActionModal />}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes scale-up {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-scale-up {
          animation: scale-up 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ModernModals;