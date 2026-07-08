"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          Sofzenix HRM
        </h1>

        <ul className="space-y-4">
          <li
            onClick={() => router.push("/dashboard/teamlead")}
            className="cursor-pointer hover:text-blue-200"
          >
            📊 Dashboard
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            👨‍🎓 Assigned Interns
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            ✅ Assigned Tasks
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            📅 Attendance
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            📈 Performance Reviews
          </li>

          <li
            onClick={() => router.push("/login")}
            className="cursor-pointer hover:text-blue-200"
          >
            🚪 Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 text-black">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-blue-600 font-semibold text-lg">
              Good Morning 👋
            </p>

            <h1 className="text-5xl font-bold text-gray-900 mt-1">
              Team Lead Dashboard
            </h1>

            <p className="text-gray-600 mt-2 text-lg max-w-3xl">
              Welcome back, Team Lead! Manage your assigned interns, review
              progress, assign tasks, and monitor attendance from one dashboard.
            </p>
          </div>

          <button
            onClick={() => router.push("/login")}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            Logout
          </button>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-3xl p-10 text-white shadow-xl mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold mb-3">
                Welcome to Sofzenix Team Lead Portal
              </h2>

              <p className="text-lg opacity-95 max-w-xl">
                Track intern performance, assign daily tasks, monitor
                attendance, review submissions, and guide interns throughout
                their internship journey.
              </p>

              <button
                onClick={() =>
                  router.push("/dashboard/teamlead/assigned-interns")
                }
                className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                View Assigned Interns →
              </button>
            </div>

            <div className="hidden md:block text-8xl">👨‍💼</div>
          </div>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
              👨‍💼
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Team Lead
              </h2>

              <p className="text-gray-600 mt-1">
                Software Development Team
              </p>

              <div className="flex gap-3 mt-4">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  Development
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  Mentor
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">
              Assigned Interns
            </h2>
            <p className="text-4xl font-bold mt-3">12</p>
          </div>

          <div className="bg-orange-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">
              Pending Tasks
            </h2>
            <p className="text-4xl font-bold mt-3">8</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">
              Completed Tasks
            </h2>
            <p className="text-4xl font-bold mt-3">43</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">
              Performance Reviews
            </h2>
            <p className="text-4xl font-bold mt-3">10</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-lg">
            <li>✅ Assigned New Task to Intern</li>
            <li>📄 Reviewed Weekly Report</li>
            <li>📅 Attendance Verified</li>
            <li>🏆 Performance Feedback Submitted</li>
          </ul>
        </div>

      </div>
    </div>
  );
}