// routes/api/pets.router.js (new router to handle pets CRUD)
const express = require("express");
const Pet = require("../../models/pet");

const router = express.Router();

// Get all pets
router.get("/", async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).send(pets);
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = router;