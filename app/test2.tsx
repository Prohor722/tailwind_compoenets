import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

export default function ModernNavbars() {
  const [mobileMenu3, setMobileMenu3] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 space-y-12 p-4">


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