const express = require("express");
const productosController = require("../controllers/productosController");
const {body} = require('express-validator');
const productFileUpload = require("../middlewares/productsMulterMiddleware");
const router = express.Router();

router.get("/", productosController.index);

//router.get("/bannerProduct", productosController.bannerProduct); //ver esta ruta si está bien

router.get("/search", productosController.search);

router.get("/ShoppingCart", productosController.shoppingCart);

router.get("/create", productosController.create);

router.post("/create", productFileUpload.array("image",4), productosController.storage);

router.get("/:id", productosController.detail);

router.get("/edit/:id", productosController.edit);

router.put("/edit/:id", productosController.update);

router.delete("/:id", productosController.destroy); 

module.exports = router;