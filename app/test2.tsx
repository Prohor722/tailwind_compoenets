import React, { useState } from 'react';
import { Heart, Star, ArrowRight, Bookmark, Share2, Play, MapPin, Calendar, Users } from 'lucide-react';

export default function UniqueCardDesigns() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Unique Card Designs
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Gradient Mesh Card */}
          

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