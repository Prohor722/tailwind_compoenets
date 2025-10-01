import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

export default function ModernNavbars() {
  const [mobileMenu2, setMobileMenu2] = useState(false);
  const [mobileMenu3, setMobileMenu3] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 space-y-12 p-4">

      {/* Navbar 2: Bold Dark Mode */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">2. Bold Dark Mode Navbar</h2>
        <nav className="bg-gray-900 rounded-2xl shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-12">
                <div className="text-2xl font-black text-white">
                  LOGO
                </div>
                
                <div className="hidden lg:flex items-center space-x-8">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors relative group">
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors relative group">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors relative group">
                    Blog
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <button className="px-5 py-2 text-white hover:text-cyan-400 transition-colors">
                  Log In
                </button>
                <button className="px-6 py-2 bg-cyan-500 text-gray-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                  Get Started
                </button>
              </div>

              <button onClick={() => setMobileMenu2(!mobileMenu2)} className="lg:hidden text-white">
                {mobileMenu2 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu2 && (
              <div className="lg:hidden mt-6 space-y-4 pb-4 border-t border-gray-800 pt-4">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Blog</a>
                <div className="space-y-2 pt-2">
                  <button className="w-full px-5 py-2 text-white border border-gray-700 rounded-lg">
                    Log In
                  </button>
                  <button className="w-full px-6 py-2 bg-cyan-500 text-gray-900 font-bold rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Navbar 3: E-commerce Style */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">3. E-commerce Navbar</h2>
        <nav className="bg-white rounded-2xl shadow-lg">
          <div className="border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="flex items-center justify-between text-sm">
                <div className="hidden md:flex items-center space-x-6 text-gray-600">
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-6 text-gray-600">
                  <a href="#" className="hover:text-gray-900">Help</a>
                  <a href="#" className="hover:text-gray-900">Track Order</a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-900">
                SHOP
              </div>

              <div className="hidden lg:flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                    <span>Categories</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <a href="#" className="text-gray-700 hover:text-gray-900">New Arrivals</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Best Sellers</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Sale</a>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Search className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <User className="w-5 h-5 text-gray-700" />
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
                <button onClick={() => setMobileMenu3(!mobileMenu3)} className="lg:hidden">
                  {mobileMenu3 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {mobileMenu3 && (
              <div className="lg:hidden mt-4 space-y-3 pb-4 border-t border-gray-100 pt-4">
                <a href="#" className="block text-gray-700 hover:text-gray-900">Categories</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">New Arrivals</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Best Sellers</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Sale</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}