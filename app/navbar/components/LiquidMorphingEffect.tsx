"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import React, { useState } from "react";

const LiquidMorphingEffect = () => {
  const [mobileMenu1, setMobileMenu1] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ["Home", "Products", "About", "Contact"];
  
  return (
    <nav className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-1/2 left-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles
                className="w-8 h-8 text-yellow-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute inset-0 blur-xl bg-yellow-400/50 animate-pulse"></div>
            </div>
            <span className="text-2xl font-black text-white">LIQUID</span>
          </div>

          {/* Desktop Menu with Sliding Indicator */}
          <div className="hidden lg:flex items-center space-x-2 bg-white/5 rounded-full p-2 relative">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative px-6 py-2 rounded-full font-medium transition-all duration-500 ${
                  activeIndex === idx
                    ? "text-white z-10"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeIndex === idx && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-lg opacity-50"></div>
                  </>
                )}
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>

          <button className="hidden lg:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 group">
            <span>Launch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenu1(!mobileMenu1)}
            className="lg:hidden text-white p-2"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenu1 ? "rotate-45 top-3" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white top-3 transition-all duration-300 ${
                  mobileMenu1 ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenu1 ? "-rotate-45 top-3" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {mobileMenu1 && (
          <div className="lg:hidden mt-6 space-y-3 pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className="block w-full text-left text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
              >
                {item}
              </button>
            ))}
            <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold mt-4">
              Launch
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LiquidMorphingEffect;
