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
            onClick={() => router.push("/dashboard/hr")}
            className="cursor-pointer hover:text-blue-200"
          >
            📊 Dashboard
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            📄 Internship Applications
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            👨‍🎓 Interns
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            👨‍💼 Team Leads
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            📝 Offer Letters
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            📜 Certificates
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            📅 Attendance
          </li>

          <li className="cursor-pointer hover:text-blue-200">
            ⚙️ Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 text-black">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-blue-600 font-semibold text-lg">
              Good Morning 👋
            </p>

            <h1 className="text-5xl font-bold text-gray-900 mt-1">
              HR Dashboard
            </h1>

            <p className="text-gray-600 mt-2 text-lg">
              Welcome back, HR Manager!
              Manage Internship applications, onboarding, team leads, and interns from one place.
            </p>
          </div>

          <button
            onClick={() => router.push("/login")}
            className="bg-red-500 hover:bg-red-600 transition-all text-white px-6 py-3 rounded-xl shadow-lg"
          >
            Logout
          </button>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 rounded-3xl p-10 text-white shadow-xl mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold mb-3">
                Welcome to Sofzenix HRM
              </h2>

              <p className="text-lg opacity-95 max-w-xl">
                Review internship applications, verify documents, generate offer letters, assign team leads, and monitor interns from one centralized HR dashboard
              </p>

              <button
                onClick={() => router.push("http://localhost:5000/api/v1/interns/pending-applications")}
                className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                View Applications →
              </button>
            </div>

            <div className="hidden md:block text-8xl">💼</div>
          </div>
        </div>

        {/* Intern Profile */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
              👩‍💼
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">HR Manager</h2>

              <p className="text-gray-600 mt-1">
                Human Resources Department
              </p>

              <div className="flex gap-3 mt-4">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  HR
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  Recruitment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Total Applications</h2>
            <p className="text-4xl font-bold mt-3">156</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Pending Applications</h2>
            <p className="text-4xl font-bold mt-3">28</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Approved Interns</h2>
            <p className="text-4xl font-bold mt-3">94</p>
          </div>

          <div className="bg-orange-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Offer Letters Sent</h2>
            <p className="text-4xl font-bold mt-3">82</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-lg text-black">
            <li>📄 12 Internship Applications Received</li>
            <li>✅ 5 Applications Approved</li>
            <li>📧 Offer Letters Sent</li>
            <li>👨‍💼 Team Leads Assigned</li>
          </ul>
        </div>
      </div>
    </div>
  );
}