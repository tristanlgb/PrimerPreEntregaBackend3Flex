// dao/cartDao.js
const Cart = require("../models/cart");

class CartDao {
    async getCart(cartId) {
        try {
            return await Cart.findById(cartId).populate("products.product");
        } catch (error) {
            throw new Error("Error fetching cart");
        }
    }

    async addProductToCart(cartId, productId, quantity) {
        try {
            const cart = await Cart.findById(cartId);
            if (!cart) throw new Error("Cart not found");

            const productIndex = cart.products.findIndex((p) => p.product.toString() === productId);
            if (productIndex > -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }

            return await cart.save();
        } catch (error) {
            throw new Error("Error adding product to cart");
        }
    }
}

module.exports = new CartDao();
