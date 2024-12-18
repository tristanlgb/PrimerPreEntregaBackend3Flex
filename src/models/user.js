// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'premium'], default: 'user' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
