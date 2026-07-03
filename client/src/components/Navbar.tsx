"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F5F9FF]/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/sofzenix.logo.png"
            alt="Sofzenix HRM"
            width={52}
            height={52}
            priority
          />

          <div>

            <h1 className="text-2xl font-black tracking-wide text-[#083A63]">
              SOFZENIX HRM
            </h1>

            <p className="text-xs text-[#64748B]">
              Human Resource Management Portal
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center bg-white border border-[#E4EDF8] rounded-full shadow-xl px-3 py-2">

          <a
            href="#home"
            className="px-6 py-3 rounded-full text-[#0F172A] font-medium hover:bg-[#EEF5FF] transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded-full text-[#0F172A] font-medium hover:bg-[#EEF5FF] transition-all duration-300"
          >
            About
          </a>

          <a
            href="#features"
            className="px-6 py-3 rounded-full text-[#0F172A] font-medium hover:bg-[#EEF5FF] transition-all duration-300"
          >
            Features
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-[#0F172A] font-medium hover:bg-[#EEF5FF] transition-all duration-300"
          >
            Contact
          </a>

          {/* Intern Login Button */}

          <Link
            href="/login/intern"
            className="ml-4 bg-[#0F6CBD] hover:bg-[#083A63] hover:scale-105 transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl"
          >
            Intern Sign In
          </Link>

        </nav>

      </div>

    </header>
  );
}