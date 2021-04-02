const express = require("express");
const productsController = require("../controllers/productController");
const productImageUpload = require("../middlewares/productImageMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const router = express.Router();
const validation = require("../middlewares/validateMiddleware");
const {body} = require('express-validator'); //hace falta este?

router.get("/", productsController.list);

router.get("/search", productsController.search);

router.get("/cart", productsController.shoppingCart);

router.get("/create", /* adminMiddleware, */ productsController.create);

router.post("/create", validation, productImageUpload.any("image_url"), productsController.storage);

router.get("/:id", productsController.detail);

router.get("/edit/:id", adminMiddleware, productsController.edit);

router.put("/edit/:id", validation, productsController.update);

router.delete("/:id", productsController.destroy);

router.get("/error404", productsController.error404);

module.exports = router;