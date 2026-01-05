import Link from "next/link";
import { Job } from "@/data/jobs";

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {job.title}
          </h3>
          <p className="text-sm text-gray-500">
            {job.company} • {job.location}
          </p>
        </div>

        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>{job.salary}</span>
        <span>{job.postedAt}</span>
      </div>
    </Link>
  );
}
