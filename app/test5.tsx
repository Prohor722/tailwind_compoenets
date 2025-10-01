import { useState } from 'react';
import { Menu, X, ChevronDown, Search, ShoppingBag, Heart, User, Home, Package, Zap, Code, Database, Cloud, Shield, Truck, CreditCard, HelpCircle, Phone, Mail, MapPin, Star, TrendingUp, Award, Wrench } from 'lucide-react';

export default function DetailedNavbars() {
  const [mobileMenu1, setMobileMenu1] = useState(false);
  const [mobileMenu2, setMobileMenu2] = useState(false);
  const [mobileMenu3, setMobileMenu3] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 space-y-12 p-4">
      
      {/* Navbar 1: E-commerce with Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">1. E-commerce Multi-Category Navigation</h2>
        <nav className="bg-white rounded-2xl shadow-xl">
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
                  <a href="#" className="hover:text-gray-900 flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Support</span>
                  </a>
                  <a href="#" className="hover:text-gray-900 flex items-center space-x-1">
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
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Shirts & Tops</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Pants & Jeans</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Jackets & Coats</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Shoes</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center space-x-1">
                              <span>Sale</span>
                              <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">-50%</span>
                            </a></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                            <Heart className="w-5 h-5 text-pink-600" />
                            <span>Women</span>
                          </h3>
                          <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Dresses</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Tops & Blouses</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Skirts & Pants</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Accessories</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">New Arrivals</a></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-600" />
                            <span>Kids</span>
                          </h3>
                          <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Boys (2-14 yrs)</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Girls (2-14 yrs)</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Baby (0-24 mos)</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Shoes & Accessories</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">School Essentials</a></li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                          <h3 className="font-bold text-gray-900 mb-2">Featured Collection</h3>
                          <p className="text-sm text-gray-600 mb-3">Summer Essentials 2025</p>
                          <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-3"></div>
                          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Best Sellers</span>
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-700 font-bold flex items-center space-x-1">
                    <Zap className="w-4 h-4" />
                    <span>Sale</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Search className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <ShoppingBag className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    5
                  </span>
                </button>
                <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <User className="w-5 h-5 text-gray-700" />
                </button>
                <button onClick={() => setMobileMenu1(!mobileMenu1)} className="lg:hidden p-2">
                  {mobileMenu1 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileProducts ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileProducts && (
                    <div className="pl-4 mt-2 space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                          <Package className="w-4 h-4 text-blue-600" />
                          <span>Men</span>
                        </h4>
                        <ul className="space-y-2 pl-6">
                          <li><a href="#" className="text-gray-600 text-sm">Shirts & Tops</a></li>
                          <li><a href="#" className="text-gray-600 text-sm">Pants & Jeans</a></li>
                          <li><a href="#" className="text-gray-600 text-sm">Jackets & Coats</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                          <Heart className="w-4 h-4 text-pink-600" />
                          <span>Women</span>
                        </h4>
                        <ul className="space-y-2 pl-6">
                          <li><a href="#" className="text-gray-600 text-sm">Dresses</a></li>
                          <li><a href="#" className="text-gray-600 text-sm">Tops & Blouses</a></li>
                          <li><a href="#" className="text-gray-600 text-sm">Accessories</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-600" />
                          <span>Kids</span>
                        </h4>
                        <ul className="space-y-2 pl-6">
                          <li><a href="#" className="text-gray-600 text-sm">Boys</a></li>
                          <li><a href="#" className="text-gray-600 text-sm">Girls</a></li>
                          <li><a href="#" className="text-gray-600 text-sm">Baby</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                <a href="#" className="flex items-center space-x-2 text-gray-700 py-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-700 py-2">
                  <Award className="w-4 h-4" />
                  <span>Best Sellers</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-red-600 font-bold py-2">
                  <Zap className="w-4 h-4" />
                  <span>Sale</span>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Navbar 2: SaaS Platform with Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">2. SaaS Platform with Feature Showcase</h2>
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-10">
                <div className="text-2xl font-black text-white flex items-center space-x-2">
                  <Cloud className="w-8 h-8" />
                  <span>CLOUDTECH</span>
                </div>
                
                <div className="hidden lg:flex items-center space-x-6">
                  <div 
                    className="relative group"
                    onMouseEnter={() => setShowProducts(true)}
                    onMouseLeave={() => setShowProducts(false)}
                  >
                    <button className="flex items-center space-x-1 text-white/90 hover:text-white font-medium py-2">
                      <span>Products</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                    </button>
                    
                    {showProducts && (
                      <div className="absolute left-0 top-full mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                        <div className="p-6 space-y-4">
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Database className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Database</h4>
                              <p className="text-sm text-gray-600">Managed PostgreSQL & MySQL databases</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Cloud className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Cloud Storage</h4>
                              <p className="text-sm text-gray-600">Scalable object storage solution</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Code className="w-5 h-5 text-pink-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">API Gateway</h4>
                              <p className="text-sm text-gray-600">Powerful API management platform</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Security Suite</h4>
                              <p className="text-sm text-gray-600">Enterprise-grade security tools</p>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-gray-100">
                            <a href="#" className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 flex items-center space-x-1">
                              <span>View all products</span>
                              <ChevronDown className="w-4 h-4 -rotate-90" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div 
                    className="relative group"
                    onMouseEnter={() => setShowSolutions(true)}
                    onMouseLeave={() => setShowSolutions(false)}
                  >
                    <button className="flex items-center space-x-1 text-white/90 hover:text-white font-medium py-2">
                      <span>Solutions</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                    </button>
                    
                    {showSolutions && (
                      <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                        <div className="p-6 space-y-3">
                          <a href="#" className="block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                            <h4 className="font-semibold text-gray-900">For Startups</h4>
                            <p className="text-sm text-gray-600">Scale from zero to millions</p>
                          </a>
                          <a href="#" className="block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                            <h4 className="font-semibold text-gray-900">For Enterprise</h4>
                            <p className="text-sm text-gray-600">Enterprise-grade infrastructure</p>
                          </a>
                          <a href="#" className="block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
                            <h4 className="font-semibold text-gray-900">For Developers</h4>
                            <p className="text-sm text-gray-600">Tools built for developers</p>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <a href="#" className="text-white/90 hover:text-white font-medium">Pricing</a>
                  <a href="#" className="text-white/90 hover:text-white font-medium">Docs</a>
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-3">
                <button className="px-5 py-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                  Sign In
                </button>
                <button className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-bold hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
              </div>

              <button onClick={() => setMobileMenu2(!mobileMenu2)} className="lg:hidden text-white">
                {mobileMenu2 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu2 && (
              <div className="lg:hidden mt-6 pb-4 space-y-4 border-t border-white/20 pt-4">
                <div>
                  <button 
                    onClick={() => setMobileProducts(!mobileProducts)}
                    className="flex items-center justify-between w-full text-white font-medium py-2"
                  >
                    <span>Products</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileProducts ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileProducts && (
                    <div className="pl-4 mt-3 space-y-3">
                      <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/10">
                        <Database className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white text-sm">Database</h4>
                          <p className="text-xs text-white/70">Managed databases</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/10">
                        <Cloud className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white text-sm">Cloud Storage</h4>
                          <p className="text-xs text-white/70">Scalable storage</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/10">
                        <Code className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white text-sm">API Gateway</h4>
                          <p className="text-xs text-white/70">API management</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <button 
                    onClick={() => setMobileSolutions(!mobileSolutions)}
                    className="flex items-center justify-between w-full text-white font-medium py-2"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutions ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileSolutions && (
                    <div className="pl-4 mt-3 space-y-2">
                      <a href="#" className="block text-white/80 text-sm py-1">For Startups</a>
                      <a href="#" className="block text-white/80 text-sm py-1">For Enterprise</a>
                      <a href="#" className="block text-white/80 text-sm py-1">For Developers</a>
                    </div>
                  )}
                </div>
                
                <a href="#" className="block text-white py-2">Pricing</a>
                <a href="#" className="block text-white py-2">Docs</a>
                
                <div className="space-y-2 pt-2">
                  <button className="w-full px-5 py-2 text-white border border-white/30 rounded-lg">
                    Sign In
                  </button>
                  <button className="w-full px-6 py-2 bg-white text-indigo-600 rounded-lg font-bold">
                    Start Free Trial
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Navbar 3: Service Business with Contact Info */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">3. Service Business with Contact Details</h2>
        <nav className="bg-white rounded-2xl shadow-xl">
          {/* Top Contact Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-t-2xl">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="hidden md:flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@company.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>123 Business St, NY</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs">Mon-Fri: 9AM-6PM</span>
                  <button className="px-4 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs font-medium transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Nav */}
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-gray-900">
                  SERVICES
                </div>
                
                <div className="hidden lg:flex items-center space-x-6">
                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </a>
                  
                  <div 
                    className="relative group"
                    onMouseEnter={() => setShowCompany(true)}
                    onMouseLeave={() => setShowCompany(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                      <span>Services</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                    </button>
                    
                    {showCompany && (
                      <div className="absolute left-0 top-full mt-2 w-screen max-w-3xl bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                        <div className="grid grid-cols-2 gap-4 p-6">
                          <div className="space-y-3">
                            <h3 className="font-bold text-gray-900 mb-3">Professional Services</h3>
                            <a href="#" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                              <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm">Consulting</h4>
                                <p className="text-xs text-gray-600">Expert business consulting services</p>
                              </div>
                            </a>
                            <a href="#" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                              <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm">Development</h4>
                                <p className="text-xs text-gray-600">Custom software development</p>
                              </div>
                            </a>
                            <a href="#" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                              <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm">Maintenance</h4>
                                <p className="text-xs text-gray-600">Ongoing support and maintenance</p>
                              </div>
                            </a>
                          </div>
                          <div className="space-y-3">
                            <h3 className="font-bold text-gray-900 mb-3">Support Center</h3>
                            <a href="#" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                              <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm">Help Center</h4>
                                <p className="text-xs text-gray-600">FAQs and documentation</p>
                              </div>
                            </a>
                            <a href="#" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                              <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm">24/7 Support</h4>
                                <p className="text-xs text-gray-600">Round-the-clock assistance</p>
                              </div>
                            </a>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                              <p className="text-sm font-semibold text-gray-900 mb-2">Need immediate help?</p>
                              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                                Contact Us Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Portfolio</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-3">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Request Quote
                </button>
              </div>

              <button onClick={() => setMobileMenu3(!mobileMenu3)} className="lg:hidden">
                {mobileMenu3 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu3 && (
              <div className="lg:hidden mt-6 pb-4 space-y-4 border-t border-gray-100 pt-4">
                <a href="#" className="flex items-center space-x-2 text-gray-700 py-2">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </a>
                
                <div>
                  <button 
                    onClick={() => setMobileServices(!mobileServices)}
                    className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileServices && (
                    <div className="pl-4 mt-3 space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Professional Services</h4>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-center space-x-2">
                            <CreditCard className="w-4 h-4 text-blue-600" />
                            <a href="#" className="text-gray-600 text-sm">Consulting</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Code className="w-4 h-4 text-blue-600" />
                            <a href="#" className="text-gray-600 text-sm">Development</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Wrench className="w-4 h-4 text-blue-600" />
                            <a href="#" className="text-gray-600 text-sm">Maintenance</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Support Center</h4>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-center space-x-2">
                            <HelpCircle className="w-4 h-4 text-blue-600" />
                            <a href="#" className="text-gray-600 text-sm">Help Center</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-blue-600" />
                            <a href="#" className="text-gray-600 text-sm">24/7 Support</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                <a href="#" className="block text-gray-700 py-2">Portfolio</a>
                <a href="#" className="block text-gray-700 py-2">About</a>
                <a href="#" className="block text-gray-700 py-2">Contact</a>
                
                <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-bold mt-4">
                  Request Quote
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

    </div>
  );
}