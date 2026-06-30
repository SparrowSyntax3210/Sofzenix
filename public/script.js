const pendingBtn = document.querySelector(".pending-applications");
const container = document.getElementById("applications");

// Load applications
async function loadPendingApplications() {
    try {

        const res = await fetch(
            "http://localhost:5000/api/v1/interns/pending-applications"
        );

        const data = await res.json();

        container.innerHTML = "";

        if (!data.success || data.applications.length === 0) {
            container.innerHTML = "<h2>No Pending Applications</h2>";
            return;
        }

        data.applications.forEach(app => {

            container.innerHTML += `
                <div class="card" data-id="${app.id}">

                    <h2>Candidate: ${app.name}</h2>

                    <h3>Applied Role: ${app.opportunity?.Role || "N/A"}</h3>

                    <p><strong>College:</strong> ${app.College}</p>
                    <p><strong>Aadhar:</strong> ${app.Aadhar}</p>

                    <p>
                        <strong>Certificate:</strong>
                        <a href="${app.Certificate}" target="_blank">View</a>
                    </p>

                    <p>
                        <strong>Resume:</strong>
                        <a href="${app.Resume}" target="_blank">View</a>
                    </p>

                    <p>
                        <strong>Status:</strong> ${app.status}
                    </p>

                    <button class="approve-btn" data-id="${app.id}">
                        Approve
                    </button>

                    <button class="reject-btn" data-id="${app.id}">
                        Reject
                    </button>

                    <hr>
                </div>
            `;
        });

    } catch (err) {
        console.error(err);
        alert("Couldn't load applications");
    }
}

// Click handler for loading
pendingBtn.addEventListener("click", loadPendingApplications);

// Event delegation for approve/reject
container.addEventListener("click", async (e) => {

    const id = e.target.dataset.id;

    if (!id) return;

    // APPROVE
    if (e.target.classList.contains("approve-btn")) {

        const res = await fetch(
            `http://localhost:5000/api/v1/interns/applications/${id}/status`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "Approved" })
            }
        );

        const data = await res.json();

        if (data.success) {
            e.target.closest(".card").remove();
            alert("Application Approved");
        }
    }

    // REJECT
    if (e.target.classList.contains("reject-btn")) {

        const res = await fetch(
            `http://localhost:5000/api/v1/interns/applications/${id}/status`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "Rejected" })
            }
        );

        const data = await res.json();

        if (data.success) {
            e.target.closest(".card").remove();
            alert("Application Rejected");
        }
    }
});