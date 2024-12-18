// routes/views.router.js
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.render("home"));
router.get("/cart", (req, res) => res.render("cart"));
router.get("/product/:id", (req, res) => res.render("productDetail"));

module.exports = router;
