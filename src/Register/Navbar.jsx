import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/1st ap logo white-bg.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'HSC', path: '/hsc' },
    { name: 'SSC', path: '/ssc' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-green-100 to-green-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-60 mt-9 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-green-700 border-b-2 border-green-700 pb-1'
                    : 'text-gray-800 hover:text-green-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-gray-800 hover:text-green-700 focus:outline-none"
            >
              <svg
                className={`h-8 w-8 transition-transform duration-300 transform ${
                  mobileMenu ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth slide + fade + background color */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-green-50 shadow-inner`}
      >
        <ul className="flex flex-col p-4 space-y-3">
          {menuItems.map((item) => (
            <li key={item.name} className="transition-transform duration-300 transform hover:translate-x-2">
              <Link
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={`block font-semibold transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-green-700'
                    : 'text-gray-800 hover:text-green-700'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
