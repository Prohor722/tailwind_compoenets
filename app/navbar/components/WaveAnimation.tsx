"use client";
import { Menu, X, Home, User, Rocket, ShoppingCart, Heart } from 'lucide-react';
import React, { useState } from "react";

const WaveAnimation = () => {
  const [mobileMenu4, setMobileMenu4] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all group-hover:rotate-12">
                <Rocket className="w-7 h-7 text-white transition-all group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
            <span className="text-2xl font-black text-white">WAVE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            {[
              { icon: Home, label: "Home" },
              { icon: ShoppingCart, label: "Shop" },
              { icon: Heart, label: "Wishlist" },
              { icon: User, label: "Account" },
            ].map((item, idx) => (
              <button
                key={idx}
                className="group relative px-5 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center space-x-2">
                  <item.icon className="w-5 h-5 transition-all group-hover:scale-110 group-hover:rotate-12" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </button>
            ))}
          </div>

          <button className="hidden lg:block relative px-8 py-3 bg-white text-purple-600 rounded-xl font-bold overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative group-hover:text-white transition-colors">
              Join Now
            </span>
          </button>

          <button
            onClick={() => setMobileMenu4(!mobileMenu4)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenu4 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu4 && (
          <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-white/20 pt-4">
            {[
              { icon: Home, label: "Home" },
              { icon: ShoppingCart, label: "Shop" },
              { icon: Heart, label: "Wishlist" },
              { icon: User, label: "Account" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center space-x-3 text-white/80 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
            <button className="w-full mt-4 px-8 py-3 bg-white text-purple-600 rounded-xl font-bold">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default WaveAnimation;
