const express = require("express");
const bcrypt = require("bcrypt");
const prisma = require("../config/prisma");
const auth = require("../services/authenticate");

const router = express.Router();

router.post("/create-teamlead", auth(["hr"]), async (req, res) => {
    try {
        const { email, password } = req.body;

        const existing = await prisma.login.findUnique({
            where: { email }
        });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const teamLead = await prisma.login.create({
            data: {
                email,
                password: hashedPassword,
                role: "teamlead"
            }
        });

        return res.status(201).json({
            success: true,
            message: "Team Lead created successfully",
            user: teamLead
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;