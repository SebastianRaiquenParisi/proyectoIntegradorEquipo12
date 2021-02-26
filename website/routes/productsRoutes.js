const express = require("express");
const productosController = require("../controllers/productosController");

const router = express.Router();

router.get("/", productosController.index);

//router.get("/producto", productosController.product);

router.get("/ShoppingCart", productosController.shoppingCart);

router.get("/productFormNew", productosController.productFormNew);

//router.post("/productFormNew", productosController.productFormNew);

router.get("/detail/:id", productosController.detail);

router.get("/edit/:id", productosController.edit);

//router.put("/edit/:id", productosController.update);

module.exports = router;