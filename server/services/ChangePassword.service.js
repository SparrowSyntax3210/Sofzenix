const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        if (!email || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Email and new password are required."
            });
        }

        const user = await prisma.login.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await prisma.login.update({
            where: {
                email
            },
            data: {
                password: hashedPassword
            }
        });

        return res.status(200).json({
            success: true,
            message: "Password changed successfully."
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};