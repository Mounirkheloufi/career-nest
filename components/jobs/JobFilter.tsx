export default function JobFilter() {
  return (
    <aside className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
      <h3 className="font-semibold text-gray-900">Filter Jobs</h3>

      {/* Keyword */}
      <div>
        <label className="text-sm text-gray-600">Keyword</label>
        <input
          type="text"
          placeholder="Job title or keyword"
          className="mt-2 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Location */}
      <div>
        <label className="text-sm text-gray-600">Location</label>
        <select className="mt-2 w-full rounded-lg border-gray-300">
          <option>All</option>
          <option>Remote</option>
          <option>On-site</option>
        </select>
      </div>

      {/* Job Type */}
      <div>
        <label className="text-sm text-gray-600">Job Type</label>
        <select className="mt-2 w-full rounded-lg border-gray-300">
          <option>All</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Remote</option>
          <option>Hybrid</option>
        </select>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Apply Filters
      </button>
    </aside>
  );
}
