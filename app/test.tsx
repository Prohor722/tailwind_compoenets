// import React, { useState, useEffect, useRef } from 'react';
// import { X, Heart, Star, Zap, Users, Bell, Settings, Camera, Download, Share2, Moon, Sun, Trash2, Edit, Play, Pause, Volume2, Calendar, MapPin, Clock, Award, Gift, Lock, Unlock, CheckCircle, AlertTriangle, Info, Plus, Minus, MessageCircle, ThumbsUp, Eye, Sparkles, Gamepad2, Target, Trophy, Coffee, Search, Filter, ShoppingCart, CreditCard, Truck, Package, Palette, Brush, PaintBucket, Type, Layout, Grid3x3, Maximize, Minimize, RotateCcw, RefreshCw, Battery, Wifi, Signal } from 'lucide-react';

// export default function EvenMoreUniqueModals() {
//   const [activeModal, setActiveModal] = useState(null);
//   const [particleCount, setParticleCount] = useState(50);
//   const [gameScore, setGameScore] = useState(0);
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Premium Headphones', price: 299, quantity: 1, image: '🎧' },
//     { id: 2, name: 'Wireless Mouse', price: 89, quantity: 2, image: '🖱️' }
//   ]);
//   const [designTool, setDesignTool] = useState('brush');
//   const [currentColor, setCurrentColor] = useState('#3B82F6');
//   const canvasRef = useRef(null);

//   const closeModal = () => setActiveModal(null);


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

}