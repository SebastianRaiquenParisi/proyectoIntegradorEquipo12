const express = require("express");
const productosController = require("../controllers/productosController");

const router = express.Router();

router.get("/listadoProductos", productosController.index);
router.get("/producto", productosController.product);
router.get("/ShoppingCart", productosController.shoppingCart);
router.get("/productForm", productosController.productForm);

module.exports = router;