"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";

type Props = {
  role: string;
};

export default function LoginCard({ role }: Props) {
  return (
    <main className="min-h-screen bg-[#F5F9FF] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-5xl bg-white rounded-[36px] shadow-2xl border border-[#E4EDF8] overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}

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

        {/* Right Section */}

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
            Sign in to continue to your <span className="font-semibold">{role}</span> Workspace.
          </p>

          <div className="mt-10 space-y-6">

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
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D8E4F2] focus:ring-2 focus:ring-[#0F6CBD] outline-none transition"
                />

              </div>

            </div>

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
                  className="w-full pl-12 pr-12 py-4 rounded-xl border border-[#D8E4F2] focus:ring-2 focus:ring-[#0F6CBD] outline-none transition"
                />

                <Eye
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                />

              </div>

            </div>

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

            <button className="w-full bg-[#0F6CBD] hover:bg-[#083A63] hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg">

              Sign In

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