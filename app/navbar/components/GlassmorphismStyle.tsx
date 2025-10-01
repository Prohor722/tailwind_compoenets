import { Menu, Search, X } from "lucide-react";
import React from "react";

const GlassmorphismStyle = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        1. Glassmorphism Navbar
      </h2>
      <nav className="relative bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Brand
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all">
                Sign In
              </button>
            </div>

            <button
              onClick={() => setMobileMenu1(!mobileMenu1)}
              className="md:hidden"
            >
              {mobileMenu1 ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenu1 && (
            <div className="md:hidden mt-4 space-y-3 pb-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contact
              </a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default GlassmorphismStyle;
