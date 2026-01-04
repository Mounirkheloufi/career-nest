import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative flex flex-col items-center justify-center text-center py-24 px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-8">
            <span className="text-lg">✏️</span>
            Trusted by 10,000+ professionals
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight max-w-4xl">
            Build Your Career with <span className="text-blue-600">CareerNest</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            CareerNest connects talented professionals with companies looking for the right skills. Find your next opportunity or your next hire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="/post-job"
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
            >
              Post a Job
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Active Jobs</div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Companies</div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose <span className="text-blue-600">CareerNest?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Matching */}
            <div className="p-8 text-center bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                User dies op lung juist ditherught you suaich aut auoumentum
              </p>
            </div>
            
            {/* Fast Process */}
            <div className="p-8 text-center bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Process</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Con lorum winus que went you vialed to thoir dobus
              </p>
            </div>
            
            {/* Verified Companies */}
            <div className="p-8 text-center bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Verified Companies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All culhers yuu a arfe quilingic on writhube enet gomgnis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Join thousands of professionals who have found their dream job through CareerNest
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </main>
  );
}