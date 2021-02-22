const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");
const fileUpload = require("../middlewares/multerMiddleware")

router.get("/login", userController.login);

router.get("/register", userController.register);

router.post("/register", fileUpload.single("image"), userController.processRegister); 

module.exports=router;