export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#EEF5FF]"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#0F172A]">
            Contact Us
          </h2>

          <p className="mt-5 text-lg text-[#64748B] max-w-2xl mx-auto">
            Need assistance regarding the Sofzenix HRM Platform?
            Our team is always ready to help you.
          </p>

        </div>

        {/* Contact Card */}

        <div className="bg-white rounded-[32px] shadow-xl border border-[#E4EDF8] p-12">

          <div className="grid lg:grid-cols-2 gap-14">

            {/* Left */}

            <div>

              <h3 className="text-3xl font-bold text-[#083A63] mb-8">
                Get In Touch
              </h3>

              <div className="space-y-8">

                <div>
                  <p className="text-sm uppercase tracking-wider text-[#64748B]">
                    Email
                  </p>

                  <p className="text-xl font-semibold text-[#0F172A]">
                    contact@sofzenix.in
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-[#64748B]">
                    Phone
                  </p>

                  <p className="text-xl font-semibold text-[#0F172A]">
                    +91 63058 18324
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-[#64748B]">
                    Location
                  </p>

                  <p className="text-xl font-semibold text-[#0F172A]">
                    Hyderabad, Telangana - 500032
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-[#F5F9FF] rounded-3xl p-10 border border-[#E4EDF8]">

              <h3 className="text-2xl font-bold text-[#083A63]">
                Why Sofzenix HRM?
              </h3>

              <ul className="mt-8 space-y-5 text-[#64748B] text-lg">

                <li>✔ Internship Management</li>

                <li>✔ Recruitment Workflow Automation</li>

                <li>✔ Learning Management System</li>

                <li>✔ AI Powered Tools</li>

                <li>✔ Task & Performance Management</li>

                <li>✔ Secure Role-Based Access</li>

              </ul>

              <button className="mt-10 bg-[#0F6CBD] hover:bg-[#083A63] transition text-white font-semibold px-8 py-4 rounded-xl shadow-lg">
                Contact Support
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}