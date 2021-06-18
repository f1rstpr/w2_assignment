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

        // if (!("userInfo" in cartObj)) {
        //     throw new BadRequestError("userInfo key not in request.body");
        // }

        // if (!("name" in cartObj.userInfo) || !("email" in cartObj.userInfo)) {
        //     throw new BadRequestError(
        //         "name or email not in request.body.userInfo"
        //     );
        // }

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

        // const newCart = {
            // ...order,
        // };
    }

    static order(obj) {
        //     if (!("cart" in obj)) {
        //         throw new BadRequestError("Cart key is not in request.body");
        //     }
        //     if (!("userInfo" in obj)) {
        //         throw new BadRequestError("userInfo key is not in request.body");
        //     }
        //     let totalCost = 0;
        //     // key is the item
        //     // obj.cart[key] is the value
        //     for (const key in obj.cart) {
        //         for (const p of products) {
        //             if (p.name === key) {
        //                 // if our cur product has the name same as our cur item in the cart, increment total cost
        //                 totalCost += parseFloat(p.price) * obj.cart[key];
        //             }
        //         }
        //     }
        //     return {
        //         name: obj.userInfo.name,
        //         email: obj.userInfo.email,
        //         totalCost: totalCost.toFixed(2),
        //     };
        //     // totalCost +=
        //     // return {totalCost: }
        // }
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
