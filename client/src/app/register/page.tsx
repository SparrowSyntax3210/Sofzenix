"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Register
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="border w-full p-3 mb-4 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-3 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 mb-4 rounded"
        />

        <button
          onClick={() => router.push("/login")}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}