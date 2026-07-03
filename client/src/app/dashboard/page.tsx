"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Sofzenix HRM</h1>

        <ul className="space-y-4">
          <li
            onClick={() => router.push("/dashboard")}
            className="cursor-pointer hover:text-blue-200"
          >
            📊 Dashboard
          </li>

          <li
            onClick={() => router.push("/attendance")}
            className="cursor-pointer hover:text-blue-200"
          >
            📅 Attendance
          </li>

          <li
            onClick={() => router.push("/tasks")}
            className="cursor-pointer hover:text-blue-200"
          >
            ✅ Tasks
          </li>

          <li
            onClick={() => router.push("/performance")}
            className="cursor-pointer hover:text-blue-200"
          >
            📈 Performance
          </li>

          <li
            onClick={() => router.push("/certificates")}
            className="cursor-pointer hover:text-blue-200"
          >
            🏆 Certificates
          </li>

          <li
            onClick={() => router.push("/settings")}
            className="cursor-pointer hover:text-blue-200"
          >
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
              Intern Dashboard
            </h1>

            <p className="text-gray-600 mt-2 text-lg">
              Welcome back, Pranathi! Track your internship progress from one
              place.
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
                Manage your attendance, internship tasks, performance,
                certificates and daily activities through one modern dashboard.
              </p>

              <button
                onClick={() => router.push("/tasks")}
                className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                View Tasks →
              </button>
            </div>

            <div className="hidden md:block text-8xl">💼</div>
          </div>
        </div>

        {/* Intern Profile */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
              👩🏻‍💻
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">Pranathi</h2>

              <p className="text-gray-600 mt-1">Software Engineering Intern</p>

              <div className="flex gap-3 mt-4">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  Active
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  CSE Department
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Attendance</h2>
            <p className="text-4xl font-bold mt-3">92%</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Weekly Hours</h2>
            <p className="text-4xl font-bold mt-3">18 hrs</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Tasks Completed</h2>
            <p className="text-4xl font-bold mt-3">8</p>
          </div>

          <div className="bg-orange-600 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Performance Score</h2>
            <p className="text-4xl font-bold mt-3">88</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-black">Recent Activity</h2>

          <ul className="space-y-3 text-lg text-black">
            <li>✅ Task Submission Completed</li>
            <li>📅 Attendance Marked Today</li>
            <li>🏆 Performance Updated</li>
            <li>📄 Offer Letter Generated</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
