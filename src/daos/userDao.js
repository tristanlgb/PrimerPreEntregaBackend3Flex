// dao/userDao.js
const User = require("../models/users");

class UserDao {
    async findUserByEmail(email) {
        try {
            return await User.findOne({ email });
        } catch (error) {
            throw new Error("Error fetching user by email");
        }
    }

    async createUser(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw new Error("Error creating user");
        }
    }
}

module.exports = new UserDao();