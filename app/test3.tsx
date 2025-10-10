import { useState } from 'react';
import { Menu, X, Bell, Settings, ChevronDown, Zap, Globe, Moon, Sun } from 'lucide-react';

export default function MoreModernNavbars() {
  const [mobileMenu1, setMobileMenu1] = useState(false);
  const [mobileMenu2, setMobileMenu2] = useState(false);
  const [mobileMenu3, setMobileMenu3] = useState(false);
  const [mobileMenu4, setMobileMenu4] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 space-y-12 p-4">
      {/* Navbar 1: Minimal Floating */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">1. Minimal Floating Navbar</h2>
        
      </div>

      {/* Navbar 2: Gradient Border */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">2. Gradient Border Navbar</h2>
        <nav className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-10">
                <div className="text-2xl font-black bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
                  NEXUS
                </div>
                
                <div className="hidden lg:flex items-center space-x-6">
                  <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                    Dashboard
                  </a>
                  <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                    Analytics
                  </a>
                  <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                    Team
                  </a>
                  <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                    Projects
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <Bell className="w-5 h-5 text-gray-700" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-gray-700" />
                </button>
                <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
              </div>

              <button onClick={() => setMobileMenu2(!mobileMenu2)} className="lg:hidden">
                {mobileMenu2 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu2 && (
              <div className="lg:hidden mt-4 space-y-3 pb-4 pt-4 border-t border-gray-100">
                <a href="#" className="block text-gray-700">Dashboard</a>
                <a href="#" className="block text-gray-700">Analytics</a>
                <a href="#" className="block text-gray-700">Team</a>
                <a href="#" className="block text-gray-700">Projects</a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Navbar 3: Split Design */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">3. Split Design Navbar</h2>
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
                <a href="#" className="px-6 py-2 bg-white text-indigo-600 rounded-full font-medium transition-all">
                  Home
                </a>
                <a href="#" className="px-6 py-2 text-white hover:bg-white/20 rounded-full font-medium transition-all">
                  Features
                </a>
                <a href="#" className="px-6 py-2 text-white hover:bg-white/20 rounded-full font-medium transition-all">
                  Pricing
                </a>
                <a href="#" className="px-6 py-2 text-white hover:bg-white/20 rounded-full font-medium transition-all">
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

              <button onClick={() => setMobileMenu3(!mobileMenu3)} className="lg:hidden text-white">
                {mobileMenu3 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu3 && (
              <div className="lg:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
                <a href="#" className="block text-white">Home</a>
                <a href="#" className="block text-white">Features</a>
                <a href="#" className="block text-white">Pricing</a>
                <a href="#" className="block text-white">Docs</a>
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
      </div>

      {/* Navbar 4: Dark Mode Toggle */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">4. Dark Mode Toggle Navbar</h2>
        <nav className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-xl transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-10">
                <div className="flex items-center space-x-2">
                  <Globe className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                  <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Global
                  </span>
                </div>
                
                <div className="hidden md:flex items-center space-x-6">
                  <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                    Explore
                  </a>
                  <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                    Discover
                  </a>
                  <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                    Community
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <button className={`hidden md:block px-5 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  Join Now
                </button>
                <button onClick={() => setMobileMenu4(!mobileMenu4)} className={`md:hidden ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {mobileMenu4 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {mobileMenu4 && (
              <div className={`md:hidden mt-4 space-y-3 pb-4 pt-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                <a href="#" className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Explore</a>
                <a href="#" className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Discover</a>
                <a href="#" className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Community</a>
                <button className={`w-full px-5 py-2 rounded-lg font-medium ${darkMode ? 'bg-cyan-500 text-gray-900' : 'bg-blue-600 text-white'}`}>
                  Join Now
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}