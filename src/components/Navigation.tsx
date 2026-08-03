import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/b1faa4031595f1461db9b2a05d08177da0e5c2ec.png';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*
   * Projects is intentionally absent: the page is an empty "coming soon"
   * placeholder, and a nav item that leads nowhere costs credibility. The route
   * still resolves so existing links do not 404 — restore the nav entry once
   * there is a first project to show. The full collapse to six items lands in
   * ticket 14.
   */
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Advisors', path: '/advisors' },
    { name: 'Focus Areas', path: '/focus-areas' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  // External platform link
  const platformUrl = '#'; // TODO: Change to the actual platform URL

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="CDD Pays-Bas" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/30'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* CDD Smart Platform Link */}
            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              CDD Smart Platform
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* CDD Smart Platform Link - Mobile */}
            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              CDD Smart Platform
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}