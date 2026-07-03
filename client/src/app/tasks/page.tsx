export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-4xl font-bold mb-8">
        Task Management
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Total Tasks
          </h2>

          <p className="text-4xl font-bold mt-3">
            9
          </p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Completed
          </h2>

          <p className="text-4xl font-bold mt-3">
            7
          </p>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Pending
          </h2>

          <p className="text-4xl font-bold mt-3">
            2
          </p>
        </div>
      </div>

      {/* Task Table */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Task List
        </h2>

        <table className="w-full border border-gray-300 text-black">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="border p-3">Task</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Due Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">Login UI</td>
              <td className="border p-3 text-green-600 font-semibold">
                Completed
              </td>
              <td className="border p-3">24-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Register UI</td>
              <td className="border p-3 text-green-600 font-semibold">
                Completed
              </td>
              <td className="border p-3">24-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Dashboard UI</td>
              <td className="border p-3 text-green-600 font-semibold">
                Completed
              </td>
              <td className="border p-3">24-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Sidebar Navigation</td>
              <td className="border p-3 text-green-600 font-semibold">
                Completed
              </td>
              <td className="border p-3">24-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Logout Functionality</td>
              <td className="border p-3 text-green-600 font-semibold">
                Completed
              </td>
              <td className="border p-3">24-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Attendance Module</td>
              <td className="border p-3 text-green-600 font-semibold">
                Completed
              </td>
              <td className="border p-3">25-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Task Management Module</td>
              <td className="border p-3 text-green-600 font-semibold">
                Completed
              </td>
              <td className="border p-3">25-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Performance Module</td>
              <td className="border p-3 text-red-600 font-semibold">
                Pending
              </td>
              <td className="border p-3">26-Jun-2026</td>
            </tr>

            <tr>
              <td className="border p-3">Database Integration</td>
              <td className="border p-3 text-red-600 font-semibold">
                Pending
              </td>
              <td className="border p-3">27-Jun-2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}