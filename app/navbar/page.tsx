import React from "react";
import { Menu, Home, User } from "lucide-react";
import GlassmorphismStyle from "./components/GlassmorphismStyle";

const Navbar = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-10">
        <h1 className="text-2xl font-bold text-gray-800">Tailwind Navbars</h1>

        {/* Basic Flex Navbar */}
        <nav className="w-full max-w-4xl flex items-center justify-between bg-white shadow px-6 py-4 rounded">
          <div className="text-xl font-bold text-blue-600">MyApp</div>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Centered Brand Navbar */}
        <nav className="w-full max-w-4xl bg-blue-50 px-6 py-4 rounded flex flex-col md:flex-row md:items-center md:justify-between shadow">
          <div className="text-2xl font-semibold text-blue-700 text-center md:text-left">
            BrandName
          </div>
          <ul className="flex justify-center gap-6 mt-4 md:mt-0 font-medium text-blue-800">
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Docs
              </a>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Icon Navbar */}
        <nav className="w-full max-w-4xl bg-gray-900 text-white px-6 py-4 rounded flex justify-between items-center shadow">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Menu size={20} />
            <span>DarkNav</span>
          </div>
          <ul className="flex gap-6 items-center">
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                <Home size={18} />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                <User size={18} />
                Profile
              </a>
            </li>
            <li>
              <button className="bg-blue-600 px-4 py-1.5 rounded hover:bg-blue-700 text-sm">
                Login
              </button>
            </li>
          </ul>
        </nav>

        <GlassmorphismStyle />
      </div>
    </div>
  );
};

export default Navbar;
