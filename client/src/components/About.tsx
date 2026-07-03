import {
  Target,
  ShieldCheck,
  Workflow,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="inline-block bg-[#EEF5FF] text-[#0F6CBD] px-5 py-2 rounded-full font-semibold text-sm">
            ABOUT SOFZENIX HRM
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#0F172A]">
            One Platform. Complete intern cycle Management.
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#64748B] max-w-4xl mx-auto">
            Sofzenix HRM is a unified platform designed to simplify
            internship management, recruitment workflows, learning management,
            project collaboration and workforce operations.
            It connects Interns, HRs, Team Leads and Administrators through one
            secure digital workspace to improve efficiency, transparency and
            productivity.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          <div className="group bg-[#F5F9FF] rounded-3xl border border-[#E4EDF8] p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <Target
              size={46}
              className="text-[#0F6CBD] group-hover:scale-110 transition"
            />

            <h3 className="mt-6 text-2xl font-bold text-[#083A63]">
              Mission
            </h3>

            <p className="mt-4 text-[#64748B] leading-7">
              Deliver a modern HRM platform that simplifies intern
              operations and improves productivity.
            </p>

          </div>

          <div className="group bg-[#F5F9FF] rounded-3xl border border-[#E4EDF8] p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <ShieldCheck
              size={46}
              className="text-[#0F6CBD] group-hover:scale-110 transition"
            />

            <h3 className="mt-6 text-2xl font-bold text-[#083A63]">
              Secure
            </h3>

            <p className="mt-4 text-[#64748B] leading-7">
              Secure role-based authentication and centralized access control
              for every user.
            </p>

          </div>

          <div className="group bg-[#F5F9FF] rounded-3xl border border-[#E4EDF8] p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <Workflow
              size={46}
              className="text-[#0F6CBD] group-hover:scale-110 transition"
            />

            <h3 className="mt-6 text-2xl font-bold text-[#083A63]">
              Smart Workflow
            </h3>

            <p className="mt-4 text-[#64748B] leading-7">
              Automate recruitment, onboarding, approvals, task allocation and
              collaboration.
            </p>

          </div>

          <div className="group bg-[#F5F9FF] rounded-3xl border border-[#E4EDF8] p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <TrendingUp
              size={46}
              className="text-[#0F6CBD] group-hover:scale-110 transition"
            />

            <h3 className="mt-6 text-2xl font-bold text-[#083A63]">
              Scalable
            </h3>

            <p className="mt-4 text-[#64748B] leading-7">
              Designed to grow with organizations while maintaining performance
              and reliability.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}