import React from "react";
import { Menu, Home, User } from "lucide-react";
import GlassmorphismStyle from "./components/GlassmorphismStyle";
import BasicFlexNavbar from "./components/BasicFlexNavbar";
import CenteredBrandNavbar from "./components/CenteredBrandNavbar";

const Navbar = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-10">
        <h1 className="text-2xl font-bold text-gray-800">Tailwind Navbars</h1>

        <BasicFlexNavbar />

        <CenteredBrandNavbar />

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
