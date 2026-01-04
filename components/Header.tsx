"use client"
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo avec icône */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">CareerNest</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Jobs
          </Link>
          <Link href="/companies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Companies
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
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
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            href="/jobs" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Jobs
          </Link>
          <Link 
            href="/companies" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Companies
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;