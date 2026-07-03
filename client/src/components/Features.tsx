import {
  Briefcase,
  UserCheck,
  BookOpen,
  Bot,
  ClipboardList,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Internship Management",
    description:
      "Manage the complete internship lifecycle from onboarding to completion with a centralized workflow.",
    icon: Briefcase,
  },
  {
    title: "Recruitment Workflow",
    description:
      "Simplify application screening, approvals, interview tracking and hiring processes.",
    icon: UserCheck,
  },
  {
    title: "Learning Management",
    description:
      "Provide learning resources, assessments and training programs through one platform.",
    icon: BookOpen,
  },
  {
    title: "AI Powered Tools",
    description:
      "Leverage intelligent automation to improve productivity and decision making.",
    icon: Bot,
  },
  {
    title: "Task Management",
    description:
      "Assign, monitor and review tasks while tracking project progress efficiently.",
    icon: ClipboardList,
  },
  {
    title: "Analytics & Reports",
    description:
      "Gain real-time insights using dashboards, reports and performance analytics.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#F5F9FF]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="inline-block bg-[#EEF5FF] text-[#0F6CBD] px-5 py-2 rounded-full font-semibold text-sm">
            PLATFORM FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#0F172A]">
            Everything You Need In One Platform
          </h2>

          <p className="mt-6 text-lg text-[#64748B] max-w-3xl mx-auto leading-8">
            Sofzenix HRM combines recruitment, internship management,
            learning, collaboration and analytics into one modern intern management
            platform.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-white border border-[#E4EDF8] rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#EEF5FF] flex items-center justify-center group-hover:bg-[#0F6CBD] transition">

                  <Icon
                    size={32}
                    className="text-[#0F6CBD] group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#083A63]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[#64748B] leading-8">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}