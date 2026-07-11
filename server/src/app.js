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


module.exports = app;