import Link from "next/link";

// Header Component
function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          Career<span className="text-blue-600">Nest</span>
        </Link>
        
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
        <button className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Header;
