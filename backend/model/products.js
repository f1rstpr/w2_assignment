const { BadRequestError } = require("../utils/error");
const { storage } = require("../data/storage");

class Products {
    static async getProducts() {
        const products = storage.get("products").value();
        return products;
    }

    static async getSingleProduct(productId) {
        const product = storage
            .get("products")
            .find({ id: Number(productId) })
            .value();
        return product;
    }

    static async testOrder(cartObj) {
        if (!("cart" in cartObj)) {
            throw new BadRequestError("cart key not in request.body");
        }

        const products = await Products.getProducts();
        const cart = cartObj.cart;

        let totalCost = 0;
        for (const item_name in cart) {
            console.log(item_name);
            for (const p of products) {
                if (p.name === item_name) {
                    let amount = cart[item_name].quantity;
                    totalCost += amount * p.price;
                }
            }
        }

        return {
            // name: cartObj.userInfo.name,
            // email: cartObj.userInfo.email,
            totalCost: totalCost.toFixed(2),
            cart: cart,
        };
    }

    static async getCart() {
        const cart = storage.get("cart").value();
        return cart;
    }

    static async orderSubmission(order) {
        if (!order) {
            throw new BadRequestError("There was no order.");
        }

        const requiredFields = ["name", "email"];
        requiredFields.forEach((field) => {
            if (!order.order[field]) {
                throw new BadRequestError(
                    `${field} wasn't found in the request.body`
                );
            }
        });
        console.log(order.order.items.cartItem);
        if (Object.keys(order.order.items.cartItem).length === 0) {
            throw new BadRequestError("There was no cart items.");
        }

        const carts = await Products.getCart();
        const cartId = carts.length + 1;
        const newOrder = { id: cartId, ...order };

        storage.get("cart").push(newOrder).write();

        return newOrder;
    }

    static async getMostRecentCartEntry() {
        const carts = await Products.getCart();
        const lastCartId = carts.length;

        const lastEntryOfCart = storage
            .get("cart")
            .find({ id: Number(lastCartId) })
            .value();
        return lastEntryOfCart;
    }
}

module.exports = Products;

// {
//   "cart": {
//         "Bike": 2,
//         "Scooter": 3
//     },
//     "userInfo": {
//         "name": "SampleUser",
//         "email": "user@user.com"
//     }
// }
