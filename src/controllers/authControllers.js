// controllers/authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class AuthController {
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await userService.findUserByEmail(email);
            if (!user) return res.status(404).send({ error: "User not found" });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).send({ error: "Invalid credentials" });

            const token = jwt.sign({ user }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1h" });
            res.cookie("token", token, { httpOnly: true });
            res.status(200).send({ message: "Login successful" });
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    };

    logout = (req, res) => {
        res.clearCookie("token");
        res.status(200).send({ message: "Logged out successfully" });
    };
}

module.exports = new AuthController();
