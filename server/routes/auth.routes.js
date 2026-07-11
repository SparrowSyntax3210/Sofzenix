const express = require("express");
const router = express.Router();
const authController = require("../controllers/login.controller");

const {
    internLogin,
    hrLogin,
    adminLogin,
    teamLeadLogin
} = require("../controllers/login.controller");

router.post("/intern", internLogin);
router.post("/hr", hrLogin);
router.post("/admin", adminLogin);
router.post("/teamlead", teamLeadLogin);
router.put("/change-password", authController.changePassword);


module.exports = router;