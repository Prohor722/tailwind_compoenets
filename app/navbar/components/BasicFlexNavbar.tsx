import React from "react";

const BasicFlexNavbar = () => {
  return (
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
  );
};

export default BasicFlexNavbar;
