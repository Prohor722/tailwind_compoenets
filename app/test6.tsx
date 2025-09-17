import React, { useState } from 'react';
import { Heart, Star, ShoppingCart, Eye, ArrowRight, Zap, Globe, Code } from 'lucide-react';

const AnimatedCards = () => {
  const [likedCards, setLikedCards] = useState(new Set());
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const toggleLike = (cardId: string) => {
    const newLiked = new Set(likedCards);
    if (newLiked.has(cardId)) {
      newLiked.delete(cardId);
    } else {
      newLiked.add(cardId);
    }
    setLikedCards(newLiked);
  };

  const toggleFlip = (cardId:string) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Animated Card Collection
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Glassmorphism Hover Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Glassmorphism</h3>
              <p className="text-white/70 mb-4">Beautiful frosted glass effect with smooth hover animations.</p>
              <button className="flex items-center text-cyan-400 font-medium group-hover:text-white transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Flip Card */}
          <div className="h-64 perspective-1000">
            <div 
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${flippedCard === 'flip' ? 'rotate-y-180' : ''}`}
              onClick={() => toggleFlip('flip')}
            >
              {/* Front */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 p-6 flex flex-col justify-center items-center text-white shadow-2xl">
                <Code className="w-16 h-16 mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">Flip Me!</h3>
                <p className="text-center opacity-90">Click to reveal the magic</p>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex flex-col justify-center items-center text-white shadow-2xl">
                <Zap className="w-16 h-16 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">Surprise!</h3>
                <p className="text-center opacity-90">3D flip animation with Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* Pulse Glow Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Plan</h3>
              <p className="text-white/80 mb-4">Unlock all features with our premium subscription.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">$29/mo</span>
                <button className="px-4 py-2 bg-white/20 rounded-lg text-white font-medium hover:bg-white/30 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Tilt Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 p-6 transform transition-all duration-300 hover:rotate-2 hover:scale-105 shadow-lg hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-45 transition-transform duration-300">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">E-Commerce</h3>
              <p className="text-white/90 mb-4">Modern shopping experience with smooth animations.</p>
              <div className="flex items-center justify-between">
                <span className="text-white/80">24 Products</span>
                <button className="px-3 py-1 bg-white/20 rounded-full text-sm text-white hover:bg-white/30 transition-colors">
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* Like Button Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <button 
                onClick={() => toggleLike('like')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  likedCards.has('like') 
                    ? 'bg-red-500 scale-110' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                <Heart 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    likedCards.has('like') ? 'text-white fill-current' : 'text-slate-400'
                  }`} 
                />
              </button>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Interactive UI</h3>
            <p className="text-slate-400 mb-4">Engaging user interfaces with micro-interactions.</p>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" /> 1.2k views
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" /> {likedCards.has('like') ? '1 like' : '0 likes'}
              </span>
            </div>
          </div>

          {/* Floating Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance</h3>
              <p className="text-gray-600 mb-4">Lightning fast load times and smooth animations.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm text-green-600 font-medium">Online</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Connect
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnimatedCards;