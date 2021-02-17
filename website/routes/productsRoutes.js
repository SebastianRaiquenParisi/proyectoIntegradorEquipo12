const express = require("express");
const productosController = require("../controllers/productosController");

const router = express.Router();

router.get("/", productosController.index);
router.get("/producto", productosController.product);
router.get("/ShoppingCart", productosController.shoppingCart);
router.get("/productFormNew", productosController.productFormNew);
router.get("/productFormEdit", productosController.productFormEdit);

module.exports = router;