"use client"
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          Career<span className="text-blue-600">Nest</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/jobs" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Jobs
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium"
          >
            Register
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-4 bg-white border-t border-gray-200 space-y-3">
          <Link 
            href="/jobs" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            Jobs
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;