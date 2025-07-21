'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/button', label: 'Buttons' },
  { href: '/navbar', label: 'Navbar' },
  { href: '/form', label: 'Forms', disabled: true },
  { href: '/table', label: 'Tables' },
  { href: '/card', label: 'Cards' },
  { href: '/input-field', label: 'Inputs' },
  { href: '/image', label: 'Images', disabled: true },
  
];

export const NavHome = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Hamburger toggle (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Combined Nav Items (Responsive) */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0`}
      >
        {navLinks.map((link) =>
          link.disabled ? (
            <span
              key={link.href}
              className="px-4 py-2 text-gray-400 cursor-not-allowed font-medium transition"
            >
              {link.label}
            </span>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
