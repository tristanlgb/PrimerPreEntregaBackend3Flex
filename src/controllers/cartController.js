// controllers/cartController.js
const cartService = require("../daos/cartDao");

class CartController {
    getCart = async (req, res) => {
        try {
            const cart = await cartService.getCart(req.params.id);
            if (!cart) return res.status(404).send({ error: "Cart not found" });

            res.status(200).send(cart);
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    };

    addProduct = async (req, res) => {
        try {
            const { productId, quantity } = req.body;
            const updatedCart = await cartService.addProductToCart(req.params.id, productId, quantity);
            res.status(200).send(updatedCart);
        } catch (error) {
            res.status(500).send({ error: "Internal server error" });
        }
    };
}

module.exports = new CartController();
