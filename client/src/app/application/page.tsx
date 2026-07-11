export default function ApplicationPage() {
  const handleSubmit = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/interns/pending-applications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // send form data here
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Submission failed");
      return;
    }

    alert("Application submitted successfully!");
  } catch (error) {
    console.error(error);
    alert("Unable to connect to server");
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-4">
            📄
          </div>

          <h1 className="text-5xl font-bold text-gray-900">
            Student Application Form
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Fill in your details and upload the required documents
          </p>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          {/* Personal Details */}
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            👤 Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-black">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full mt-2 border border-gray-300 p-3 rounded-xl text-black"
              />
            </div>

            <div>
              <label className="font-semibold text-black">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full mt-2 border border-gray-300 p-3 rounded-xl text-black"
              />
            </div>

            <div>
              <label className="font-semibold text-black">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full mt-2 border border-gray-300 p-3 rounded-xl text-black"
              />
            </div>

            <div>
              <label className="font-semibold text-black">
                College Name
              </label>

              <input
                type="text"
                placeholder="Enter College Name"
                className="w-full mt-2 border border-gray-300 p-3 rounded-xl text-black"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="font-semibold text-black">
              Branch / Department
            </label>

            <input
              type="text"
              placeholder="Enter Branch / Department"
              className="w-full mt-2 border border-gray-300 p-3 rounded-xl text-black"
            />
          </div>

          {/* Upload Section */}
          <h2 className="text-2xl font-bold text-blue-600 mt-10 mb-6">
            📎 Documents Upload
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-xl text-black mb-4">
                Resume
              </h3>

              <input type="file" className="w-full" />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-xl text-black mb-4">
                Aadhaar / ID Proof
              </h3>

              <input type="file" className="w-full" />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-xl text-black mb-4">
                College ID
              </h3>

              <input type="file" className="w-full" />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-xl text-black mb-4">
                Certificates
              </h3>

              <input type="file" className="w-full" />
            </div>
          </div>

          {/* Submit Button */}
          <button onClick={handleSubmit} id="Submit" className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 rounded-xl transition">
            🚀 Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}