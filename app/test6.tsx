import React from "react";

const AnimatedCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
