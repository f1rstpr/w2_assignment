const express = require("express");
const router = express.Router();

const { NotFoundError } = require("../utils/error");
const Products = require("../model/products");

router.get("/products", async (req, res, next) => {
    try {
        res.status(200).json({ products: await Products.getProducts() });
    } catch (e) {
        next(e);
    }
});

router.get("/products/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await Products.getSingleProduct(productId);
        if (!product) {
            throw new NotFoundError("Product id not found");
        }
        res.status(200).json({ product: product });
    } catch (e) {
        next(e);
    }
});

router.post("/cart", async (req, res, next) => {
    try {
        const cartObj = req.body;
        console.log(cartObj);
        const cart = await Products.testOrder(cartObj);
        res.status(200).json({ cart: cart });
    } catch (e) {
        next(e);
    }
});

router.get("/cart", async (req, res, next) => {
    try {
        res.status(200).json({ cart: await Products.getCart() });
    } catch (e) {
        next(e);
    }
});

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

router.post("/", (req, res, next) => {
    const foo = req.body;
    res.status(200).json({ purchase: Products.order(foo) });
});

module.exports = router;
