import {
  ChevronDown,
  Cloud,
  Code,
  Database,
  Menu,
  Shield,
  X,
} from "lucide-react";
import React, { useState } from "react";

const SaasPlatformFeature = () => {
  const [mobileMenu2, setMobileMenu2] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        2. SaaS Platform with Feature Showcase
      </h2>
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
                            <h4 className="font-semibold text-gray-900">
                              Database
                            </h4>
                            <p className="text-sm text-gray-600">
                              Managed PostgreSQL & MySQL databases
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Cloud className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Cloud Storage
                            </h4>
                            <p className="text-sm text-gray-600">
                              Scalable object storage solution
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Code className="w-5 h-5 text-pink-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              API Gateway
                            </h4>
                            <p className="text-sm text-gray-600">
                              Powerful API management platform
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Shield className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Security Suite
                            </h4>
                            <p className="text-sm text-gray-600">
                              Enterprise-grade security tools
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gray-100">
                          <a
                            href="#"
                            className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 flex items-center space-x-1"
                          >
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
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900">
                            For Startups
                          </h4>
                          <p className="text-sm text-gray-600">
                            Scale from zero to millions
                          </p>
                        </a>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900">
                            For Enterprise
                          </h4>
                          <p className="text-sm text-gray-600">
                            Enterprise-grade infrastructure
                          </p>
                        </a>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900">
                            For Developers
                          </h4>
                          <p className="text-sm text-gray-600">
                            Tools built for developers
                          </p>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="text-white/90 hover:text-white font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-white font-medium"
                >
                  Docs
                </a>
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

            <button
              onClick={() => setMobileMenu2(!mobileMenu2)}
              className="lg:hidden text-white"
            >
              {mobileMenu2 ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileProducts ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileProducts && (
                  <div className="pl-4 mt-3 space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/10">
                      <Database className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          Database
                        </h4>
                        <p className="text-xs text-white/70">
                          Managed databases
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/10">
                      <Cloud className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          Cloud Storage
                        </h4>
                        <p className="text-xs text-white/70">
                          Scalable storage
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/10">
                      <Code className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          API Gateway
                        </h4>
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
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileSolutions ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileSolutions && (
                  <div className="pl-4 mt-3 space-y-2">
                    <a href="#" className="block text-white/80 text-sm py-1">
                      For Startups
                    </a>
                    <a href="#" className="block text-white/80 text-sm py-1">
                      For Enterprise
                    </a>
                    <a href="#" className="block text-white/80 text-sm py-1">
                      For Developers
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="block text-white py-2">
                Pricing
              </a>
              <a href="#" className="block text-white py-2">
                Docs
              </a>

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
  );
};

export default SaasPlatformFeature;
