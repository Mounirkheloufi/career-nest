export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-gray-900">
          Career<span className="text-blue-600">Nest</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Jobs</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Companies</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
        </div>
        <button className="px-5 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          🚀 Trusted by 10,000+ professionals
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent leading-tight">
          Build Your Career with CareerNest
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
          CareerNest connects talented professionals with companies looking
          for the right skills. Find your next opportunity or your next hire.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
            Post a Job
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Active Jobs</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Companies</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose CareerNest?</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            We provide the tools and connections you need to succeed in your career journey
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-white text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Matching</h3>
              <p className="text-gray-600">Our AI-powered algorithm matches you with the perfect opportunities based on your skills and preferences.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 text-white text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Process</h3>
              <p className="text-gray-600">Apply to jobs in seconds and get responses faster than traditional job boards.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 text-white text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Companies</h3>
              <p className="text-gray-600">All companies on our platform are verified to ensure quality and legitimacy.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}