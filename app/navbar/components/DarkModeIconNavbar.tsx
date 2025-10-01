import { Home, Menu, User } from "lucide-react";

const DarkModeIconNavbar = () => {
  return (
    <nav className="w-full max-w-4xl bg-gray-900 text-white px-6 py-4 rounded flex justify-between items-center shadow">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Menu size={20} />
        <span>DarkNav</span>
      </div>
      <ul className="flex gap-6 items-center">
        <li>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300">
            <Home size={18} />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300">
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
  );
};

export default DarkModeIconNavbar;
