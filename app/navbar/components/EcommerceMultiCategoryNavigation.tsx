import {
  Award,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Package,
  Phone,
  Search,
  Shield,
  ShoppingBag,
  Star,
  TrendingUp,
  Truck,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const EcommerceMultiCategoryNavigation = () => {
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileMenu1, setMobileMenu1] = useState(false);

  return (
    <nav className="w-full bg-white rounded-2xl shadow-xl">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Free shipping over $50</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure checkout</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <a
                href="#"
                className="hover:text-gray-900 flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Support</span>
              </a>
              <a
                href="#"
                className="hover:text-gray-900 flex items-center space-x-1"
              >
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Store Locator</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              STORE
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                  <span>Shop</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Mega Menu */}
                <div className="absolute left-0 top-full mt-2 w-screen max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="grid grid-cols-4 gap-6 p-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <Package className="w-5 h-5 text-blue-600" />
                        <span>Men</span>
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Shirts & Tops
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Pants & Jeans
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Jackets & Coats
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm flex items-center space-x-1"
                          >
                            <span>Sale</span>
                            <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                              -50%
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-pink-600" />
                        <span>Women</span>
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Dresses
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Tops & Blouses
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Skirts & Pants
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            New Arrivals
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-600" />
                        <span>Kids</span>
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Boys (2-14 yrs)
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Girls (2-14 yrs)
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Baby (0-24 mos)
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            Shoes & Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-sm"
                          >
                            School Essentials
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Featured Collection
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Summer Essentials 2025
                      </p>
                      <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-3"></div>
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Trending</span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1"
              >
                <Award className="w-4 h-4" />
                <span>Best Sellers</span>
              </a>
              <a
                href="#"
                className="text-red-600 hover:text-red-700 font-bold flex items-center space-x-1"
              >
                <Zap className="w-4 h-4" />
                <span>Sale</span>
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                5
              </span>
            </button>
            <button className="cursor-pointer hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => setMobileMenu1(!mobileMenu1)}
              className="cursor-pointer lg:hidden p-2"
            >
              {mobileMenu1 ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu1 && (
          <div className="lg:hidden mt-6 pb-4 space-y-4 border-t border-gray-100 pt-4">
            <div>
              <button
                onClick={() => setMobileProducts(!mobileProducts)}
                className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
              >
                <span>Shop</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileProducts ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProducts && (
                <div className="pl-4 mt-2 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Package className="w-4 h-4 text-blue-600" />
                      <span>Men</span>
                    </h4>
                    <ul className="space-y-2 pl-6">
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Shirts & Tops
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Pants & Jeans
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Jackets & Coats
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-pink-600" />
                      <span>Women</span>
                    </h4>
                    <ul className="space-y-2 pl-6">
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Dresses
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Tops & Blouses
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Accessories
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-600" />
                      <span>Kids</span>
                    </h4>
                    <ul className="space-y-2 pl-6">
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Boys
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Girls
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 text-sm">
                          Baby
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 py-2"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Trending</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 py-2"
            >
              <Award className="w-4 h-4" />
              <span>Best Sellers</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-red-600 font-bold py-2"
            >
              <Zap className="w-4 h-4" />
              <span>Sale</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EcommerceMultiCategoryNavigation;
