import { Menu, X } from "lucide-react";
import { useState } from "react";

const BoldDarkMode = () => {
  const [mobileMenu2, setMobileMenu2] = useState(false);

  return (
    <nav className="bg-gray-900 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-black text-white">LOGO</div>

            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
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

        {mobileMenu2 && (
          <div className="lg:hidden mt-6 space-y-4 pb-4 border-t border-gray-800 pt-4">
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </a>
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
  );
};

export default BoldDarkMode;
