import React, { useState } from "react";
import { Menu, X, Circle } from "lucide-react";

const GlassmorphismFloatingElements = () => {
  const [mobileMenu3, setMobileMenu3] = useState(false);

  return (
    <nav className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <Circle
                className="w-8 h-8 text-blue-400 animate-spin"
                style={{ animationDuration: "10s" }}
              />
              <div className="absolute inset-0 bg-blue-400/30 blur-xl rounded-full group-hover:bg-blue-400/50 transition-all"></div>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              GLASS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {["Home", "Features", "Pricing", "About"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative text-white/80 hover:text-white font-medium transition-all group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-lg"></div>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button className="cursor-pointer relative px-6 py-2 overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
              <span className="relative text-white font-bold">Start Free</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenu3(!mobileMenu3)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenu3 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu3 && (
          <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-white/20 pt-4">
            {["Home", "Features", "Pricing", "About"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block text-white/80 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
              >
                {item}
              </a>
            ))}
            <button className="cursor-pointer w-full px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-bold mt-4">
              Start Free
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GlassmorphismFloatingElements;
