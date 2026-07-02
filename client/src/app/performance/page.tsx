export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-4xl font-bold mb-8">
        Performance Tracking
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Performance Score
          </h2>

          <p className="text-4xl font-bold mt-3">
            88%
          </p>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Attendance Score
          </h2>

          <p className="text-4xl font-bold mt-3">
            92%
          </p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Task Completion
          </h2>

          <p className="text-4xl font-bold mt-3">
            78%
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Overall Progress
        </h2>

        <div className="w-full bg-gray-300 rounded-full h-6">
          <div
            className="bg-green-600 h-6 rounded-full"
            style={{ width: "88%" }}
          ></div>
        </div>

        <p className="mt-4 text-lg font-semibold">
          Internship Progress: 88%
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Mentor Remarks
        </h2>

        <p>
          Good progress in UI development and module setup.
          Continue working on database integration and workflow implementation.
        </p>
      </div>
    </div>
  );
}