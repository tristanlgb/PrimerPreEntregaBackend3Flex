// controllers/productController.js
const productService = require("../daos/productDao");

class ProductController {
    getAllProducts = async (req, res) => {
        try {
            const products = await productService.getAllProducts();
            res.status(200).send(products);
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    };

    createProduct = async (req, res) => {
        try {
            const product = req.body;
            const newProduct = await productService.createProduct(product);
            res.status(201).send(newProduct);
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    };
}

module.exports = new ProductController();
