import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

const AnimatedCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
