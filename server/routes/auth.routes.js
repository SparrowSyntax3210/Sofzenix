const express = require("express");
const router = express.Router();

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


module.exports = router;