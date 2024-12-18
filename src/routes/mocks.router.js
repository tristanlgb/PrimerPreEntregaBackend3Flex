const express = require("express");
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");
const User = require("../models/user");
const Pet = require("../models/pet");

const router = express.Router();

// Generate mock users
const generateMockUsers = (num) => {
    const users = [];
    for (let i = 0; i < num; i++) {
        users.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync("coder123", 10),
            role: Math.random() < 0.5 ? "user" : "admin",
            pets: [],
        });
    }
    return users;
};

// Mocking pets endpoint
router.get("/mockingpets", (req, res) => {
    const pets = Array.from({ length: 10 }, () => ({
        name: faker.animal.dog(),
        age: faker.number.int({ min: 1, max: 15 }), // Updated to use faker.number.int
        breed: faker.animal.cat(),
    }));
    res.status(200).send(pets);
});
// Mocking users endpoint
router.get("/mockingpets", (req, res) => {
    const pets = Array.from({ length: 10 }, () => ({
        name: faker.animal.dog(),
        age: faker.number.int({ min: 1, max: 15 }), // Updated to use faker.number.int
        breed: faker.animal.cat(),
    }));
    res.status(200).send(pets);
});

// Generate data endpoint
router.post("/generateData", async (req, res) => {
    const { users: numUsers, pets: numPets } = req.body;

    if (!numUsers || !numPets) {
        return res.status(400).send({ error: "Missing users or pets parameter." });
    }

    try {
        const users = generateMockUsers(numUsers);
        const pets = Array.from({ length: numPets }, () => ({
            name: faker.animal.dog(),
            age: faker.datatype.number({ min: 1, max: 15 }),
            breed: faker.animal.cat(),
        }));

        // Insert users into the database
        await User.insertMany(users);

        // Insert pets into the database
        await Pet.insertMany(pets);

        res.status(201).send({ message: "Data generated successfully", users, pets });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = router;