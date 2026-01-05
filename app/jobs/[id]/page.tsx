import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return jobs.map(job => ({
    id: job.id,
  }));
}

export default function JobDetailsPage({ params }: Props) {
  const job = jobs.find(j => j.id === params.id);

  if (!job) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main content */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {job.title}
          </h1>
          <p className="text-gray-500 mb-6">
            {job.company} • {job.location}
          </p>

          {/* Description */}
          <section className="mb-6">
            <h2 className="font-semibold mb-2">Job Description</h2>
            <p className="text-gray-600">{job.description}</p>
          </section>

          {/* Responsibilities */}
          <section className="mb-6">
            <h2 className="font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section className="mb-6">
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="font-semibold mb-2">Benefits</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              {job.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="bg-white p-6 rounded-2xl border border-gray-100 h-fit">
          <h3 className="font-semibold mb-4">Job Overview</h3>

          <div className="space-y-3 text-sm text-gray-600">
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Posted:</strong> {job.postedAt}</p>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </aside>

      </div>
    </main>
  );
}
