export default function AttendancePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-4xl font-bold mb-8">
        Attendance Management
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Attendance %
          </h2>

          <p className="text-4xl font-bold mt-3">
            92%
          </p>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Present Days
          </h2>

          <p className="text-4xl font-bold mt-3">
            23
          </p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Absent Days
          </h2>

          <p className="text-4xl font-bold mt-3">
            2
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Attendance History
        </h2>

        <table className="w-full border text-black">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="border p-3">Date</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-black">
              <td className="border p-3">24-Jun-2026</td>
              <td className="border p-3 text-green-600">
                Present
              </td>
            </tr>

            <tr className="text-black">
              <td className="border p-3">23-Jun-2026</td>
              <td className="border p-3 text-green-600">
                Present
              </td>
            </tr>

            <tr className="text-black">
              <td className="border p-3">22-Jun-2026</td>
              <td className="border p-3 text-red-600">
                Absent
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}