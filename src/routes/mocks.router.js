// mocks.router.js
const express = require("express");
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");
const User = require("../models/user");
const Pet = require("../models/pet");

const router = express.Router();

// Function to generate mock users
const generateMockUsers = (num) => {
    const users = [];
    for (let i = 0; i < num; i++) {
        users.push({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync("coder123", 10), // Encrypted password
            role: Math.random() < 0.5 ? "user" : "admin", // Random role
            pets: [] // Empty pets array
        });
    }
    return users;
};

// Endpoint to mock pets
router.get("/mockingpets", (req, res) => {
    const pets = Array.from({ length: 10 }, () => ({
        name: faker.animal.dog(),
        age: faker.number.int({ min: 1, max: 15 }),
        breed: faker.animal.cat()
    }));
    res.status(200).send(pets);
});

// Endpoint to mock users
router.get("/mockingusers", (req, res) => {
    const users = generateMockUsers(50);
    res.status(200).send(users);
});

// Endpoint to generate and insert mock data into the database
router.post("/generateData", async (req, res) => {
    const { users: numUsers, pets: numPets } = req.body;

    if (!numUsers || !numPets) {
        return res.status(400).send({ error: "Missing 'users' or 'pets' parameter." });
    }

    try {
        // Generate mock users and pets
        const users = generateMockUsers(numUsers);
        const pets = Array.from({ length: numPets }, () => ({
            name: faker.animal.dog(),
            age: faker.number.int({ min: 1, max: 15 }),
            breed: faker.animal.cat()
        }));

        // Insert data into MongoDB
        const insertedUsers = await User.insertMany(users);
        const insertedPets = await Pet.insertMany(pets);

        res.status(201).send({
            message: "Data generated and inserted successfully",
            users: insertedUsers,
            pets: insertedPets
        });
    } catch (error) {
        console.error("Error generating data: ", error);
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = router;
