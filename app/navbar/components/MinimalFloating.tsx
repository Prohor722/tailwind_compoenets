"use client";
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';


const MinimalFloating = () => {
  const [mobileMenu1, setMobileMenu1] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto bg-white rounded-full shadow-xl px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
          <span className="font-bold text-gray-900 hidden sm:block">
            Minimal
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            Work
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            Studio
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            Journal
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <button className="cursor-pointer hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            Menu
          </button>
          <button
            onClick={() => setMobileMenu1(!mobileMenu1)}
            className="md:hidden"
          >
            {mobileMenu1 ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenu1 && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100 space-y-3">
          <a href="#" className="block text-gray-600 hover:text-gray-900">
            Work
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">
            Studio
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">
            Journal
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default MinimalFloating;
