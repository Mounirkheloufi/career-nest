import { jobs } from "@/data/jobs";
import JobCard from "@/components/jobs/JobCard";
import JobFilter from "@/components/jobs/JobFilter";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Find Your Next Opportunity
          </h1>
          <p className="text-gray-600 mt-2">
            Browse jobs from top companies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <JobFilter />
          </div>

          {/* Jobs list */}
          <div className="lg:col-span-3 space-y-6">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
