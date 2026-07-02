export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-4xl font-bold mb-8">
        Certificate Management
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Internship Progress
          </h2>

          <p className="text-4xl font-bold mt-3">
            70%
          </p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Eligibility Status
          </h2>

          <p className="text-2xl font-bold mt-3">
            In Progress
          </p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Certificate Status
          </h2>

          <p className="text-2xl font-bold mt-3">
            Not Generated
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Certificate Information
        </h2>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Certificate</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">
                Internship Completion Certificate
              </td>
              <td className="border p-3 text-orange-600 font-semibold">
                Pending
              </td>
            </tr>
          </tbody>
        </table>

        <button
          disabled
          className="mt-6 bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
}