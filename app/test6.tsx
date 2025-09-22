import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

const AnimatedCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/*  4. Holographic Feature Card  */}
            

            {/*  5. 3D Tilting Card  */}
            <div className="relative group perspective-1000">
              <div className="relative w-full h-64 transform-style-preserve-3d transition-transform duration-300 group-hover:rotate-y-10 group-hover:rotate-x-5">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-2xl transform translate-z-12"></div>
                <div className="relative bg-white rounded-2xl p-6 h-full shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Premium Plan
                    </h3>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-800">
                      $99
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Unlimited projects
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      24/7 Support
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Advanced analytics
                    </li>
                  </ul>
                  <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-lg font-medium hover:from-orange-500 hover:to-red-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/*  6. Animated Gradient Card  */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Live Status
                </h3>
                <p className="text-gray-300 mb-4">
                  Monitor your system's health in real-time with our advanced
                  dashboard.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CPU Usage</span>
                    <span className="text-white">78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-yellow-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-gray-400">Memory</span>
                    <span className="text-white">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-1/2 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>

            {/*  7. Social Media Card  */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover-lift">
              <div className="flex items-start space-x-4 mb-4">
                <Image
                  height={48}
                  width={48}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='45'%3E🎨%3C/text%3E%3C/svg%3E"
                  alt="User"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">
                    @sarahjohnson • 2h ago
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                  </svg>
                </button>
              </div>
              <p className="text-gray-800 mb-4">
                Just finished designing a new mobile app interface! The gradient
                effects and micro-interactions turned out amazing. Can't wait to
                share the final result! 🚀
              </p>
              <div className="aspect-video bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-white text-6xl">📱</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>24</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>8</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/*  8. Weather Card  */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-6 text-white animate-tilt">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">New York</h3>
                    <p className="text-blue-100">Monday, Dec 18</p>
                  </div>
                  <div className="text-6xl">☀️</div>
                </div>
                <div className="flex items-end space-x-2 mb-6">
                  <span className="text-5xl font-light">22°</span>
                  <span className="text-xl text-blue-100 mb-2">C</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Sunny</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>18° / 25°</span>
                  </div>
                </div>
              </div>
            </div>

            {/*  9. Music Player Card  */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-white shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="text-4xl relative z-10">🎵</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold">Midnight City</h3>
                <p className="text-gray-400">M83</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">1:23</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-1">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-1 rounded-full w-1/3"></div>
                  </div>
                  <span className="text-xs text-gray-400">4:01</span>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 10 6.417 10 7.192v5.616c0 .775-.792.999-1.264.213L6.34 10.213c-.394-.66-.106-1.213.632-1.213h1.264z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button className="w-14 h-14 bg-white text-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.264-11.979c.472.786 1.264.562 1.264-.213V6.192c0-.775-.792-.999-1.264-.213l-2.395 4.008c-.394.66-.106 1.213.632 1.213h1.264z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/*  10. Notification Card  */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h4.586l.707-.707A1 1 0 0010 12h4a1 1 0 00.707-1.707L14 9.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      New message from Alex
                    </h4>
                    <span className="text-xs text-gray-500">2 min ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Hey! I've finished the design mockups for the new project.
                    Can you take a look and let me know your thoughts?
                  </p>
                  <div className="flex space-x-3">
                    <button className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                      Reply
                    </button>
                    <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                      Mark as read
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 11. Cryptocurrency Card  */}
            <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-rotate-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">₿</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bitcoin</h3>
                    <p className="text-yellow-100 text-sm">BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">$43,250</p>
                  <p className="text-green-200 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    +5.67%
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-100">24h Volume</span>
                  <span>$28.9B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-100">Market Cap</span>
                  <span>$847.2B</span>
                </div>
                <div className="h-16 flex items-end space-x-1 mt-4">
                  <div className="flex-1 bg-white/30 rounded-sm h-8"></div>
                  <div className="flex-1 bg-white/40 rounded-sm h-12"></div>
                  <div className="flex-1 bg-white/50 rounded-sm h-16"></div>
                  <div className="flex-1 bg-white/60 rounded-sm h-10"></div>
                  <div className="flex-1 bg-white/70 rounded-sm h-14"></div>
                  <div className="flex-1 bg-white/80 rounded-sm h-12"></div>
                  <div className="flex-1 bg-white rounded-sm h-16"></div>
                </div>
              </div>
            </div>

            {/* 12. Team Member Card  */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    MK
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Michael Kim
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  Senior Developer
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Full-stack developer with 8+ years of experience in React and
                  Node.js
                </p>
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">127</p>
                    <p className="text-xs text-gray-500">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">4.9</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">2.1K</p>
                    <p className="text-xs text-gray-500">Reviews</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                    Hire Me
                  </button>
                  <button className="px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-all">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-16 bg-white/5 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">
              How to Use These Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  🎨 Customization Tips
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Modify gradient colors by changing Tailwind color classes
                  </li>
                  <li>• Adjust card sizes using width/height utilities</li>
                  <li>• Change animations by editing the animation classes</li>
                  <li>• Add your own icons or images</li>
                  <li>• Experiment with different shadow intensities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  ⚡ Performance Notes
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use transform utilities for better GPU acceleration</li>
                  <li>• Limit complex animations on mobile devices</li>
                  <li>
                    • Consider using will-change for frequently animated
                    elements
                  </li>
                  <li>• Test responsiveness across different screen sizes</li>
                  <li>• Optimize images and SVGs for faster loading</li>
                </ul>
              </div>
            </div>
          </div>

          {/*  Code Examples  */}
          <div className="mt-12 bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">
              💻 Quick Start Examples
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-2">
                  Basic Glassmorphism Card:
                </p>
                <code className="block bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
                  &lt;div className ="bg-white/10 backdrop-blur-lg rounded-2xl
                  p-6 border border-white/20"&gt; &lt;!-- Your content here
                  --&gt; &lt;/div&gt;
                </code>
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-2">Hover Effect Card:</p>
                <code className="block bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
                  &lt;div className ="bg-white rounded-2xl p-6 shadow-lg
                  hover:shadow-2xl hover:scale-105 transition-all
                  duration-300"&gt; &lt;!-- Your content here --&gt;
                  &lt;/div&gt;
                </code>
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-2">
                  Gradient Border Card:
                </p>
                <code className="block bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
                  &lt;div className ="bg-gradient-to-r from-purple-500
                  to-pink-500 p-0.5 rounded-2xl"&gt; &lt;div className
                  ="bg-white rounded-2xl p-6"&gt; &lt;!-- Your content here
                  --&gt; &lt;/div&gt; &lt;/div&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCards;
