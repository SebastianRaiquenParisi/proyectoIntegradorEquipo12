const express = require("express");
const productsController = require("../controllers/productController");
const productImageUpload = require("../middlewares/productImageMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const router = express.Router();

router.get("/", productsController.list);

router.get("/search", productsController.search);

router.get("/cart", productsController.shoppingCart);

router.get("/create", /* adminMiddleware, */ productsController.create);

router.post("/create", productImageUpload.any("image_url"), productsController.storage);

router.get("/:id", productsController.detail);

router.get("/edit/:id", adminMiddleware, productsController.edit);

router.put("/edit/:id", productsController.update);

router.delete("/:id", productsController.destroy); 

module.exports = router;