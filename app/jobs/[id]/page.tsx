// app/jobs/[id]/page.tsx
import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return jobs.map(job => ({
    id: job.id,
  }));
}

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  const job = jobs.find(j => j.id === id);

  if (!job) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">Frontend Developer</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center gap-3 text-gray-600 mb-4">
                    <span className="font-medium text-blue-600">{job.company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm">Design (1-1-1 Time)</span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      Pingelem
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      Stells
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {job.description}
              </p>

              {/* Requirements */}
              <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Responsibilities */}
              {job.responsibilities && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Benefits */}
              {job.benefits && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
                3
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
                4
              </button>
              <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Job Overview Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Job Overview
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Salary</div>
                    <div className="text-sm font-semibold text-gray-900">{job.salary}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Employment</div>
                    <div className="text-sm font-semibold text-gray-900">Top Priece</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Location:</div>
                    <div className="text-sm font-semibold text-gray-900">Sip jrumins</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Notasis</div>
                    <div className="text-sm font-semibold text-gray-900">30 lloess agos</div>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Job Info Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Job Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Salary</span>
                  <span className="font-semibold text-gray-900">{job.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employment</span>
                  <span className="font-semibold text-gray-900">Typhoid Rize Nane</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold text-blue-600">1. illeps ago</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}