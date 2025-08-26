'use client';
import React, { useRef } from "react";
import { useState, useEffect } from 'react';
import {
  CheckCircle, X, Heart,
  Zap, Users,
  Download, Share2, Moon, Sun,
  Calendar, MapPin, Clock, Award, Gift, Lock, Unlock,
  AlertTriangle, Info, Plus, Minus,
  MessageCircle, Gamepad2, Target, Trophy, Truck,
  Brush, PaintBucket, Type,
  Grid3x3, RefreshCw,
} from 'lucide-react';
import SimpleModal from "./components/SimpleModal";
import GlassmorphismModal from "./components/GlassmorphismModal";
import NeumorphismModal from "./components/NeumorphismModal";
import CyberpunkModal from "./components/CyberpunkModal";
import CardStackModal from "./components/CardStackModal";
import SlidingPanelModal from "./components/SlidingPanelModal";
import MediaModal from "./components/MediaModal";
import MusicModal from "./components/MusicModal";
import FloatingModal from "./components/3DFloatingModal";
import TerminalModal from "./components/TerminalModal";
import NotificationStackModal from "./components/NotificationStackModal";
import EventCardModal from "./components/EventCardModal";
import DarkModeToggleModal from "./components/DarkModeToggleModal";
import SecurityModal from "./components/SecurityModal";
import ParticalCountModal from "./components/ParticalCountModal";
import GameModal from "./GameModal";
import SocialMediaFeedModal from "./components/SocialMediaFeedModal";


export default function ModalPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const closeModal = () => setActiveModal(null);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Headphones', price: 299, quantity: 1, image: '🎧' },
    { id: 2, name: 'Wireless Mouse', price: 89, quantity: 2, image: '🖱️' }
  ]);
  const [designTool, setDesignTool] = useState('brush');
  const [currentColor, setCurrentColor] = useState('#3B82F6');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [step, setStep] = useState(1);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0));
  };

  const [brushSize, setBrushSize] = useState(10);
  const [isDrawing, setIsDrawing] = useState(false);

  const tools = [
    { id: 'brush', icon: Brush, name: 'Brush' },
    { id: 'paint', icon: PaintBucket, name: 'Fill' },
    { id: 'text', icon: Type, name: 'Text' },
    { id: 'shapes', icon: Grid3x3, name: 'Shapes' }
  ];

  const colors = [
    '#EF4444', '#F97316', '#EAB308', '#22C55E',
    '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'
  ];

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
    ctx.fillStyle = currentColor;
    ctx.fill();
  };

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
    ctx.fillStyle = currentColor;
    ctx.fill();
  };


  return (
    <div className="flex flex-wrap py-8 items-center justify-center gap-5">
      {/* Modal 1  */}
      <SimpleModal />

      {/* Modal 4  */}
      <GlassmorphismModal />

      {/* Modal 5  */}
      <NeumorphismModal />
      

      {/* Modal 6  */}
      <CyberpunkModal />

      {/* Modal 7  */}
      <CardStackModal />

      {/* Modal 8  */}
      <SlidingPanelModal />

      {/* Modal 9  */}
      <MediaModal />

      {/* Modal 10  */}
      <MusicModal />

      {/* Modal 11  */}
      <FloatingModal />

      {/* Modal 12  */}
      <TerminalModal />

      {/* Modal 13  */}
      <NotificationStackModal />

      {/* Modal 14  */}
      <EventCardModal />

      {/* Modal 15  */}
      <DarkModeToggleModal />

      {/* Modal 16  */}
      <SecurityModal />

      {/* Modal 17  */}
      <ParticalCountModal />

      {/* Modal 18  */}
      <GameModal />

      {/* Modal 19  */}
      <SocialMediaFeedModal />

      {/* Modal 20  */}
      <div>

        <div className={`fixed inset-0 bg-black bg-opacity-50 
        p-4 z-50
        ${activeModal === "ecommerce_checkout_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Checkout</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center mt-4 space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= i ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                      {step > i ? <CheckCircle size={16} /> : i}
                    </div>
                    {i < 3 && <div className={`w-8 h-1 ${step > i ? 'bg-green-500' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 overflow-y-auto" style={{ maxHeight: '400px' }}>
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Review Your Order</h4>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-800">{item.name}</h5>
                        <p className="text-gray-600 text-sm">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total: ${total}</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Shipping Information</h4>
                  <div className="space-y-3">
                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="City" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="text" placeholder="ZIP Code" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Truck size={20} className="text-blue-500" />
                      <span className="font-medium">Standard Delivery</span>
                    </div>
                    <p className="text-gray-600 text-sm">5-7 business days - Free</p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Payment Method</h4>
                  <div className="space-y-3">
                    <input type="text" placeholder="Card Number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="MM/YY" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="text" placeholder="CVC" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <Lock size={16} />
                      <span className="text-sm font-medium">Secure Payment</span>
                    </div>
                    <p className="text-green-600 text-xs mt-1">Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-xl transition-colors"
                >
                  Back
                </button>
              )}
              <button
                onClick={() => step < 3 ? setStep(step + 1) : closeModal()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition-colors font-medium"
              >
                {step === 3 ? `Pay $${total}` : 'Continue'}
              </button>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('ecommerce_checkout_modal')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          E-commerce Checkout Modal
        </button>


      </div>

      {/* Modal 21  */}
      <div>
        <div className={`fixed inset-0 bg-black bg-opacity-80 
        p-4 z-50
        ${activeModal === "creative_design_tool_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-2xl max-w-4xl w-full h-[600px] shadow-2xl flex">
            {/* Toolbar */}
            <div className="w-20 bg-gray-900 rounded-l-2xl p-4 flex flex-col items-center gap-4">
              <button onClick={closeModal} className="text-gray-400 hover:text-white mb-4">
                <X size={20} />
              </button>

              {tools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => setDesignTool(tool.id)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${designTool === tool.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                >
                  <tool.icon size={20} />
                </button>
              ))}

              <div className="border-t border-gray-700 w-full my-2"></div>

              <div className="grid grid-cols-2 gap-1">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setCurrentColor(color)}
                    className={`w-5 h-5 rounded border-2 transition-all ${currentColor === color ? 'border-white scale-110' : 'border-gray-600'
                      }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="mt-4">
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-12 transform -rotate-90"
                />
              </div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Creative Studio</h3>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors">
                    <RefreshCw size={16} />
                    Clear
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                    <Download size={16} />
                    Export
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden relative">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={400}
                  className="w-full h-full cursor-crosshair"
                  onMouseDown={handleCanvasMouseDown}
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={() => setIsDrawing(false)}
                  onMouseLeave={() => setIsDrawing(false)}
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <span>Tool: <strong>{tools.find(t => t.id === designTool)?.name}</strong></span>
                  <span>Size: <strong>{brushSize}px</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border" style={{ backgroundColor: currentColor }}></div>
                  <span>{currentColor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Button  */}
        <button
          onClick={() => setActiveModal('creative_design_tool_modal')}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Creative Design Tool Modal
        </button>
        
      </div>


    </div>
  );
};

