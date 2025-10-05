import { Layers } from "lucide-react";
import React, { useState } from "react";

const AnimatedIconsNavigation = () => {
  const [mobileMenu4, setMobileMenu4] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group hover:rotate-12 transition-transform">
              <Layers className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-2xl font-black text-white">LAYERS</span>
          </div>

          <div className="hidden lg:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            {[
              { icon: Home, label: "Home" },
              { icon: Briefcase, label: "Work" },
              { icon: User, label: "About" },
              { icon: Mail, label: "Contact" },
            ].map((item, idx) => (
              <button
                key={idx}
                className="group relative px-5 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                <item.icon className="w-5 h-5 inline-block mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                <span className="font-medium">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              </button>
            ))}
          </div>

          <button className="hidden lg:block relative px-8 py-3 bg-white text-purple-600 rounded-xl font-bold overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <span className="relative group-hover:text-white transition-colors">
              Join Now
            </span>
            <div className="absolute inset-0 blur-xl bg-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>

          <button
            onClick={() => setMobileMenu4(!mobileMenu4)}
            className="lg:hidden text-white"
          >
            {mobileMenu4 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu4 && (
          <div className="lg:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
            {[
              { icon: Home, label: "Home" },
              { icon: Briefcase, label: "Work" },
              { icon: User, label: "About" },
              { icon: Mail, label: "Contact" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center space-x-2 text-white/80 hover:text-white"
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

export default AnimatedIconsNavigation;
