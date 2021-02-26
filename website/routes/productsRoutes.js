const express = require("express");
const productosController = require("../controllers/productosController");
const {body} = require('express-validator');
const router = express.Router();

//validaciones
const validateCreateForm = [
    
];
router.get("/listadoProductos", productosController.index);
router.get("/producto", productosController.product);
router.get("/ShoppingCart", productosController.shoppingCart);
router.get("/productFormNew", productosController.productFormNew);
router.get("/productFormEdit", productosController.productFormEdit);

module.exports = router;