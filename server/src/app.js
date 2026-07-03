const express = require("express");
const path = require("path");
const interview = require("../routes/interview");
const LogRoutes = require("../routes/auth.routes");
const adminRoutes = require("../routes/hr-creation.routes");
const hrRoutes = require("../routes/teamlead-creation.routes");
const validRoles = ["admin", "hr", "teamlead", "intern"];
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/api/v1/interns" , interview);
app.use("/login" , LogRoutes)
app.use("/admin", adminRoutes);
app.use("/hr", hrRoutes);


module.exports = app;