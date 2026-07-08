const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, role) => {
  try {
    console.log("Incoming Login Request:");
    console.log(req.body);
    console.log("Role:", role);

    const { email, password } = req.body;

    const user = await prisma.login.findFirst({
      where: {
        email,
        role,
      },
    });

    console.log("User Found:", user);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:");
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};