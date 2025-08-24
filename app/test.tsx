import React, { useState, useEffect, useRef } from 'react';
import { X, Heart, Star, Zap, Users, Bell, Settings, Camera, Download, Share2, Moon, Sun, Trash2, Edit, Play, Pause, Volume2, Calendar, MapPin, Clock, Award, Gift, Lock, Unlock, CheckCircle, AlertTriangle, Info, Plus, Minus, MessageCircle, ThumbsUp, Eye, Sparkles, Gamepad2, Target, Trophy, Coffee, Search, Filter, ShoppingCart, CreditCard, Truck, Package, Palette, Brush, PaintBucket, Type, Layout, Grid3x3, Maximize, Minimize, RotateCcw, RefreshCw, Battery, Wifi, Signal } from 'lucide-react';

export default function EvenMoreUniqueModals() {
  const [activeModal, setActiveModal] = useState(null);
  const [particleCount, setParticleCount] = useState(50);
  const [gameScore, setGameScore] = useState(0);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Headphones', price: 299, quantity: 1, image: '🎧' },
    { id: 2, name: 'Wireless Mouse', price: 89, quantity: 2, image: '🖱️' }
  ]);
  const [designTool, setDesignTool] = useState('brush');
  const [currentColor, setCurrentColor] = useState('#3B82F6');
  const canvasRef = useRef(null);

  const closeModal = () => setActiveModal(null);

  // Particle System Modal
  const ParticleSystemModal = () => {
    const [particles, setParticles] = useState([]);

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

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
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
    );
  };

  // Gaming Achievement Modal
  const GamingAchievementModal = () => {
    const achievements = [
      { id: 1, title: 'First Steps', description: 'Complete your first task', icon: Target, unlocked: true, rarity: 'common' },
      { id: 2, title: 'Speed Demon', description: 'Complete 10 tasks in under 5 minutes', icon: Zap, unlocked: true, rarity: 'rare' },
      { id: 3, title: 'Perfectionist', description: 'Get 100% accuracy on 5 tasks', icon: Trophy, unlocked: false, rarity: 'legendary' }
    ];

    const playGame = () => {
      setGameScore(prev => prev + Math.floor(Math.random() * 100) + 50);
    };

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90 flex items-center justify-center p-4 z-50">
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
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    achievement.unlocked
                      ? `bg-gradient-to-r ${
                          achievement.rarity === 'legendary' ? 'from-yellow-500/20 to-orange-500/20 border-yellow-500/50' :
                          achievement.rarity === 'rare' ? 'from-purple-500/20 to-blue-500/20 border-purple-500/50' :
                          'from-gray-600/20 to-gray-500/20 border-gray-500/50'
                        }`
                      : 'bg-gray-800/50 border-gray-700 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      achievement.unlocked ? 'bg-white/20' : 'bg-gray-700'
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
    );
  };

  // Social Media Feed Modal
  const SocialFeedModal = () => {
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

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
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
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      post.liked ? 'text-red-500 bg-red-50' : 'hover:bg-gray-100'
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
    );
  };

  // E-commerce Checkout Modal
  const CheckoutModal = () => {
    const [step, setStep] = useState(1);
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const updateQuantity = (id, newQuantity) => {
      setCartItems(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      ).filter(item => item.quantity > 0));
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
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
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= i ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
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
    );
  };

  // Creative Design Tool Modal
  const DesignToolModal = () => {
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

    const handleCanvasMouseDown = (e) => {
      setIsDrawing(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ctx.beginPath();
      ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
      ctx.fillStyle = currentColor;
      ctx.fill();
    };

    const handleCanvasMouseMove = (e) => {
      if (!isDrawing) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ctx.beginPath();
      ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
      ctx.fillStyle = currentColor;
      ctx.fill();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
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
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  designTool === tool.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
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
                  className={`w-5 h-5 rounded border-2 transition-all ${
                    currentColor === color ? 'border-white scale-110' : 'border-gray-600'
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
    );
  };

  // Weather Dashboard Modal
  const WeatherDashboardModal = () => {
    const weatherData = {
      current: { temp: 72, condition: 'Sunny', humidity: 45, wind: 8 },
      forecast: [
        { day: 'Today', high: 75, low: 65, condition: '☀️' },
        { day: 'Tomorrow', high: 73, low: 63, condition: '🌤️' },
        { day: 'Wednesday', high: 68, low: 58, condition: '🌧️' }
      ]
    };

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Weather Dashboard</h3>
            <button onClick={closeModal} className="text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">☀️</div>
            <div className="text-5xl font-bold text-white mb-2">{weatherData.current.temp}°</div>
            <div className="text-white/80 text-lg">{weatherData.current.condition}</div>
            <div className="text-white/60 text-sm">San Francisco, CA</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <div className="text-white/60 text-sm mb-1">Humidity</div>
              <div className="text-white font-bold">{weatherData.current.humidity}%</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <div className="text-white/60 text-sm mb-1">Wind</div>
              <div className="text-white font-bold">{weatherData.current.wind} mph</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <div className="text-white/60 text-sm mb-1">UV Index</div>
              <div className="text-white font-bold">6</div>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <h4 className="text-white font-semibold">3-Day Forecast</h4>
            {weatherData.forecast.map((day, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{day.condition}</span>
                  <span className="text-white font-medium">{day.day}</span>
                </div>
                <div className="text-white">
                  <span className="font-bold">{day.high}°</span>
                  <span className="text-white/60 ml-2">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={closeModal}
            className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            View Full Forecast
          </button>
        </div>
      </div>
    );
  };

  // Cryptocurrency Tracker Modal
  const CryptoTrackerModal = () => {
    const cryptos = [
      { symbol: 'BTC', name: 'Bitcoin', price: 43250, change: 2.5, icon: '₿' },
      { symbol: 'ETH', name: 'Ethereum', price: 2650, change: -1.2, icon: 'Ξ' },
      { symbol: 'ADA', name: 'Cardano', price: 0.48, change: 5.8, icon: '₳' }
    ];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-yellow-500/30">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Crypto Tracker</h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-4 mb-6">
            {cryptos.map(crypto => (
              <div key={crypto.symbol} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {crypto.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold">{crypto.name}</div>
                      <div className="text-gray-400 text-sm">{crypto.symbol}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">${crypto.price.toLocaleString()}</div>
                    <div className={`text-sm flex items-center gap-1 ${
                      crypto.change > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {crypto.change > 0 ? '↗' : '↘'}
                      {Math.abs(crypto.change)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4 mb-6">
            <div className="text-white text-sm mb-1">Portfolio Value</div>
            <div className="text-white text-2xl font-bold">$12,847.52</div>
            <div className="text-green-200 text-sm">+$247.83 (1.96%) today</div>
          </div>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl transition-colors">
              Buy Crypto
            </button>
            <button className="flex-1 bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl transition-colors">
              Sell
            </button>
          </div>
        </div>
      </div>
    );
  };

  // File Manager Modal
  const FileManagerModal = () => {
    const [currentPath, setCurrentPath] = useState('/Documents');
    const [viewMode, setViewMode] = useState('list');
    
    const files = [
      { name: 'Project Proposal.pdf', type: 'pdf', size: '2.4 MB', modified: '2 hours ago', icon: '📄' },
      { name: 'Design Assets', type: 'folder', size: '12 items', modified: '1 day ago', icon: '📁' },
      { name: 'Screenshot.png', type: 'image', size: '856 KB', modified: '3 hours ago', icon: '🖼️' },
      { name: 'Budget.xlsx', type: 'spreadsheet', size: '445 KB', modified: '1 week ago', icon: '📊' }
    ];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full h-[500px] shadow-2xl flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-gray-800">File Manager</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📁</span>
                <span>{currentPath}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                {viewMode === 'list' ? <Grid3x3 size={18} /> : <Layout size={18} />}
              </button>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 p-2">
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className={viewMode === 'grid' ? 'grid grid-cols-4 gap-4' : 'space-y-2'}>
              {files.map((file, index) => (
                <div
                  key={index}
                  className={`${
                    viewMode === 'grid'
                      ? 'p-4 border border-gray-200 rounded-lg hover:shadow-md text-center'
                      : 'flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg'
                  } transition-all cursor-pointer`}
                >
                  <div className={`${viewMode === 'grid' ? 'text-4xl mb-2' : 'text-2xl'}`}>
                    {file.icon}
                  </div>
                  
                  <div className={`${viewMode === 'grid' ? '' : 'flex-1'}`}>
                    <div className={`font-medium text-gray-800 ${viewMode === 'grid' ? 'text-sm truncate' : ''}`}>
                      {file.name}
                    </div>
                    {viewMode === 'list' && (
                      <>
                        <div className="text-sm text-gray-600">{file.size}</div>
                      </>
                    )}
                    {viewMode === 'grid' && (
                      <div className="text-xs text-gray-500 mt-1">{file.size}</div>
                    )}
                  </div>
                  
                  {viewMode === 'list' && (
                    <div className="text-sm text-gray-500">{file.modified}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {files.length} items
            </div>
            
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors">
                <Plus size={16} />
                New Folder
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                <Upload size={16} />
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const modals = [
    { id: 'particles', name: 'Particle System', component: ParticleSystemModal, description: 'Interactive particle animation with real-time controls' },
    { id: 'gaming', name: 'Gaming Achievement', component: GamingAchievementModal, description: 'Gamified interface with XP and unlockable achievements' },
    { id: 'social', name: 'Social Media Feed', component: SocialFeedModal, description: 'Interactive social media feed with likes and comments' },
    { id: 'checkout', name: 'E-commerce Checkout', component: CheckoutModal, description: 'Multi-step checkout process with cart management' },
    { id: 'design', name: 'Design Tool', component: DesignToolModal, description: 'Creative drawing canvas with tools and color palette' },
    { id: 'weather', name: 'Weather Dashboard', component: WeatherDashboardModal, description: 'Glassmorphic weather interface with forecasts' },
    { id: 'crypto', name: 'Crypto Tracker', component: CryptoTrackerModal, description: 'Cryptocurrency prices with portfolio tracking' },
    { id: 'files', name: 'File Manager', component: FileManagerModal, description: 'File browser with grid and list view modes' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-cyan-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Premium Modal Collection
          </h1>
          <p className="text-2xl text-gray-700 mb-4">Advanced interactive modals for modern web applications</p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-purple-500" />
              <span>Interactive Elements</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-yellow-500" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-red-500" />
              <span>Modern Design</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modals.map((modal) => (
            <div key={modal.id} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    modal.id === 'particles' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                    modal.id === 'gaming' ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                    modal.id === 'social' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                    modal.id === 'checkout' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                    modal.id === 'design' ? 'bg-gradient-to-br from-pink-500 to-red-500' :
                    modal.id === 'weather' ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                    modal.id === 'crypto' ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                    'bg-gradient-to-br from-gray-600 to-gray-800'
                  }`}>
                    {modal.id === 'particles' && <Sparkles className="text-white" size={24} />}
                    {modal.id === 'gaming' && <Gamepad2 className="text-white" size={24} />}
                    {modal.id === 'social' && <MessageCircle className="text-white" size={24} />}
                    {modal.id === 'checkout' && <ShoppingCart className="text-white" size={24} />}
                    {modal.id === 'design' && <Palette className="text-white" size={24} />}
                    {modal.id === 'weather' && <Sun className="text-white" size={24} />}
                    {modal.id === 'crypto' && <TrendingUp className="text-white" size={24} />}
                    {modal.id === 'files' && <Folder className="text-white" size={24} />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{modal.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {modal.description}
                  </p>
                </div>
                
                <button
                  onClick={() => setActiveModal(modal.id)}
                  className={`w-full py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 font-semibold group-hover:shadow-lg text-white ${
                    modal.id === 'particles' ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' :
                    modal.id === 'gaming' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' :
                    modal.id === 'social' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' :
                    modal.id === 'checkout' ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' :
                    modal.id === 'design' ? 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600' :
                    modal.id === 'weather' ? 'bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600' :
                    modal.id === 'crypto' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600' :
                    'bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900'
                  }`}
                >
                  Explore {modal.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-2xl inline-block max-w-4xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Advanced Modal Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block">Real-time Interactions</span>
                  <span className="text-sm text-gray-600">Live updates and dynamic content</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Gamepad2 size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block">Gamification</span>
                  <span className="text-sm text-gray-600">Achievement systems and scoring</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Palette size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block">Creative Tools</span>
                  <span className="text-sm text-gray-600">Drawing and design capabilities</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Trophy size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block">Data Visualization</span>
                  <span className="text-sm text-gray-600">Charts, graphs, and analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Render active modal */}
        {activeModal && modals.find(m => m.id === activeModal)?.component()}
      </div>
    </div>
  );
}