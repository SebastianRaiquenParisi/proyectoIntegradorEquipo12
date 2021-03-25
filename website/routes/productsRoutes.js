const express = require("express");
const productsController = require("../controllers/productsController");
const productFileUpload = require("../middlewares/productsMulterMiddleware");
const router = express.Router();

router.get("/", productsController.list);

router.get("/search", productsController.search);

router.get("/ShoppingCart", productsController.shoppingCart);

router.get("/create", productsController.create);

router.post("/create", productFileUpload.array("image",4), productsController.storage);

router.get("/:id", productsController.detail);

router.get("/edit/:id", productsController.edit);

router.put("/edit/:id", productsController.update);

router.delete("/:id", productsController.destroy); 

module.exports = router;