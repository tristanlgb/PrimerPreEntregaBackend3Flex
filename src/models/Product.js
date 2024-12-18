// models/product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    thumbnail: { type: String },
    code: { type: String, unique: true, required: true },
    owner: { type: String, default: "admin" },
});

module.exports = mongoose.model("Product", productSchema);
