import React from "react";

const ServiceBusinessContactInfo = () => {
  return (
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
            <div className="text-2xl font-bold text-gray-900">SERVICES</div>

            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1"
              >
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
                        <h3 className="font-bold text-gray-900 mb-3">
                          Professional Services
                        </h3>
                        <a
                          href="#"
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              Consulting
                            </h4>
                            <p className="text-xs text-gray-600">
                              Expert business consulting services
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              Development
                            </h4>
                            <p className="text-xs text-gray-600">
                              Custom software development
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              Maintenance
                            </h4>
                            <p className="text-xs text-gray-600">
                              Ongoing support and maintenance
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-gray-900 mb-3">
                          Support Center
                        </h3>
                        <a
                          href="#"
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              Help Center
                            </h4>
                            <p className="text-xs text-gray-600">
                              FAQs and documentation
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              24/7 Support
                            </h4>
                            <p className="text-xs text-gray-600">
                              Round-the-clock assistance
                            </p>
                          </div>
                        </a>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <p className="text-sm font-semibold text-gray-900 mb-2">
                            Need immediate help?
                          </p>
                          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                            Contact Us Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Request Quote
            </button>
          </div>

          <button
            onClick={() => setMobileMenu3(!mobileMenu3)}
            className="lg:hidden"
          >
            {mobileMenu3 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu3 && (
          <div className="lg:hidden mt-6 pb-4 space-y-4 border-t border-gray-100 pt-4">
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 py-2"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>

            <div>
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServices && (
                <div className="pl-4 mt-3 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Professional Services
                    </h4>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <a href="#" className="text-gray-600 text-sm">
                          Consulting
                        </a>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-blue-600" />
                        <a href="#" className="text-gray-600 text-sm">
                          Development
                        </a>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Wrench className="w-4 h-4 text-blue-600" />
                        <a href="#" className="text-gray-600 text-sm">
                          Maintenance
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Support Center
                    </h4>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-center space-x-2">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                        <a href="#" className="text-gray-600 text-sm">
                          Help Center
                        </a>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <a href="#" className="text-gray-600 text-sm">
                          24/7 Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="block text-gray-700 py-2">
              Portfolio
            </a>
            <a href="#" className="block text-gray-700 py-2">
              About
            </a>
            <a href="#" className="block text-gray-700 py-2">
              Contact
            </a>

            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-bold mt-4">
              Request Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ServiceBusinessContactInfo;
