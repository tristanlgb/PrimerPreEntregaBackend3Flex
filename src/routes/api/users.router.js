// routes/api/users.router.js (modified to include GET users)
const express = require("express");
const User = require("../../models/user");

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = router;