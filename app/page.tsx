import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white">
        {/* Background Image - Replace '/clouds-bg.jpg' with your actual image path */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/clouds-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-120"
            priority
          />
        </div>

        {/* Decorative Cloud Shapes - Optional, remove if image provides enough effect */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.8" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,58.7C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center py-15 px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-600 rounded-full text-sm font-medium mb-8">
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
      <section className="py-2 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose <span className="text-blue-600">CareerNest ?</span>
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