// utils/jwt.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => jwt.sign({ user }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1h" });

const verifyToken = (token) => jwt.verify(token, process.env.JWT_PRIVATE_KEY);

module.exports = { generateToken, verifyToken };
