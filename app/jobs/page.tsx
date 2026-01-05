// app/jobs/page.tsx
import { jobs } from "@/data/jobs";
import JobCard from "@/components/jobs/JobCard";
import JobFilter from "@/components/jobs/JobFilter";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Search */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Find Your Next Opportunity
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Front end seat company ..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filter */}
          <div className="lg:col-span-1">
            <JobFilter />
          </div>

          {/* Jobs Listing */}
          <div className="lg:col-span-3">
            {/* Filter Tabs */}
            <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
              <button className="text-sm font-medium text-gray-900 border-b-2 border-blue-600 pb-2">
                Inbersad Oe
              </button>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-2">
                Adner
              </button>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-2">
                Job by
              </button>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-2 flex items-center gap-1">
                Salary
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="ml-auto text-sm text-gray-500">Sent Tob</div>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {jobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}