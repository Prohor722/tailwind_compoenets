import React, { useState } from 'react';
import { Heart, Star, ArrowRight, Bookmark, Share2, Play, MapPin, Calendar, Users } from 'lucide-react';

export default function UniqueCardDesigns() {
  const [bookmarkedCards, setBookmarkedCards] = useState(new Set());

  const toggleBookmark = (cardId: string) => {
    setBookmarkedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Unique Card Designs
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          

          {/* Neon Card */}
          <div className="relative overflow-hidden rounded-2xl bg-black border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Neon Vibes</h3>
                  <p className="text-cyan-400 text-sm">Cyberpunk Style</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Embrace the future with glowing neon accents and dark themes.</p>
              <div className="flex justify-between items-center">
                <span className="text-cyan-400 font-mono text-sm">2024.09.25</span>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  Explore
                </button>
              </div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* 3D Floating Card */}
          <div className="perspective-1000">
            <div className="relative transform-gpu transition-all duration-500 hover:rotate-y-12 hover:-translate-y-2 preserve-3d">
              <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">3D Float</h3>
                    <p className="opacity-90">Interactive Design</p>
                  </div>
                  <button 
                    onClick={() => toggleBookmark('float')}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Bookmark className={`w-5 h-5 transition-colors ${bookmarkedCards.has('float') ? 'text-yellow-300 fill-yellow-300' : 'text-white'}`} />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Sep 25, 2024</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Minimal Elegant Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-600 mb-6">Clean, minimal design with subtle interactions and perfect typography.</p>
              <div className="flex gap-3 justify-center">
                <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-2xl hover:bg-gray-800 transition-colors">
                  Join Team
                </button>
                <button className="p-3 border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Gradient Mesh Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 p-[1px] hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-900 rounded-2xl p-6 h-full">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Gradient Mesh</h3>
                    <p className="text-gray-400">Premium Design</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">Stunning gradient borders with dark themed content for maximum visual impact.</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full border-2 border-gray-900"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full border-2 border-gray-900"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <span className="text-gray-400 text-sm">+24 others</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-orange-400/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Layered Shadow Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl transform rotate-1 opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:translate-y-1 transition-transform duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Layered Design</h3>
                <p className="text-gray-600 mb-6">Multiple shadow layers create depth and visual hierarchy for stunning effects.</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Discover More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}