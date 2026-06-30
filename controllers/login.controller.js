const login = require("../services/login.service");

exports.internLogin = (req, res) => {
    login(req, res, "intern");
};

exports.hrLogin = (req, res) => {
    login(req, res, "hr");
};

exports.adminLogin = (req, res) => {
    login(req, res, "admin");
};

exports.teamLeadLogin = (req, res) => {
    login(req, res, "teamlead");
};