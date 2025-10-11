import React from "react";

const GradientBorder = () => {
  const [mobileMenu2, setMobileMenu2] = useState(false);
  return (
    <nav className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <div className="text-2xl font-black bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              NEXUS
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Analytics
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
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

          <button
            onClick={() => setMobileMenu2(!mobileMenu2)}
            className="lg:hidden"
          >
            {mobileMenu2 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu2 && (
          <div className="lg:hidden mt-4 space-y-3 pb-4 pt-4 border-t border-gray-100">
            <a href="#" className="block text-gray-700">
              Dashboard
            </a>
            <a href="#" className="block text-gray-700">
              Analytics
            </a>
            <a href="#" className="block text-gray-700">
              Team
            </a>
            <a href="#" className="block text-gray-700">
              Projects
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GradientBorder;
