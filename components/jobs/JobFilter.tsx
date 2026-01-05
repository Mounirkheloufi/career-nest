// components/jobs/JobFilter.tsx
export default function JobFilter() {
  return (
    <aside className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">Filter Jobs</h3>
        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          Clear
        </button>
      </div>

      <div className="space-y-5">
        {/* Keyword */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Keyword
          </label>
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="mclup"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Jow Type
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Resettience</span>
            </label>
          </div>
        </div>

        {/* Salary Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Salaray
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="salary"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">153810430 - 1185u440</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="salary"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">18,81B0430 - 18.36.81300</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="salary"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">18,118,30 - Not 01200</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}