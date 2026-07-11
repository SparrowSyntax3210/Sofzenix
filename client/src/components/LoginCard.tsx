"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  role: string;
};

export default function LoginCard({ role }: Props) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 const handleLogin = async () => {
  try {
    setLoading(true);
    setError("");

    let endpoint = "";

    switch (role.toLowerCase()) {
      case "administrator":
        endpoint = "admin";
        break;

      case "hr":
        endpoint = "hr";
        break;

      case "intern":
        endpoint = "intern";
        break;

      case "team lead":
        endpoint = "teamlead";
        break;

      default:
        endpoint = "intern";
    }

    console.log("Logging in as:", endpoint);

    const response = await fetch(`http://localhost:5000/login/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("Response Status:", response.status);

    const data = await response.json();

    console.log("Response Data:", data);

    if (!response.ok) {
      setError(data.message || "Login failed");
      return;
    }

    // Save token and user
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    console.log("Redirecting...");

    switch (endpoint) {
      case "admin":
        router.push("/dashboard/admin");
        break;

      case "hr":
        router.push("/dashboard/hr");
        break;

      case "intern":
        router.push("/dashboard/intern");
        break;

      case "teamlead":
        router.push("/dashboard/teamlead");
        break;

      default:
        router.push("/");
    }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F9FF] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-white rounded-[36px] shadow-2xl border border-[#E4EDF8] overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SECTION */}

        <div className="hidden lg:flex flex-col justify-center bg-[#EEF5FF] p-14">

          <Image
            src="/sofzenix.logo.png"
            alt="Sofzenix Logo"
            width={190}
            height={70}
            className="mb-8"
          />

          <h2 className="text-4xl font-black text-[#083A63] leading-tight">
            Welcome to
            <br />
            Sofzenix HRM
          </h2>

          <p className="mt-6 text-lg text-[#64748B] leading-8">
            Securely access your workspace to manage internships,
            recruitment, learning, tasks, communication and collaboration.
          </p>

          <Image
            src="/hero-dashboard.svg"
            alt="HRM Dashboard"
            width={500}
            height={500}
            className="mt-12"
          />

        </div>

        {/* RIGHT SECTION */}

        <div className="p-10 lg:p-14">

          <div className="lg:hidden flex justify-center mb-8">

            <Image
              src="/sofzenix.logo.png"
              alt="Sofzenix Logo"
              width={170}
              height={60}
            />

          </div>

          <h1 className="text-4xl font-black text-[#0F172A]">
            Welcome Back
          </h1>

          <p className="mt-3 text-[#64748B] text-lg">
            Sign in to continue to your{" "}
            <span className="font-semibold">{role}</span> Workspace.
          </p>

          <div className="mt-10 space-y-6">

            {/* Email */}

            <div>

              <label className="text-sm font-semibold text-[#0F172A]">
                Email Address
              </label>

              <div className="relative mt-2">

                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D8E4F2] focus:ring-2 focus:ring-[#0F6CBD] outline-none transition"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="text-sm font-semibold text-[#0F172A]">
                Password
              </label>

              <div className="relative mt-2">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border border-[#D8E4F2] focus:ring-2 focus:ring-[#0F6CBD] outline-none transition"
                />

                <Eye
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                />

              </div>

            </div>

            {/* Remember */}

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-[#475569]">

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                href="#"
                className="text-[#0F6CBD] hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Error */}

            {error && (
              <p className="text-red-600 text-center text-sm">
                {error}
              </p>
            )}

            {/* Login Button */}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-[#0F6CBD] hover:bg-[#083A63] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </div>

          <div className="mt-10 text-center text-sm text-[#64748B]">
            Secure access to the Sofzenix HRM Platform.
          </div>

        </div>

      </div>
    </main>
  );
}