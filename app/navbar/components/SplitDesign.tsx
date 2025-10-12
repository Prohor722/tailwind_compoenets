import React from "react";

const SplitDesign = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Zap className="w-7 h-7 text-yellow-300" />
              <span className="text-2xl font-bold text-white">Volt</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1 bg-white/10 rounded-full p-1">
            <a
              href="#"
              className="px-6 py-2 bg-white text-indigo-600 rounded-full font-medium transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="px-6 py-2 text-white hover:bg-white/20 rounded-full font-medium transition-all"
            >
              Features
            </a>
            <a
              href="#"
              className="px-6 py-2 text-white hover:bg-white/20 rounded-full font-medium transition-all"
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-6 py-2 text-white hover:bg-white/20 rounded-full font-medium transition-all"
            >
              Docs
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-5 py-2 text-white hover:bg-white/10 rounded-lg transition-colors font-medium">
              Sign In
            </button>
            <button className="px-6 py-2 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all font-bold">
              Start Free
            </button>
          </div>

          <button
            onClick={() => setMobileMenu3(!mobileMenu3)}
            className="lg:hidden text-white"
          >
            {mobileMenu3 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu3 && (
          <div className="lg:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
            <a href="#" className="block text-white">
              Home
            </a>
            <a href="#" className="block text-white">
              Features
            </a>
            <a href="#" className="block text-white">
              Pricing
            </a>
            <a href="#" className="block text-white">
              Docs
            </a>
            <div className="space-y-2 pt-2">
              <button className="w-full px-5 py-2 text-white border border-white/30 rounded-lg">
                Sign In
              </button>
              <button className="w-full px-6 py-2 bg-white text-indigo-600 rounded-lg font-bold">
                Start Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SplitDesign;
