// components/jobs/JobCard.tsx
import Link from "next/link";
import { Job } from "@/data/jobs";

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
        {/* Company Logo/Icon */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          {/* Title and Salary */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{job.company}</span>
                <span className="text-gray-400">•</span>
                <span>{job.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">{job.salary}</div>
              <div className="text-xs text-gray-500">Per month</div>
            </div>
          </div>

          {/* Location and Time Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Espan (1-1-1/ms)</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>5-10yals ca ape Ticennes</span>
            </div>
          </div>

          {/* Footer with Apply Button */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="text-xs text-gray-500">{job.postedAt}</span>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}