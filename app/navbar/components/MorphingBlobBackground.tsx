import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const MorphingBlobBackground = () => {
  const [mobileMenu1, setMobileMenu1] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-yellow-400/50 animate-pulse"></div>
            </div>
            <span className="text-2xl font-black text-white">NOVA</span>
          </div>

          <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-full p-2">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === idx && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <button className="cursor-pointer hidden md:block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
            Launch
          </button>

          <button
            onClick={() => setMobileMenu1(!mobileMenu1)}
            className="md:hidden text-white"
          >
            {mobileMenu1 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu1 && (
          <div className="md:hidden mt-6 space-y-3 pb-4">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className="block w-full text-left text-gray-300 hover:text-white py-2"
              >
                {tab}
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

export default MorphingBlobBackground;
