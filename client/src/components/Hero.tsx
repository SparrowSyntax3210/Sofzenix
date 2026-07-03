import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F5F9FF] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <div>

          {/* Badge */}

          <span className="inline-block bg-[#EEF5FF] text-[#0F6CBD] px-5 py-2 rounded-full font-semibold text-sm tracking-wide">
            HUMAN RESOURCE MANAGEMENT PORTAL
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight text-[#0F172A]">
            Powering
            <br />
            Modern
            <br />
            Intern management
          </h1>

          {/* Description */}

          <p className="mt-8 text-xl leading-9 text-[#64748B] max-w-xl">
            Sofzenix HRM is an all-in-one platform designed for
            Internship Management, Recruitment Workflow, Learning Management,
            Team Collaboration, AI-powered Tools, Task Management and Analytics.
          </p>

          {/* Button */}

          <div className="mt-12">
            <Link
              href="/login/intern"
              className="inline-flex items-center bg-[#0F6CBD] hover:bg-[#083A63] hover:scale-105 transition-all duration-300 text-white px-10 py-4 rounded-xl font-semibold shadow-xl"
            >
              Intern Sign In →
            </Link>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative">

          <div className="absolute -top-10 -left-10 w-44 h-44 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-sky-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative bg-white rounded-[35px] border border-[#E4EDF8] shadow-2xl p-8 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)] transition-all duration-500">

            <Image
              src="/dashboard.svg.svg"
              alt="Sofzenix HRM Dashboard"
              width={700}
              height={700}
              priority
              className="w-full h-auto hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}