'use client';
import React, { useRef } from "react";
import { useState, useEffect } from 'react';
import {
  CheckCircle, X, Heart, Star,
  Zap, Users, Bell, Settings, Camera,
  Download, Share2, Moon, Sun, Trash2,
  Edit, Play, Pause, Volume2, Calendar,
  MapPin, Clock, Award, Gift, Lock, Unlock,
  AlertTriangle, Info, Plus, Minus,
  MessageCircle, ThumbsUp, Eye, Sparkles,
  Gamepad2, Target, Trophy, Coffee, Search,
  Filter, ShoppingCart, CreditCard, Truck,
  Package, Palette, Brush, PaintBucket, Type,
  Layout, Grid3x3, Maximize, Minimize,
  RotateCcw, RefreshCw, Battery, Wifi,
  Signal
} from 'lucide-react';


export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
  }>>([]);
  const [particleCount, setParticleCount] = useState(50);
  const [gameScore, setGameScore] = useState(0);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Headphones', price: 299, quantity: 1, image: '🎧' },
    { id: 2, name: 'Wireless Mouse', price: 89, quantity: 2, image: '🖱️' }
  ]);
  const [designTool, setDesignTool] = useState('brush');
  const [currentColor, setCurrentColor] = useState('#3B82F6');
  const canvasRef = useRef(null);


  const notifications = [
    { id: 1, type: 'success', icon: CheckCircle, title: 'Task Completed', message: 'Your file has been uploaded successfully', time: '2m ago' },
    { id: 2, type: 'warning', icon: AlertTriangle, title: 'Storage Almost Full', message: 'You have used 85% of your storage space', time: '5m ago' },
    { id: 3, type: 'info', icon: Info, title: 'New Update Available', message: 'Version 2.1.0 is ready to install', time: '10m ago' }
  ];

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Complete your first task', icon: Target, unlocked: true, rarity: 'common' },
    { id: 2, title: 'Speed Demon', description: 'Complete 10 tasks in under 5 minutes', icon: Zap, unlocked: true, rarity: 'rare' },
    { id: 3, title: 'Perfectionist', description: 'Get 100% accuracy on 5 tasks', icon: Trophy, unlocked: false, rarity: 'legendary' }
  ];
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Alex Designer',
      avatar: '👤',
      time: '2h ago',
      content: 'Just finished this amazing modal design! What do you think?',
      image: '🎨',
      likes: 24,
      comments: 8,
      liked: false
    },
    {
      id: 2,
      user: 'Sarah Dev',
      avatar: '👩‍💻',
      time: '4h ago',
      content: 'New React component library is looking great! Can\'t wait to share it.',
      image: '⚛️',
      likes: 15,
      comments: 3,
      liked: true
    }
  ]);

  const toggleLike = (postId) => {
    setPosts(prev => prev.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const playGame = () => {
    setGameScore(prev => prev + Math.floor(Math.random() * 100) + 50);
  };

  const commands = [
    '$ system init...',
    '> Loading modal interface...',
    '> Authentication: SUCCESS',
    '> Ready for user input'
  ];

  useEffect(() => {
    if (activeModal === 'particles') {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 400,
        y: Math.random() * 300,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        size: Math.random() * 4 + 2
      }));
      setParticles(newParticles);

      const interval = setInterval(() => {
        setParticles(prev => prev.map(p => ({
          ...p,
          x: (p.x + p.vx + 400) % 400,
          y: (p.y + p.vy + 300) % 300
        })));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [activeModal, particleCount]);



  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-wrap py-8 items-center justify-center gap-5">
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
      <div>
        <div className={`fixed inset-0 bg-black bg-opacity-30 
          backdrop-blur-sm flex items-center justify-center 
          p-4 z-50 
          ${activeModal === 'glassmorphism' ? 'flex items-center justify-center' : 'hidden'}
          `}>
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

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Glassmorphism</h3>
          <p className="text-gray-600 text-sm mb-4 Transparent backdrop with blur effects">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <button
            onClick={() => setActiveModal('glassmorphism')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Preview Glassmorphism
          </button>
        </div>

      </div>

      {/* Modal 5  */}
      <div>
        {/* Neumorphism Modal */}
        <div className={`fixed inset-0 bg-gray-300 flex
         items-center justify-center p-4 z-50
         ${activeModal === 'neumorphism' ? 'flex items-center justify-center' : 'hidden'}
         `}>
          <div className="bg-gray-300 rounded-3xl p-8 max-w-md w-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Neumorphism</h3>
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-full shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-700 mb-6">
              A soft UI approach with subtle shadows that create the illusion of elements extruding from or being pressed into the background.
            </p>
            <div className="flex gap-3">
              <button className="bg-gray-300 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-gray-800 px-6 py-3 rounded-2xl transition-all duration-300">
                Confirm
              </button>
              <button onClick={closeModal} className="bg-gray-300 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-gray-800 px-6 py-3 rounded-2xl transition-all duration-300">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Button  */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Neumorphism</h3>
          <p className="text-gray-600 text-sm mb-4 Transparent backdrop with blur effects">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <button
            onClick={() => setActiveModal('neumorphism')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Preview Neumorphism
          </button>
        </div>
      </div>

      {/* Modal 6  */}
      {/* Cyberpunk Modal */}
      <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-90 flex items-center justify-center 
        p-4 z-50
        ${activeModal === "cyberpunk" ? 'flex items-center justify-center' : 'hidden'}
        `}>
          <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-8 max-w-md w-full shadow-2xl shadow-cyan-400/25 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-cyan-400 font-mono tracking-wider">CYBERPUNK_MODAL</h3>
                <button onClick={closeModal} className="text-cyan-400 hover:text-purple-400 transition-colors border border-cyan-400 hover:border-purple-400 p-1 rounded">
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-300 mb-6 font-mono text-sm">
                [SYSTEM_MSG]: Futuristic interface design with neon accents and grid patterns. Access level: AUTHENTICATED.
              </p>
              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black px-6 py-3 rounded font-bold transition-all duration-300 transform hover:scale-105">
                  EXECUTE
                </button>
                <button onClick={closeModal} className="border border-purple-400 hover:bg-purple-400/20 text-purple-400 px-6 py-3 rounded transition-all duration-300">
                  ABORT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Cyberpunk</h3>
          <p className="text-gray-600 text-sm mb-4 Transparent backdrop with blur effects">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <button
            onClick={() => setActiveModal('cyberpunk')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Preview Cyberpunk
          </button>
        </div>


      </div>

      {/* Modal 7  */}
      {/* Card Stack Modal */}
      <div>

        <div className={`fixed inset-0 bg-black bg-opacity-50 
        flex items-center justify-center p-4 z-50
        ${activeModal === "cardstack" ? 'flex items-center justify-center' : 'hidden'}
        `}>
          <div className="relative">
            {/* Background cards for stack effect */}
            <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-30"></div>
            <div className="absolute inset-0 bg-white rounded-2xl transform rotate-1 translate-x-1 translate-y-1 opacity-60"></div>

            {/* Main card */}
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Card Stack</h3>
                  <div className="flex items-center gap-2 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl p-4 text-white mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="text-white" size={20} />
                    <span className="font-semibold">Featured Content</span>
                  </div>
                  <p className="text-sm opacity-90">This modal creates depth with layered card shadows</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Users size={16} className="text-blue-500" />
                    <span className="text-sm">Stack effect with rotation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Zap size={16} className="text-yellow-500" />
                    <span className="text-sm">Multiple shadow layers</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl transition-all duration-300 flex-1 font-medium">
                  Get Started
                </button>
                <button onClick={closeModal} className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300">
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Card Stack</h3>
          <p className="text-gray-600 text-sm mb-4 Transparent backdrop with blur effects">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <button
            onClick={() => setActiveModal('cardstack')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Preview Card Stack
          </button>
        </div>


      </div>

      {/* Modal 8  */}
      {/* Sliding Panel Modal */}
      <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-50 z-50
        ${activeModal === "sliding" ? 'flex items-center justify-center' : 'hidden'}
        `}>
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out animate-in slide-in-from-right">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Settings Panel</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Bell size={18} className="text-blue-500" />
                    Notifications
                  </h4>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Email notifications</span>
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Push notifications</span>
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Settings size={18} className="text-green-500" />
                    Preferences
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Theme</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                        <option>Light</option>
                        <option>Dark</option>
                        <option>Auto</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Language</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex-1">
                  Save Changes
                </button>
                <button onClick={closeModal} className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Sliding Panel</h3>
          <p className="text-gray-600 text-sm mb-4 Transparent backdrop with blur effects">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <button
            onClick={() => setActiveModal('sliding')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Preview Sliding Panel
          </button>
        </div>


      </div>

      {/* Modal 9  */}
      {/* Media Modal */}
      <div>

        <div className={`fixed inset-0 bg-black 
      bg-opacity-90 flex items-center justify-center 
      p-4 z-50
      ${activeModal === "media" ? 'flex items-center justify-center' : 'hidden'}
        `}>
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop"
                alt="Sample"
                className="w-full h-64 object-cover"
              />
              <button onClick={closeModal} className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Beautiful Landscape</h3>
                <p className="text-sm opacity-90">Captured in the mountains</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Camera size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">John Photographer</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Heart size={18} className="text-gray-400 hover:text-red-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Share2 size={18} className="text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Download size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                A stunning view from the mountain peak during golden hour. The interplay of light and shadow creates a magical atmosphere.
              </p>

              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex-1">
                  View Full Size
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg transition-colors">
                  Save to Album
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Media Modal</h3>
          <p className="text-gray-600 text-sm mb-4 Transparent backdrop with blur effects">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <button
            onClick={() => setActiveModal('media')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Preview Media Modal
          </button>
        </div>

      </div>

      {/* Modal 10  */}
      <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-80 p-4 z-50
        ${activeModal === "music" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-700">
            <button onClick={closeModal} className="float-right text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>

            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className={`w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }}>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-20"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">Midnight Dreams</h3>
              <p className="text-gray-400 mb-6">The Synthwave Collective</p>

              <div className="mb-6">
                <div className="bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1:23</span>
                  <span>3:45</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Minus size={20} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white ml-1" />}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Plus size={20} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Music Modal</h3>
          <button
            onClick={() => setActiveModal('music')}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Music Modal
          </button>
        </div>

      </div>

      {/* Modal 11  */}
      <div>
        <div className={`fixed inset-0 bg-gradient-to-br 
        from-indigo-900/50 to-purple-900/50 backdrop-blur-sm 
        p-4 z-50
        ${activeModal === "floating" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform hover:rotate-1 transition-transform duration-500 hover:scale-105"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)'
              }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <button onClick={closeModal} className="text-white">
                  <X size={16} />
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <Gift className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">3D Floating</h3>
                <p className="text-gray-600 mb-6">
                  This modal floats in 3D space with perspective transforms and hover effects that create depth.
                </p>

                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex-1">
                    Accept
                  </button>
                  <button onClick={closeModal} className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50">
                    Decline
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-6 -right-6 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -left-12 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('floating')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          3D Floating Modal
        </button>
      </div>

      {/* Modal 12  */}
      <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-95 p-4 z-50
        ${activeModal === "terminal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-black border border-green-500 rounded-lg max-w-2xl w-full shadow-2xl shadow-green-500/25">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between rounded-t-lg border-b border-green-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-400 font-mono text-sm">terminal@modal:~$</span>
              <button onClick={closeModal} className="text-green-400 hover:text-green-300">
                <X size={16} />
              </button>
            </div>

            <div className="p-6 font-mono text-green-400 bg-black min-h-80">
              {commands.map((cmd, i) => (
                <div key={i} className="mb-2 flex items-center">
                  <span className="text-green-500 mr-2">{'>'}</span>
                  <span>{cmd}</span>
                </div>
              ))}

              <div className="mt-6 border-t border-green-500/30 pt-4">
                <p className="text-green-300 mb-4">SYSTEM INFORMATION:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-green-500">Status:</span> ACTIVE
                  </div>
                  <div>
                    <span className="text-green-500">Uptime:</span> 99.9%
                  </div>
                  <div>
                    <span className="text-green-500">Memory:</span> 512MB
                  </div>
                  <div>
                    <span className="text-green-500">CPU:</span> 0.8%
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded font-bold transition-colors">
                  [EXECUTE]
                </button>
                <button onClick={closeModal} className="border border-green-500 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded transition-colors">
                  [EXIT]
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('terminal')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Terminal Modal
        </button>

      </div>

      {/* Modal 13  */}
      <div>

        <div className={`fixed inset-0 bg-black 
      bg-opacity-30 p-6 z-50
      ${activeModal === "notification" ? "flex items-center justify-center" : "hidden"}
      `}>
          <div className="space-y-4 w-80">
            {notifications.map((notif, index) => (
              <div
                key={notif.id}
                className={`bg-white rounded-xl p-4 shadow-lg border-l-4 transform transition-all duration-500 hover:scale-105 ${notif.type === 'success' ? 'border-green-500' :
                  notif.type === 'warning' ? 'border-yellow-500' : 'border-blue-500'
                  }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${notif.type === 'success' ? 'bg-green-100 text-green-600' :
                    notif.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                    <notif.icon size={18} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-800 text-sm">{notif.title}</h4>
                      <span className="text-xs text-gray-500">{notif.time}</span>
                    </div>
                    <p className="text-gray-600 text-xs">{notif.message}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center">
              <button
                onClick={closeModal}
                className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg shadow-md transition-colors text-sm"
              >
                Close All
              </button>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('notification')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Notification Stack Modal
        </button>

      </div>

      {/* Modal 14  */}
      <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-50 p-4 z-50
        ${activeModal === "event_card" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-25 rounded-full p-2">
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Design Conference 2024</h3>
                <p className="text-sm opacity-90">The future of digital design</p>
              </div>
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 backdrop-blur-sm rounded-xl px-3 py-1">
                <span className="text-white text-xs font-semibold">PREMIUM EVENT</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span className="text-sm">March 15-16, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">San Francisco</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-gray-500" />
                <span className="text-sm text-gray-600">9:00 AM - 6:00 PM PST</span>
              </div>

              <p className="text-gray-600 mb-6 text-sm">
                Join industry leaders for two days of inspiring talks, workshops, and networking opportunities focused on the latest trends in digital design and user experience.
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">245 attending</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">4.9 rating</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl transition-all duration-300 flex-1 font-medium">
                  Register Now - $299
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 p-3 rounded-xl transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Button  */}
        <button
          onClick={() => setActiveModal('event_card')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Event Card Modal
        </button>

      </div>

      {/* Modal 15  */}
      <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-50 p-4 z-50
        ${activeModal === "dark_mode_toggle" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className={`rounded-2xl p-8 max-w-md w-full shadow-2xl transition-all duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
            }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Theme Preferences</h3>
              <button onClick={closeModal} className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors`}>
                <X size={24} />
              </button>
            </div>

            <div className="text-center mb-8">
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                }`}>
                {isDark ? <Moon size={32} /> : <Sun size={32} />}
              </div>

              <h4 className="text-lg font-semibold mb-2">
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {isDark ? 'Easy on the eyes, perfect for night time' : 'Clean and bright, great for daytime'}
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${isDark ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
              >
                <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${isDark ? 'translate-x-9' : 'translate-x-1'
                  }`} />
              </button>
            </div>

            <div className="flex gap-3">
              <button
                className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${isDark
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
              >
                Apply Theme
              </button>
              <button
                onClick={closeModal}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${isDark
                  ? 'border border-gray-600 hover:bg-gray-800 text-gray-300'
                  : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('dark_mode_toggle')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Dark Mode Toggle Modal
        </button>

      </div>

      {/* Modal 16  */}
      <div>

        <div className={`fixed inset-0 bg-gradient-to-br 
        from-red-900/90 to-orange-900/90 p-4 z-50
        ${activeModal === "security_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>

            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>

            <div className="text-center">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${isLocked ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                }`}>
                {isLocked ? <Lock size={32} /> : <Unlock size={32} />}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {isLocked ? 'Account Locked' : 'Access Granted'}
              </h3>

              <p className="text-gray-600 mb-6">
                {isLocked
                  ? 'Your account has been temporarily locked due to suspicious activity. Please verify your identity.'
                  : 'Welcome back! Your account has been successfully unlocked.'
                }
              </p>

              {isLocked && (
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    placeholder="2FA Code"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setIsLocked(!isLocked)}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${isLocked
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                >
                  {isLocked ? 'Verify & Unlock' : 'Continue'}
                </button>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('security_modal')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Security Modal
        </button>

      </div>

      {/* Modal 17  */}
      <div>

        <div className={`fixed inset-0 bg-black bg-opacity-90 
        p-4 z-50
        ${activeModal === "particle_count" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-purple-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Particle System</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="relative bg-black rounded-xl overflow-hidden mb-6" style={{ height: '300px' }}>
              {particles.map(particle => (
                <div
                  key={particle.id}
                  className="absolute rounded-full opacity-80"
                  style={{
                    left: `${particle.x}px`,
                    top: `${particle.y}px`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
                  }}
                />
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-white font-medium">Particle Count:</label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={particleCount}
                  onChange={(e) => setParticleCount(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-purple-400 font-mono">{particleCount}</span>
              </div>

              <div className="flex gap-3">
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl transition-colors flex-1">
                  Save Animation
                </button>
                <button onClick={closeModal} className="border border-purple-500 hover:bg-purple-500/20 text-purple-400 px-6 py-3 rounded-xl transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('particle_count')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Particle Count
        </button>

      </div>

      {/* Modal 18  */}
      <div>

        <div className={`fixed inset-0 bg-gradient-to-br 
        from-indigo-900/90 to-purple-900/90 p-4 z-50
        ${activeModal === "game_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-yellow-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10"></div>

            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10">
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                  <Gamepad2 size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Achievement Center</h3>
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <Trophy size={16} />
                  <span className="font-mono text-lg">{gameScore} XP</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {achievements.map(achievement => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-xl border transition-all duration-300 ${achievement.unlocked
                      ? `bg-gradient-to-r ${achievement.rarity === 'legendary' ? 'from-yellow-500/20 to-orange-500/20 border-yellow-500/50' :
                        achievement.rarity === 'rare' ? 'from-purple-500/20 to-blue-500/20 border-purple-500/50' :
                          'from-gray-600/20 to-gray-500/20 border-gray-500/50'
                      }`
                      : 'bg-gray-800/50 border-gray-700 opacity-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${achievement.unlocked ? 'bg-white/20' : 'bg-gray-700'
                        }`}>
                        <achievement.icon size={18} className={achievement.unlocked ? 'text-white' : 'text-gray-500'} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${achievement.unlocked ? 'text-white' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-xs ${achievement.unlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.unlocked && (
                        <CheckCircle size={16} className="text-green-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={playGame}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-6 py-3 rounded-xl transition-all duration-300 flex-1 font-bold transform hover:scale-105"
                >
                  Play Mini Game (+XP)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('game_modal')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Game Modal
        </button>

      </div>

      {/* Modal 19  */}
      <div>

        <div className={`fixed inset-0 bg-black bg-opacity-80 
        p-4 z-50
        ${activeModal === "social_media_feed_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-2xl max-w-md w-full h-96 shadow-2xl flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">Social Feed</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {posts.map(post => (
                <div key={post.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                      {post.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{post.user}</p>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm">{post.content}</p>

                  <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-4xl mb-3">
                    {post.image}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${post.liked ? 'text-red-500 bg-red-50' : 'hover:bg-gray-100'
                        }`}
                    >
                      <Heart size={16} className={post.liked ? 'fill-current' : ''} />
                      <span>{post.likes}</span>
                    </button>

                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <MessageCircle size={16} />
                      <span>{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Share2 size={16} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setActiveModal('social_media_feed_modal')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Social Media Feed Modal
        </button>

      </div>



    </div>
  );
};

