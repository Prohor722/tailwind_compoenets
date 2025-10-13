"use client";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const DarkModeToggle = () => {
  const [mobileMenu4, setMobileMenu4] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-gray-900" : "bg-white"
      } rounded-2xl shadow-xl transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-2">
              <Globe
                className={`w-6 h-6 ${
                  darkMode ? "text-cyan-400" : "text-blue-600"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Global
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Explore
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Discover
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Community
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`cursor-pointer p-2 rounded-lg transition-all ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              className={`cursor-pointer hidden md:block px-5 py-2 rounded-lg font-medium transition-colors ${
                darkMode
                  ? "bg-cyan-500 text-gray-900 hover:bg-cyan-400"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Join Now
            </button>
            <button
              onClick={() => setMobileMenu4(!mobileMenu4)}
              className={`md:hidden ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {mobileMenu4 ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenu4 && (
          <div
            className={`md:hidden mt-4 space-y-3 pb-4 pt-4 border-t ${
              darkMode ? "border-gray-800" : "border-gray-100"
            }`}
          >
            <a
              href="#"
              className={`block ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Explore
            </a>
            <a
              href="#"
              className={`block ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover
            </a>
            <a
              href="#"
              className={`block ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Community
            </a>
            <button
              className={`w-full px-5 py-2 rounded-lg font-medium ${
                darkMode
                  ? "bg-cyan-500 text-gray-900"
                  : "bg-blue-600 text-white"
              }`}
            >
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DarkModeToggle;
