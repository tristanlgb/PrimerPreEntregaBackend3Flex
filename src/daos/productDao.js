// dao/productDao.js
const Product = require("../models/product");

class ProductDao {
    async getAllProducts() {
        try {
            return await Product.find();
        } catch (error) {
            throw new Error("Error fetching products");
        }
    }

    async createProduct(productData) {
        try {
            const product = new Product(productData);
            return await product.save();
        } catch (error) {
            throw new Error("Error creating product");
        }
    }
}

module.exports = new ProductDao();
