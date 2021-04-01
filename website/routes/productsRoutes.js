const express = require("express");
const productosController = require("../controllers/productosController");
const productFileUpload = require("../middlewares/productsMulterMiddleware");
const router = express.Router();
const validation = require("../middlewares/validateMiddleware");
const {body} = require('express-validator'); //hace falta este?

router.get("/", productosController.index);

//router.get("/bannerProduct", productosController.bannerProduct); //ver esta ruta si está bien

router.get("/search", productosController.search);

router.get("/error404", productosController.error404);

router.get("/ShoppingCart", productosController.shoppingCart);

router.get("/create", productosController.create);

router.post("/create", productFileUpload.array("image",4), validation, productosController.storage); //agrego validaciones

router.get("/:id", productosController.detail);

router.get("/edit/:id", productosController.edit);

router.put("/edit/:id", validation, productosController.update); //agrego validaciones

router.delete("/:id", productosController.destroy); 

module.exports = router;