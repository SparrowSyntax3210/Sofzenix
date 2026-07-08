const express = require("express");
const cors = require("cors");
const path = require("path");

const interview = require("../routes/interview");
const authRoutes = require("../routes/auth.routes");
const adminRoutes = require("../routes/hr-creation.routes");
const hrRoutes = require("../routes/teamlead-creation.routes");

const app = express();

const validRoles = ["admin", "hr", "teamlead", "intern"];

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api/v1/interns", interview);
app.use("/login", authRoutes);
app.use("/admin", adminRoutes);
app.use("/hr", hrRoutes);

// Home Route
app.get("/", (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
});

// Redirect login routes
app.get("/login/:role", (req, res) => {
    const { role } = req.params;

    if (!validRoles.includes(role)) {
        return res.status(404).send("Page Not Found");
    }

    res.redirect(`http://localhost:3000/login/${role}`);
});

module.exports = app;